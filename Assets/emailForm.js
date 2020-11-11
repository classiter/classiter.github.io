$(document).ready(function(){
    $('nav').on('mouseenter','.button',function(){
      $(this).animate({'top':'20px'});
    })
      function email_form(){
         let guest_email = $('#contactEmailForm').val(),
         guest_message = $('#contactTextarea').val();
         $.ajax({
          url: "https://formspree.io/classiter6289@gmail.com", 
          method: "POST",
          data: {email: guest_email,
                message: guest_message,},
          dataType: "json",
           success: function(event){
             //event.preventDefault();
             $('.contactMe_copy').hide();
             $(".result").html("<div class=\"alert alert-success\">Your message was sent successfully. Thank you.</div>").addClass("animated fadeIn");;
           },
           error: function(){
             $(".result").html("<span class=\"alert alert-danger\">Something went wrong or was not filled in correctly. Please try again.</span>").addClass("animated fadeIn");;
           }
        });
      }
      
      $(".mmenu_icon").on("click",function(){
          let iteration = $(this).data('iteration') || 1;
                switch ( iteration) {
                    case 1:
              $(".mobile_menu").css({"display":"flex"});
                        break;
                    case 2:
                        $(".mobile_menu").css({"display":"none"});
                        break;
                }
                iteration++;
                if (iteration>2) iteration=1;
                $(this).data('iteration',iteration);
      });
      
      $(".submit_btn").on("click",function(){
          email_form();
      });
      
    });