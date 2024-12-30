//defino todos los div
const div1=document.getElementById('1');
const div2=document.getElementById('2');
const div3=document.getElementById('3');
const div4=document.getElementById('4');
const div5=document.getElementById('5');
const div6=document.getElementById('6');
const div7=document.getElementById('7');
const div8=document.getElementById('8');
const div9=document.getElementById('9');

//defino las imagenes de cada div
const img1=document.getElementById('imagen1');
const img2=document.getElementById('imagen2');
const img3=document.getElementById('imagen3');
const img4=document.getElementById('imagen4');
const img5=document.getElementById('imagen5');
const img6=document.getElementById('imagen6');
const img7=document.getElementById('imagen7');
const img8=document.getElementById('imagen8');
const img9=document.getElementById('imagen9');
const imgTurno=document.getElementById('imagenTurno');
const imgGanador=document.getElementById('imagenGanador');


//defino el boton reinciar
const botonReiniciar=document.getElementById('botonReiniciar');

var turno="X";
var resultado1="";
var resultado2="";
var resultado3="";
var resultado4="";
var resultado5="";
var resultado6="";
var resultado7="";
var resultado8="";
var resultado9="";
var ganador="";


//funcion que cambia el turno, se ejecuta en cada click
function cambiarTurno(){
    if(turno=="X"){
        turno="O";
    }
    else{
        turno="X";
    }
}

//en lugar de esto poner otras imagenes de otro color y alternar
function mostrarTurno(turno){
    if(turno=="X"){
        imgTurno.setAttribute("src","img/oActivo.jpg");
        
    }
    else{
        imgTurno.setAttribute("src","img/xActivo.jpg");
    }
}


//verifica si ya fue seleccionada esa posicion
function verificarPosicion(resultado){
    if(resultado!="X" && resultado!="O"){
        return true;
    }
    else{
        return false;
    }
}


