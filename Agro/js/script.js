$(document).ready(function(){
            $('#helo').click(function(){
                $('h1').show();
            })
        })
        $(document).ready(function(){
            $('#hehe').click(function(){
                $('h1').hide();
            })
        })
        $(document).ready(function(){
            $('#hu').click(function(){
                $('h3').toggle();
            })
        })
        $(document).ready(function(){
            $('#btn4').click(function(){
                $('#div1').animate({
                    left: "500px"});
            })
        })
         $(document).ready(function(){
            $('#btn5').click(function(){
                if ($('#btn5').val()=="show"){
                    $('h1').hide();
                    $('#btn5').val("hide");
                }else{
                    $('h1').show();
                    $('#btn5').val("show");
                }
            })
        })
        $(document).ready(function(){
            $('#btn6').click(function(){
                $('#div2').animate({
                    right: "660px"});
            })
        })
        $(document).ready(function(){
            $('#btn7').click(function(){
                $('#div3').animate({
                    bottom: "360px"});
            })
        })
        $(document).ready(function(){
            $('#btn8').click(function(){
                $('#div4').animate({
                    top: "550px"});
            })
        })
           $(document).ready(function(){
            $('#btn9').click(function(){
                $('#div2').fadeIn();
        })
        })
           $(document).ready(function(){
            $('#btn10').click(function(){
                $('#div4').fadeIn();
        })
        })
           $(document).ready(function(){
            $('#btn11').click(function(){
                $('#div3').fadeIn();
        })
        })
           $(document).ready(function(){
            $('#btn12').click(function(){
                $('#div3').fadeOut(500);
                   $('#div3').css({"background-color":"red"});
        })
        })
          $(document).ready(function(){
            $('#btn13').click(function(){
                $('#div5').slideUp(5000);
                 
        })
        })
          $(document).ready(function(){
            $('#btn14').click(function(){
                $('#div5').remove();
                 
        })
        })
         $(document).ready(function(){
            $('#btn15').click(function(){
                $('#div5').empty();
                 
        })
        })
             $(document).ready(function(){
            $('#btn16').click(function(){
                $('#div5').addClass("orange");
                 
        })
        })
            $(document).ready(function(){
            $('#btn17').click(function(){
                $('#div5').removeClass("orange");
                 
        })
		
		
		})
		