 
 var tipo= prompt("Si quiere la hamburguesa de $20 escriba 1, si quiere la de $25 ingrese 2 y si quiere la de $28 ingrese 3");
 var cantidad= prompt("Cuantas hamburguesas va a querer");
 
 
 
function myFunction(){
    
                  if(tipo == 1){
                   
                    var burguer = 20*cantidad;
                    var p = burguer*5;
                    var a = p/100;
                    var b = burguer + a;
                      document.write("Pagando con tarjeta de credito le quedaria todo a una suma de " + b);
                      document.write("<br></br>Pagando en efectivo le quedaria una suma de " + burguer)
                  }

                 if(tipo == 2){
                     
                    var burguer = 25*cantidad;
                    var p = burguer*5;
                    var a = p/100;
                    var b = burguer + a;
                      document.write("Pagando con tarjeta de credito le quedaria todo a una suma de " + b);
                      document.write("<br></br>Pagando en efectivo le quedaria una suma de " + burguer)
                   }

                   if(tipo == 3){
                     
                    var burguer = 28*cantidad;
                    var p = burguer*5;
                    var a = p/100;
                    var b = burguer + a;
                      document.write("Pagando con tarjeta de credito le quedaria todo a una suma de " + b);
                      document.write("<br></br>Pagando en efectivo le quedaria una suma de " + burguer)
                   }

                   else{
                    document.write("Operacion invalida");
                   }
                }
                

           
             