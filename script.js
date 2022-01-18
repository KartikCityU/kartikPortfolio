  $(document).ready(function(){
      $(window).scroll(function(){
          if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
          }
          else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show")
        }
        else{
            $('.navbar').removeClass("show");
        }
        
        });

        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0})
        })

          // toggle menu scripts

        $('.menu-btn').click(function(){
            $(' .navbar .menu').toggleClass("active")
            $('.menu-btn i').toggleClass("active")
        });

        var typed = new Typed(".typing",{
            strings:["CS Enthusiast","Developer", "Blogger", "Designer", "Freelancer", "Student"],
            typespeed: 20,
            backspeed: 10,
            loop: true
        });

        var typed = new Typed(".typing-2",{
            strings:["CS Enthusiast","Developer", "Blogger", "Designer", "Freelancer", "Student"],
            typespeed: 20,
            backspeed: 10,
            loop: true
        });

    });

  

   