//verifcar todas las combinaciones ganadoras y si alguna coincide da ganador a ese resutado("X o O")
function verifcarGanador(){
    //linea superior
    if(resultado1==resultado2 && resultado2==resultado3 && resultado1!=""){
        ganador= resultado1;
        if(ganador=="X"){
            img1.setAttribute("src","img/xActivo.jpg");
            img2.setAttribute("src","img/xActivo.jpg");
            img3.setAttribute("src","img/xActivo.jpg");
            imgGanador.setAttribute("src","img/xActivo.jpg");
        }
        else{
            img1.setAttribute("src","img/oActivo.jpg");
            img2.setAttribute("src","img/oActivo.jpg");
            img3.setAttribute("src","img/oActivo.jpg");
            imgGanador.setAttribute("src","img/oActivo.jpg");
        }
        imgTurno.setAttribute("src","");
        return;       
    }
    //linea media
    if(resultado4==resultado5 && resultado5==resultado6 && resultado4!=""){
        ganador= resultado4;
        if(ganador=="X"){
            img4.setAttribute("src","img/xActivo.jpg");
            img5.setAttribute("src","img/xActivo.jpg");
            img6.setAttribute("src","img/xActivo.jpg");
            imgGanador.setAttribute("src","img/xActivo.jpg");
        }
        else{
            img4.setAttribute("src","img/oActivo.jpg");
            img5.setAttribute("src","img/oActivo.jpg");
            img6.setAttribute("src","img/oActivo.jpg");
            imgGanador.setAttribute("src","img/oActivo.jpg");
        }     
        imgTurno.setAttribute("src","");
        return;   
    }
    //linea inferior
    if(resultado7==resultado8 && resultado8==resultado9 && resultado7!=""){
        ganador= resultado7;
        if(ganador=="X"){
            img7.setAttribute("src","img/xActivo.jpg");
            img8.setAttribute("src","img/xActivo.jpg");
            img9.setAttribute("src","img/xActivo.jpg");
            imgGanador.setAttribute("src","img/xActivo.jpg");
        }
        else{
            img7.setAttribute("src","img/oActivo.jpg");
            img8.setAttribute("src","img/oActivo.jpg");
            img9.setAttribute("src","img/oActivo.jpg");
            imgGanador.setAttribute("src","img/oActivo.jpg");
        }
        imgTurno.setAttribute("src","");
        return;      
    }
    // columna 1
    if(resultado1==resultado4 && resultado4==resultado7 && resultado1!=""){
        ganador= resultado1;
        if(ganador=="X"){
            img1.setAttribute("src","img/xActivo.jpg");
            img4.setAttribute("src","img/xActivo.jpg");
            img7.setAttribute("src","img/xActivo.jpg");
            imgGanador.setAttribute("src","img/xActivo.jpg");
        }
        else{
            img1.setAttribute("src","img/oActivo.jpg");
            img4.setAttribute("src","img/oActivo.jpg");
            img7.setAttribute("src","img/oActivo.jpg");
            imgGanador.setAttribute("src","img/oActivo.jpg");
        }    
        imgTurno.setAttribute("src","");
        return;    
    }
    //columna 2
    if(resultado2==resultado5 && resultado5==resultado8 && resultado2!=""){
        ganador= resultado2;
        if(ganador=="X"){
            img2.setAttribute("src","img/xActivo.jpg");
            img5.setAttribute("src","img/xActivo.jpg");
            img8.setAttribute("src","img/xActivo.jpg");
            imgGanador.setAttribute("src","img/xActivo.jpg");
        }
        else{
            img2.setAttribute("src","img/oActivo.jpg");
            img5.setAttribute("src","img/oActivo.jpg");
            img8.setAttribute("src","img/oActivo.jpg");
            imgGanador.setAttribute("src","img/oActivo.jpg");
        }     
        imgTurno.setAttribute("src","");
        return;   
    }

    //columna 3
    if(resultado3==resultado6 && resultado6==resultado9 && resultado3!=""){
        ganador= resultado3;
        if(ganador=="X"){
            img3.setAttribute("src","img/xActivo.jpg");
            img6.setAttribute("src","img/xActivo.jpg");
            img9.setAttribute("src","img/xActivo.jpg");
            imgGanador.setAttribute("src","img/xActivo.jpg");
        }
        else{
            img3.setAttribute("src","img/oActivo.jpg");
            img6.setAttribute("src","img/oActivo.jpg");
            img9.setAttribute("src","img/oActivo.jpg");
            imgGanador.setAttribute("src","img/oActivo.jpg");
        }  
        imgTurno.setAttribute("src","");
        return;      
    }
    //diagonal 1
    if(resultado1==resultado5 && resultado5==resultado9 && resultado1!=""){
        ganador= resultado1;
        if(ganador=="X"){
            img1.setAttribute("src","img/xActivo.jpg");
            img5.setAttribute("src","img/xActivo.jpg");
            img9.setAttribute("src","img/xActivo.jpg");
            imgGanador.setAttribute("src","img/xActivo.jpg");
        }
        else{
            img1.setAttribute("src","img/oActivo.jpg");
            img5.setAttribute("src","img/oActivo.jpg");
            img9.setAttribute("src","img/oActivo.jpg");
            imgGanador.setAttribute("src","img/oActivo.jpg");
        } 
        imgTurno.setAttribute("src","");
        return;       
    }
    //diagonal 2
    if(resultado3==resultado5 && resultado5==resultado7 && resultado3!=""){
        ganador= resultado3;
        if(ganador=="X"){
            img3.setAttribute("src","img/xActivo.jpg");
            img5.setAttribute("src","img/xActivo.jpg");
            img7.setAttribute("src","img/xActivo.jpg");
            imgGanador.setAttribute("src","img/xActivo.jpg");
        }
        else{
            img3.setAttribute("src","img/oActivo.jpg");
            img5.setAttribute("src","img/oActivo.jpg");
            img7.setAttribute("src","img/oActivo.jpg");
            imgGanador.setAttribute("src","img/oActivo.jpg");
        } 
        imgTurno.setAttribute("src","");
        return;       
    }
}

//evento click en todos los div
div1.addEventListener('click',(event)=>{  
    if(verificarPosicion(resultado1)){
        //console.log(turno);
        if(turno=="X"){
          img1.setAttribute("src","img/x.jpg");
          resultado1="X";
        }
        else{
            img1.setAttribute("src","img/o.jpg");
            resultado1="O";
        }
        mostrarTurno(turno);
        cambiarTurno();   
    }
    verifcarGanador();
});

