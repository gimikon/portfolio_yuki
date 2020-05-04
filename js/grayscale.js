var firebaseConfig = {
  apiKey: "AIzaSyAfOF4YA7pP-spso7yEfsfSHhAhTteZKc4",
  authDomain: "contact-form-c48dd.firebaseapp.com",
  databaseURL: "https://contact-form-c48dd.firebaseio.com",
  projectId: "contact-form-c48dd",
  storageBucket: "contact-form-c48dd.appspot.com",
  messagingSenderId: "123611450902",
  appId: "1:123611450902:web:4adb3856eeeabb4c482f37",
  measurementId: "G-RWY0154ZY6"
};
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages')

  //listen for form submit 
  document.getElementById('contactForm').addEventListener('submit',
  submitForm);

  function submitForm(e){
    e.preventDefault();
    var name = getInputValue('name')
    var email = getInputValue('email')
    var message = getInputValue('message')
    saveMessage(name, email, message)
    document.querySelector('.alert').style.display='block'

    setTimeout(function(){
      document.querySelector('.alert').style.display='none'
    }, 3000)

    document.getElementById('contactForm').reset();
  }

  //function to get values

  function getInputValue(id){
    return document.getElementById(id).value; 

  } 

  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name:name,
      email:email,
      message:message
    }); 

  }





(function($) {
  "use strict"; // Start of use strict


  
  // Initialize Firebase
 


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);




})(jQuery); // End of use strict
