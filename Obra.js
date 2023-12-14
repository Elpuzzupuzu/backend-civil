
class obra{

obra(){

}

localizacion_replanteo(trabajadores) {
 var dias ;
 dias =trabajadores/2;
 return dias; 

    
}

cerramiento_senalizacion(trabajadores){
 var tiempo=120-(15*trabajadores);
 return tiempo;
}

demolicion_remocion_trabajadores(trabajadores){
var dias=12-(trabajadores*.5);
return dias;

}
demolicion_remocion_maquinaria(maquinas){ //se puede usar para el caso de excavacion retiro 
var dias=12-(maquinas*5); // este solo es un caso especial donde no se comtempla mas de 2 maquinas solo de 1 a 2
return dias;
}

excavacion_retiro_trabajadores(trabajadores){ // este esta en incremento de 3 en 3 para dar valor cerrado en dias
var dias=12-(trabajadores*(2/3));
return dias;


}
conformacion_calzada(trabajadores, maquinas){ // este recibe parametros int y sea el caso uno dara 7 dias y 1 dia y medio para el otro caso
if(trabajadores==12 && maquinas==1){
var dias=(25/18)*trabajadores-((29/3)*(maquinas));
dias=Math.round(dias)

}
else{
var dias=(25/18)*trabajadores-((29/3)*(maquinas));

}
return dias;

}

extendida_compactacion(trabajadores, maquinas){ //solo son 2 casos 12 trabajadores y 1 compactadora
 var dias=(1/4)*trabajadores-maquinas;          // el caso 2: 12 trabajadores y 2 compactadoras
 return dias;
}

construccion_placa_de_concreto(trabajadores){ // pendiente 
var dias=trabajadores*(1/6);
return dias;

}
instalacion_construccion(trabajadores, maquinas){
var dias=trabajadores*(1/4)+maquinas*(-2);
return dias;

}














}
var work =new obra();
var dia =work.localizacion_replanteo(4);
console.log(dia);

var minutos=work.cerramiento_senalizacion(7);
console.log(minutos);
var diademolicion=work.demolicion_remocion_trabajadores(22);
console.log(diademolicion);
var diademolicionmaquina=work.demolicion_remocion_maquinaria(1);
console.log(diademolicionmaquina);
var diaexcavacion=work.excavacion_retiro_trabajadores(15);
console.log(diaexcavacion);
var diacalzada=work.conformacion_calzada(12,1);
console.log(diacalzada);
var extendidacompactacion=work.extendida_compactacion(12,2);
console.log(extendidacompactacion);
var construccionplaca=work.construccion_placa_de_concreto(16);
console.log(construccionplaca);
var instalacion=work.instalacion_construccion(12,1);
console.log(instalacion);
