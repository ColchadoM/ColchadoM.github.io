var palabras = [];
var palabra = '';
var hexes = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
var creaInformacion = ()=>{
  for (var j = 0; j < 100; j++) {
    palabra = '';
    for (var i = 0; i < 100; i++) {
      var randColor = Math.floor(Math.random()*360);
      var randHex1 = Math.floor(Math.random()*hexes.length);
      var randHex2 = Math.floor(Math.random()*9);
      var randHex3 = Math.floor(Math.random()*hexes.length);
      var randHex4 = Math.floor(Math.random()*hexes.length);
      var randHex = '0x1'+'F'+hexes[randHex2]+hexes[randHex3]+hexes[randHex4];
      randHex.toString(16);
      var randHex2 = String.fromCodePoint(randHex);
      var letra = '<span style="color:hsl('+randColor+',100%,50%)">'+randHex2+'</span>';
      palabra+=letra;
    };
    palabras.push(palabra);
  }
};
creaInformacion();



var inicioFunction = function(){
  var counter = 0;
  var intervalo = setInterval(()=>{
    if (counter==0) {
      var ventanaInicio = window.open("","_blank","height=550,width=300,top="+(80)+",left="+((window.innerWidth)-600)+",scrollbars=no,resizable=no");
      ventanaInicio.document.write(
        `
        <img id="imagenTuto" style="width:200px; position:relative;left:50%;transform:translate(-50%,0)" src="assets/redArrow.png">
        <h2>Para continuar, da click en permitir ventanas emergentes.</h2>
        <img id="imagenTuto2" style="width:280px; position:relative;left:50%;transform:translate(-50%,0)" src="assets/popups.jpg">
        `
      );
    };
    if(counter>=1){
      var ventanaInicio = window.open("","_blank","height=550,width=600,top="+((window.innerHeight/2)-275)+",left="+((window.innerWidth/2)-350)+",scrollbars=no,resizable=no");
      ventanaInicio.document.write(
        `
        <body style="background-color:black; color:white"></body>
        `
      );
      ventanaInicio.close();

      clearInterval(intervalo);
    };
    counter++;
  },200);
  setTimeout(function(){
    document.getElementById('botonEntrar').style.display = 'none';
    document.getElementById('botonInicio').style.display = 'block';
  },2000);
};

var visibleVirus = function(){
  var button = document.getElementById('botonInicio');
  button.style.display = 'block';
};





var openFunction = function(){
  document.getElementById('warning').style.display = "none";
  document.getElementById('warning2').style.display = "none";

  var imagenInfo = document.getElementById("imagen");

  var counter=0;
  var adder=0;
  var flip = true;
  var colores = ['black','black'];
  var valueSin;
  var valueCos;
  var stringLargo = '';
  var randomPosX=0;
  var randomPosY=0;

  var intervalo = setInterval(()=>{

    counter++;
    randomPosX = Math.floor(Math.random()*window.innerWidth);
    randomPosY = Math.floor(Math.random()*window.innerHeight-200);

    var ventana2 = window.open("","_blank","height=300,width=300,top="+randomPosY+",left="+randomPosX+",scrollbars=no,resizable=no");

    ventana2.document.write(`
      <body style="background-color:black"></body>
      <h1 style="position:absolute;left:50%;transform:translate(-50%,0);font-size:1em">`+palabras[counter%(palabras.length)]+`</h1>
    `);


    if (counter>=10) {
      stringLargo = stringLargo.slice(50);
      stringLargo = stringLargo.concat(palabras[counter%(palabras.length)]);
    }else{
      stringLargo = stringLargo.concat(palabras[counter%(palabras.length)]);
    }
    document.getElementById('geneticCode').innerHTML = stringLargo;

    setTimeout(()=>{
      ventana2.close();
    },800);
    if (counter>=100) {
      clearInterval(intervalo);
    }
  },270);
};
