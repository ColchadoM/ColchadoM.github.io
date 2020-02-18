$(document).ready(function(){
  const listaEmojis = ['lol', 'happy', 'sad','love','angel','teeth', 'tongue', 'kiss', 'pissed','embarrased', 'dead'];
  let iCnt = 0;
  let taperinoBool = true;
  let emojisToggle = true;
  let faxToggle = true;

  function removeEmoji(emoji){
      let randSize = 0;
      let randRotation = 0;
      if ($(window).width() < 460) {
        randSize = (Math.floor((Math.random()*40)+30));
        randRotation = (Math.floor((Math.random()*(-600))+300));
      }else{
        randSize = (Math.floor((Math.random()*30)+5));
        randRotation = (Math.floor((Math.random()*(-600))+300));
      }
      emoji.css({"--emoji-size":randSize+'vw',"--emoji-final-rotation":randRotation+'deg'});

      setTimeout(function(){
          emoji.remove();
      },11000);
  }

  $("body").click(function(event){
    if(emojisToggle){
      if(taperinoBool){
        taperinoBool = false;
        $(".taperino").addClass("desaparece");
      }
        iCnt++;
        $(".positionR").append('<img class="emoji" src="assets/'+listaEmojis[(Math.floor((Math.random()*listaEmojis.length)))]+'.png"'+' style="width:'+(Math.floor((Math.random()*40)+20))+'%;'+'left:'+ event.pageX+'px; top:'+event.pageY+'px;"'+'id="iCnt'+iCnt+'"'+'/>');
        const emojiActual = $("#iCnt"+iCnt);
        removeEmoji(emojiActual);
    }
  });

  $("#folder").click(function(){
    emojisToggle = false;
    // $(".contacto").css("visibility",'hidden');
    $('.section2').css({'display':'block','visibility':'visible'});
    $('.section2').removeClass('invisible');
    $('.section2').addClass('visible');
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
      },2000);
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

});