div2.addEventListener('click',(event)=>{
    if(verificarPosicion(resultado2)){
        if(turno=="X"){
          img2.setAttribute("src","img/x.jpg");
          resultado2="X";
        }
        else{
            img2.setAttribute("src","img/o.jpg");
            resultado2="O";
        }
        mostrarTurno(turno);
        cambiarTurno();   
    }
    verifcarGanador();
});

div3.addEventListener('click',(event)=>{
    if(verificarPosicion(resultado3)){    
        if(turno=="X"){
          img3.setAttribute("src","img/x.jpg");
          resultado3="X";
        }
        else{
            img3.setAttribute("src","img/o.jpg");
            resultado3="O";
        }
        mostrarTurno(turno);
        cambiarTurno();    
    }
    verifcarGanador();
});

div4.addEventListener('click',(event)=>{
    if(verificarPosicion(resultado4)){
        if(turno=="X"){
          img4.setAttribute("src","img/x.jpg");
          resultado4="X";
        }
        else{
            img4.setAttribute("src","img/o.jpg");
            resultado4="O";
        }
        mostrarTurno(turno);
        cambiarTurno(); 
    }
    verifcarGanador();
});

div5.addEventListener('click',(event)=>{
    if(verificarPosicion(resultado5)){
        if(turno=="X"){
          img5.setAttribute("src","img/x.jpg");
          resultado5="X";
        }
        else{
            img5.setAttribute("src","img/o.jpg");
            resultado5="O";
        }
        mostrarTurno(turno);
        cambiarTurno();        
    }
    verifcarGanador();
});

div6.addEventListener('click',(event)=>{
    if(verificarPosicion(resultado6)){
        if(turno=="X"){
          img6.setAttribute("src","img/x.jpg");
          resultado6="X";
        }
        else{
            img6.setAttribute("src","img/o.jpg");
            resultado6="O";
        }
        mostrarTurno(turno);
        cambiarTurno();        
    }
    verifcarGanador();
});

div7.addEventListener('click',(event)=>{
    if(verificarPosicion(resultado7)){
        if(turno=="X"){
          img7.setAttribute("src","img/x.jpg");
          resultado7="X";
        }
        else{
            img7.setAttribute("src","img/o.jpg");
            resultado7="O";
        }
        mostrarTurno(turno);
        cambiarTurno();       
    }
    verifcarGanador();
});

div8.addEventListener('click',(event)=>{ 
    if(verificarPosicion(resultado8)){
        if(turno=="X"){
          img8.setAttribute("src","img/x.jpg");
          resultado8="X";
        }
        else{
            img8.setAttribute("src","img/o.jpg");
            resultado8="O";
        }
        mostrarTurno(turno);
        cambiarTurno();        
    }
    verifcarGanador();
});

div9.addEventListener('click',(event)=>{
    if(verificarPosicion(resultado9)){
        if(turno=="X"){
          img9.setAttribute("src","img/x.jpg");
          resultado9="X";
        }
        else{
            img9.setAttribute("src","img/o.jpg");
            resultado9="O";
        }
        mostrarTurno(turno);
        cambiarTurno();        
    }
    verifcarGanador();
});

botonReiniciar.addEventListener('click',(event)=>{
    turno="X";
    ganador="";
    
    resultado1="";
    resultado2="";
    resultado3="";
    resultado4="";
    resultado5="";
    resultado6="";
    resultado7="";
    resultado8="";
    resultado9="";

    img1.setAttribute("src","img/vacio.jpg");
    img2.setAttribute("src","img/vacio.jpg");
    img3.setAttribute("src","img/vacio.jpg");
    img4.setAttribute("src","img/vacio.jpg");
    img5.setAttribute("src","img/vacio.jpg");
    img6.setAttribute("src","img/vacio.jpg");
    img7.setAttribute("src","img/vacio.jpg");
    img8.setAttribute("src","img/vacio.jpg");
    img9.setAttribute("src","img/vacio.jpg");

    imgTurno.setAttribute("src","img/xActivo.jpg");
    imgGanador.setAttribute("src","");

});