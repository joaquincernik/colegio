
 
 var horas_trabajo= prompt("Cuantas horas trabaja?");
 var costo_hora= prompt("Cuanto le paga por hora?");
 
function myFunction(){
                  //
   var costo_dia= horas_trabajo*costo_hora;
   var costo_semana= costo_dia*7;
  
   document.write("El sueldo semanal seria de"+costo_semana);
                
              
}
 
 