class Administrativo{
     
    


    Administrativo(){


    }

    solicitud_obra(min, max){ //el intervalo es de 1 a 3 dias como maximo de tiempo de espera
     min = Math.ceil(min);
     max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    solicitud_proveedor(min, max){ //el intervalo es de 2 a 4 dias como maximo de tiempo de espera
        min = Math.ceil(min);
        max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1)) + min;
       }
    
    evaluacion_del_proveedor(min, max){ //el intervalo es de 3 a 5 dias como maximo de tiempo de espera
        min = Math.ceil(min);
        max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1)) + min;
       }

    adquision_de_materiales(min, max){ //el intervalo es de 4 a 6 dias como maximo de tiempo de espera
        min = Math.ceil(min);
        max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1)) + min;
       }

    anticipos_obras_civiles(min, max){ //el intervalo es de 5 a 15 dias como maximo de tiempo de espera
        min = Math.ceil(min);
        max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1)) + min;
       }

    contratos_de_obra_civiles(min, max){ //el intervalo es de 2 a 3 dias como maximo de tiempo de espera
        min = Math.ceil(min);
        max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1)) + min;
       }
    aceptacion_de_obra(min, max){ //el intervalo es de 3 a 7 dias como maximo de tiempo de espera
        min = Math.ceil(min);
        max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1)) + min;
       }




}//fin class Administrativo

var admin=new Administrativo();
var diasolicitud=admin.solicitud_obra(1,3); // de 1 a 3 dias 
console.log(diasolicitud);
var diasaceptacion=admin.solicitud_obra(3,7); // de 3 a 7 dias 
console.log(diasaceptacion);