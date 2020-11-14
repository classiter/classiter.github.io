$(document).ready(function(){
  var $toggle = $('.navbar-burger');
  var $menu = $('.navbar-menu');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });
  
  function email_form(){
    let guest_email = $('#contactEmailForm').val(),
        guest_message = $('#contactTextarea').val();
        $.ajax({
          url: "https://formspree.io/f/xaylbjak", 
          method: "POST",
          data: {email: guest_email,
                message: guest_message,},
          dataType: "json",
          success: function(event){
            //event.preventDefault();
            $('#contactMe').hide();
            $(".result").html("<div class=\"alert alert-success\">Your message was sent successfully. Thank you.</div>");
          },
          error: function(){
            $(".result").html("<span class=\"alert alert-danger\">Something went wrong or was not filled in correctly. Please try again.</span>");
          }
        });
  }

  $("#submitButton").on("click",function(){
    email_form();
  });

});