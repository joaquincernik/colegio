var cien= 100;
var veinte= 20;
var treinta= 30;
 var antiguedad= prompt("Cuantos años de antiguedad tiene en la empresa?");
 var sueldo= prompt("Cuanto es su sueldo?");
 var sueldo2= sueldo*1;
 
 
function myFunction(){
    //20%
                  if(antiguedad>=2 && antiguedad<5){
                      var porcentaje_dos_años= sueldo*veinte;
                      var porcentaje_cien= porcentaje_dos_años/cien;
                      var x= porcentaje_cien+sueldo2;
                      console.log("el bono de antiguedad le daria una suma de: "+ x);
                  }

     //30%             
                  else if (antiguedad>=5){
                    var porcentaje_cinco_años= sueldo*treinta;
                    var porcentaje_ciendos= porcentaje_cinco_años/cien;
                    var x= sueldo2+porcentaje_ciendos;
                    console.log("el bono de antiguedad le daria una suma de: "+x);
     //menos de 2 años               
                }
                 if (antiguedad<2){
                    console.log("No hay bono de antiguedad para ti");
                    
                }

                  //sueldo menor a 1000
                  if(sueldo<1000){
                    var porcentaje_diezmil = sueldo*25;
                    var porcentaje_div = porcentaje_diezmil/cien;
                    var y= porcentaje_div+sueldo2;
                    console.log("el bono de sueldo le daria una suma de: "+y); 
                }

                // mayor a 1000 o menor o igual a 3500
                else if(sueldo>=1000 && sueldo<=3500){
                    var porcentaje_mas = sueldo*15;
                    var porcentaje_ciencuatro = porcentaje_mas/cien;
                    var y = porcentaje_ciencuatro + sueldo2;
                    console.log("el bono de sueldo le daria una suma de: "+y);

                }

                //mayor a 3500
                else if(sueldo>3500){
                    var porcentaje_final = sueldo*10;
                    var porcentaje_final_cien = porcentaje_final/cien;
                    var y = porcentaje_final_cien+ sueldo2;
                    console.log("el bono de sueldo le daria una suma de: "+y);

                }

                

             
            
             if(x>y){
                 document.write("El bono que mayor dinero le daria seria el de antiguedad dejandole una suma de :"+x +"para ver cuanto le daria el otro bono vaya a la consola" );
             }     
             
             else if(y>x){
                 document,write("El bono que mayor dinero le daria seria el de sueldo dejandole una suma de :"+x +" para ver cuanto le daria el otro bono vaya a la consola" );
                
             }
             if(antiguedad<2){
                document.write("Debido a que no tienes un bono de antiguedad posible el unico bono que puedes tener sera el de sueldo que da una suma de : "+y);
             }

                 
}
           
             