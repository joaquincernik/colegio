var nota = prompt("Ingresa tu nota");
 
 
function myFunction(){
  if(nota<6){
    document.getElementById("demo").innerHTML= "Estas desaprobado";
  } 

  else if(nota>=6 && nota<=10){
    document.getElementById("demo").innerHTML= "Aprobaste rey";
  }
    else{
        document.getElementById("demo").innerHTML= "Cualquiera lo tuyo";
    }
}

    
                 

                
    