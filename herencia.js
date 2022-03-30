
////////////////////////////////////////////////// Clase y herencia ///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////// CLASE PADRE /////////////////////////////////////////////////////////////////////////

// El nombre de las clases siempre en mayuscula

class PassiveHouse {                                         

    precio;
    color;
    #material;                                                     //////////Privada que solo se puede acceder desde la clase //////////////
    #consumoEnergetico; 
   

    constructor (precio, color, material, consumoEnergetico){


        this.precio=precio;
        this.color=color;
        this.#material=material;
        this.#consumoEnergetico=consumoEnergetico;
       
    }
    

    // ///////////////////SETTERS Y GETTERS se utilizan para las propiedades  privadas //////////////////////////////////////////////////////////   
    
    
    
    set setMaterial(material){
        this.#material=material
    }    
  
     
    get getMaterial (){
       return `El material es ${this.#material}`;
   }


    set setConsumoEnergetico(consumoEnergetico){
        this.#consumoEnergetico=consumoEnergetico
    
    }
    
    get getConsumoEnergetico(){
       return `el consumo energetico es ${this.#consumoEnergetico}`;
   }

   

 
 }

 class House57 extends PassiveHouse{

    #modelo;
    #garantia;
    constructor (precio, color, material, consumoEnergetico, modelo, garantia){

        super(precio, color, material, consumoEnergetico)
        this.#modelo=modelo;
        this.#garantia=garantia

    }    




    set setModelo(modelo){
        this.#modelo  
    }

   
    get getModelo (){
        return `modelo ${this.#modelo}`;
    }


    set setGarantia(garantia){
        this.#garantia=garantia    
    }

   
    get getGarantia (){
        return `La garantia es ${this.#garantia}`;
    }



 }



 class House34 extends PassiveHouse{

    #licencia;
    #eficienciaEnergetica;
    constructor (precio, color, material, consumoEnergetico, licencia, eficienciaEnergetica){

        super(precio, color, material, consumoEnergetico)
        this.#licencia=licencia;
        this.#eficienciaEnergetica=eficienciaEnergetica

    }    




    set setLicencia (licencia){
        this.#licencia
    }

   
    get getLicencia (){
        return `Número de licencia ${this.#licencia}`;
    }


    set setEficienciaEnergetica(eficienciaEnergetica){
        this.#eficienciaEnergetica=eficienciaEnergetica 
    }

   
    get getEficienciaEnergetica(){
        return `tipo ${this.#eficienciaEnergetica}`;
    }



 }




 const e57= new House57 (56000, 'Blanco', 'Concreto', 1260, 057, 'Cinco Años');

 const e34 =new House34 (56000, 'Blanco', 'Concreto', 1260, 002561, 'E')
 
  

console.log(e34);



