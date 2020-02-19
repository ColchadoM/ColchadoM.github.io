$(document).ready(function(){
  const listaEmojis = ['lol', 'happy', 'sad','love','angel','teeth', 'tongue', 'kiss', 'pissed','embarrased', 'dead'];
  let iCnt = 0;
  let taperinoBool = true;
  let emojisToggle = true;
  let faxToggle = true;

  function removeEmoji(emoji){
      const tamanoEmoji = ['BigRight','BigMid','BigLeft','MidRight','MidMid','MidLeft','SmallRight','SmallMid','SmallLeft']

      emoji.addClass('emoji-'+tamanoEmoji[(Math.floor((Math.random()*tamanoEmoji.length)))]);

      setTimeout(function(){
          emoji.remove();
      },11000);
  }

  $("body").click(function(event){
    if(emojisToggle){
      if(taperinoBool){
        taperinoBool = false;
        $(".taperino").addClass("desaparece");
        $(".card").addClass("aparece");
        $("footer").addClass("aparece");
      }
        iCnt++;
        $(".positionR").append('<img class="emoji" src="assets/'+listaEmojis[(Math.floor((Math.random()*listaEmojis.length)))]+'.png"'+' style="'+'left:'+ event.pageX+'px; top:'+event.pageY+'px;"'+'id="iCnt'+iCnt+'"'+'/>');
        const emojiActual = $("#iCnt"+iCnt);
        removeEmoji(emojiActual);
    }
  });

  $("#folder").click(function(){
    emojisToggle = false;
    // $(".contacto").css("visibility",'hidden');
    $('.section2').css({'display':'inline-table','visibility':'visible'});
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


  $("#copyMail").click(function() {
    /* Get the text field */
    var copyText = $(".contacto")[0].children[3];
    console.log(copyText);
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(copyText).text()).select();
    document.execCommand("copy");
    $temp.remove();

    alert('e-mail copiado.')

  })
});
