
 var costodescuento;
 var porcentaje_veinte= 20;
 var porcentaje_cien= 100;
 var porcentaje1;
 var porcentaje2;
 var descuento;
 var calcular_IVA;
 var calcular_IVA2;
 var total_iva=15
 var precio_articulo= prompt("Cual es el precio del articulo?");
 
 
function myFunction(){
                  //porcentaje
   var porcentaje1= precio_articulo*porcentaje_veinte;
   var porcentaje2= porcentaje1/porcentaje_cien;
   var descuento= precio_articulo-porcentaje2;
   document.write("Contando el descuento en su articulo el precio seria de"+descuento);
                //IVA
                var calcular_IVA= descuento*total_iva;
                var calcular_IVA2= calcular_IVA/porcentaje_cien;
                var IVA_final= descuento+calcular_IVA2;
                document.write("Contando el IVA el precio final seria de"+IVA_final);
              
              
}
 
 