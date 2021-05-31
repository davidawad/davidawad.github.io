const begging_strings = ["Yeah!",
  "I accept bitcoin." ,
  "Whatever you have to spare." ,
  "I would take it gladly," ,
  "truly I would" ,
  "it's not difficult" ,
  "just scan that QR code right there" ,
  "yes that one." ,
  "you're looking at it" ,
  "just do it." ,
  "support this blog" ,
  "be the hero we don't deserve." ,
  "I mean really," ,
  "I write these blog posts;" ,
  "slave over a hot cpu." ,
  "1gtRkH3399UipceRUG2xWRyYsYQk84SFM"
];


$(function(){
      $(".typed").typed({
        strings: begging_strings,
        startDelay: 1500,
        backDelay: 500,
        showCursor: false,
        typeSpeed: 40,
        contentType: 'text',
        loop: true
      });
  });
