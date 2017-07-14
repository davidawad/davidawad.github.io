jQuery(document).ready(function($){
	var messages = $('div[data-type="message"]');

	//check if user updates the email field
	$('.cd-form .cd-email').keyup(function(event){
		//check if user has pressed the enter button (event.which == 13)
		if(event.which!= 13) {
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

	//you should replace this part with your ajax function
	$('.cd-submit').on('click', function(event){

    var user_email = $('input.cd-email').val();
    console.log(user_email);

    // we have the email, now we need to add it to the email list
    const sg_key = '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';
    const site_subs_list_id = '1634799';

    // add user's email to list of contacts/recipients
    var settings_createuser = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.sendgrid.com/v3/contactdb/recipients",
      "method": "POST",
      "headers": {
        "authorization": "Bearer "+ sg_key ,
        "content-type": "application/json"
      },
      "processData": false,
      "data": "[{\"email\":\""+user_email+"\"}]"
    }

    $.ajax(settings_createuser).done(function (response) {

      console.log(response);
      // persisted recipients should be populated upon sucessful recipient create
      var recipient_id = response.persisted_recipients[0];
      console.log(recipient_id)

      // add new contact to list of subs
      var settings_adduser = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.sendgrid.com/v3/contactdb/lists/"+site_subs_list_id+"/recipients/"+recipient_id,
        "method": "POST",
        "headers": {
          "authorization": "Bearer " + sg_key,
          "content-type": "application/json"
        },
        "processData": false
      }

      // TODO clean this shit up
      $.ajax(settings_adduser)
        .always(function (response) {

          console.log('request completed');
          console.log(response);

          // if (response.new_count === 1){ // request successful
            console.log('request successful, email added to SG')
            showMessage('yes');
          // }
        });
        // .fail(function(jqXHR, textStatus) {
          // // request failed
          // console.log(jqXHR, textStatus);
          // console.log('request failed :(')
          // showMessage('no');
        // })
    });

    // end of requests, if user has been successfully added we'll handle it

		if($('.cd-form').hasClass('is-active')) {
			event.preventDefault();
			//show the loading bar and the corrisponding message
			$('.cd-form').addClass('is-submitted').find('.cd-loading').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				// showMessage();
			});

			//if transitions are not supported - show messages
			if($('html').hasClass('no-csstransitions')) {
				// showMessage();
			}
		}

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
