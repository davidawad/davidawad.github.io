---
---

jQuery(document).ready(function($) {
	var messages = $('div[data-type="message"]');

	//check if user updates the email field
	$('.cd-form .cd-email').keyup(function(event){
		//check if user has pressed the enter button (event.which == 13)
		if(event.which != 13) {
			//if not..
			//hide messages and loading bar
			messages.removeClass('slide-in is-visible');
			$('.cd-form').removeClass('is-submitted').find('.cd-loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
		}

		var emailInput = $(this),
			insertedEmail = emailInput.val(),
			atPosition = insertedEmail.indexOf("@");
	    	dotPosition = insertedEmail.lastIndexOf(".");
	    //check if user has inserted a "@" and a dot
	    if (atPosition< 1 || dotPosition<atPosition+2 ) {
	    	//if he hasn't..
	    	//hide the submit button
	    	$('.cd-form').removeClass('is-active').find('.cd-loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
	    } else {
	    	//if he has..
	    	//show the submit button
	    	$('.cd-form').addClass('is-active');
	    }
	});

	//backspace doesn't fire the keyup event in android mobile
	//so we check if the email input is focused to hide messages and loading bar
	$('.cd-form .cd-email').on('focus', function(){
		messages.removeClass('slide-in is-visible');
		$('.cd-form').removeClass('is-submitted').find('.cd-loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
	});



  // show message is called
	function showMessage(option) {
    // takes 'yes' 'no' or 'other'
		if( option === "yes" ) {
			$('.cd-response-success').addClass('slide-in');
            // TODO wait two seconds and show notification
			// $('.cd-response-notification').addClass('is-visible');
		}
        if ( option === "no" ) {
			$('.cd-response-error').addClass('is-visible');
		}
	}


	$('.cd-submit').on('click', function(event){

        // prevent default event handler
        event.preventDefault();

        var user_email = $('input.cd-email').val();

        // add user's email to list of contacts/recipients
        var subscribeSettings = {
            "async": true,
            "crossDomain": true,
            "url": "https://backend-davidawad.herokuapp.com/subscribe_email?email="+user_email,
            "method": "POST",
            "data": "[{\"email\":\""+user_email+"\"}]"
        }

        var subscribed = false;

        if($('.cd-form').hasClass('is-active')) {

        //show the loading bar
        $('.cd-form').addClass('is-submitted').find('.cd-loading').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');

        //if transitions are not supported - show messages
        if($('html').hasClass('no-csstransitions')) {
            // showMessage();
        }

    }

    $.ajax(subscribeSettings).done(function (response) {

      console.log(response);
      if (response.status === 'success'){ subscribed = true; }

      // end of requests, if user has been successfully added we'll handle it
      if (subscribed){
        showMessage('yes');
      } else {
        showMessage('no');
      }
    }); // End of ajax call
  }); // closer for click handler



	//placeholder fallback (i.e. IE9)
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}

});
