$(document).ready(function(){
  const listaEmojis = ['lol', 'happy', 'sad','love','angel','teeth', 'tongue', 'kiss', 'pissed','embarrased', 'dead'];
  let iCnt = 0;
  let taperinoBool = true;
  let emojisToggle = true;
  let faxToggle = true;
  let inicianEmojis = false;

  $('#titleHover').click(function(){
    // window.open('https://www.instagram.com/centro_cultural_kappa/', '_blank');
    if($(window).width()>700){
      document.querySelector('.section2').scrollIntoView({
        behavior: 'smooth'
      });
      // console.log('hola');
    }
    // else if($(window).width()<700){
    //   emojisToggle = false;
    //   $('.section2').css({'display':'inline-table','visibility':'visible'});
    //   $('.section2').removeClass('invisible');
    //   $('.section2').addClass('visible');
    // }

  });

  function removeEmoji(emoji){
      const tamanoEmoji = ['SmallRight','SmallMid','SmallLeft','MidRight','MidMid','MidLeft','BigRight','BigMid','BigLeft']
      if($(window).width()>700){
          let ranEmoj = Math.floor((Math.random()*(tamanoEmoji.length-6)));
          emoji.addClass('emoji-'+tamanoEmoji[ranEmoj]);
          // console.log(tamanoEmoji[ranEmoj]);
      }else if($(window).width()<700){
          let ranEmoj = Math.floor((Math.random()*(tamanoEmoji.length)));
          emoji.addClass('emoji-'+tamanoEmoji[ranEmoj]);
          // console.log(ranEmoj);
      }


      setTimeout(function(){
          emoji.remove();
      },11000);
  }


  var interval = setInterval(function(){
    if(emojisToggle && inicianEmojis){
      iCnt++;
      let randX = Math.floor(Math.random()*($(window).width()-100));
      let randY = Math.floor(Math.random()*($(window).height()-300));

      $(".positionR").append('<img class="emoji" src="assets/'+listaEmojis[(Math.floor((Math.random()*listaEmojis.length)))]+'.png"'+' style="'+'left:'+ randX+'px; top:'+randY+'px;"'+'id="iCnt'+iCnt+'"'+'/>');
      const emojiActual = $("#iCnt"+iCnt);
      removeEmoji(emojiActual);
      // clearInterval(interval);
    }
  },2000);

  setTimeout(function(){
    if(taperinoBool){
      taperinoBool = false;
      $(".taperino").addClass("desaparece");
      $(".card").addClass("aparece");
      $("footer").addClass("aparece");
      setTimeout(function(){
          $("footer").css("display","flex");
      },100);
      inicianEmojis = true;
    }
  },200);

var puerta = false;

  $("#folder").click(function(){

    if($(window).width()>700){
      document.querySelector('.section2').scrollIntoView({
        behavior: 'smooth'
      });
      // console.log('hola');
    }else if($(window).width()<700){
      if (!puerta) {
        emojisToggle = false;
        $('.section2').css({'display':'inline-table','visibility':'visible'});
        $('.section2').removeClass('invisible');
        $('.section2').addClass('visible');
        $("#folder").attr('src','assets/folder_cerrar.png');
        puerta = true;
      }else{
        $("html, body").animate({ scrollTop: 0 }, "slow", function(){
          $('.section2').removeClass('visible');
          $('.section2').addClass('invisible');
          $("#folder").attr('src','assets/folder.png');
          setTimeout(function(){
            $('.section2').css({'display':'none','visibility':'hidden'});
            if(faxToggle){
              emojisToggle = true;
            }
          },800);
          puerta = false;
        });
      };

    }

    // $(".contacto").css("visibility",'hidden');

  });

  $("#backButton").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow", function(){
      $('.section2').removeClass('visible');
      $('.section2').addClass('invisible');
      setTimeout(function(){
          $('.section2').css({'display':'none','visibility':'hidden'});
          if(faxToggle){
              emojisToggle = true;
          }
      },800);
    });
  });

  $("#fax").click(function(){
    $(".contacto").css("visibility",'visible');
    faxToggle = false;
    emojisToggle = false;
  });

  $("#close").click(function(){
    $(".contacto").css("visibility",'hidden');
    setTimeout(function(){
        faxToggle = true;
        emojisToggle = true;
    },200);
  });


  $("#copyMail").click(function() {
    /* Get the text field */
    var copyText = $(".contacto")[0].children[3];
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(copyText).text()).select();
    document.execCommand("copy");
    $temp.remove();

    alert('e-mail copiado.')

  })
});
