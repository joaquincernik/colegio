
 var mexico= 750;
 var pv = 800;
 var acapulco = 1200;
 var cancun = 1800;
 var casa=  0;
 var costo_mexico;
 var costo_kilometro= prompt("Cuantas es el costo por kilometro?");
 
function myFunction(){
                  //
   var costo_mexico= costo_kilometro*mexico;
   var costo_pv= costo_kilometro*pv;
   var costo_acapulco= costo_kilometro*acapulco;
   var costo_cancun= costo_kilometro*cancun;
   var costo_casa= costo_kilometro*casa;
   document.write("Costo a Mexico:"+costo_mexico);
   document.write("Costo a p.v:"+costo_pv);
   document.write("Costo a Cancun:"+costo_cancun);
   document.write("Costo a Acapulco:"+costo_acapulco);
   document.write("Costo de quedarse en casa:"+costo_casa);
                
              
}
 
 