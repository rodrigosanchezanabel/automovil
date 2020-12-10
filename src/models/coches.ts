export class Automovil {
    private _modelo : string 
    private _capacidad : number  //Cantidad de litros que caben en el deposito
    private _velocidad : number  // Velocidad en Km/h
    private _tiempo : number    // Tiempo de circulación en horas
    private _consumo : number   // Cantidad de combustible consumido a los 100 km
    private _marcha : boolean   // true: en marcha; false:parado

    constructor (modelo : string, capacidad : number, velocidad : number, tiempo : number, consumo : number){
        this._modelo = modelo
        this._capacidad = capacidad
        this._velocidad = velocidad
        this._tiempo = tiempo
        this._consumo = consumo
        this._marcha = true
}

get modelo(){
    return this._modelo
}

get capacidad(){
    return this._capacidad
}

get velocidad(){
    return this._velocidad
}

get tiempo(){
    return this._tiempo
}

get consumo(){
    return this._consumo
}

get marcha(){
    return this._marcha
}

set vdad(numero:number){  //comprobación para el cambio de velocidad
    if(this.marcha==false){
        throw 'Error, para cambiar la velocidad en automovil no puede estar parado'
    } else {
        this.vdad=numero
    }
}

/*set velocidad(_velocidad:number){
    this._velocidad=_velocidad
}*/

espacio(){
    let espacio:number
    espacio=this._velocidad*this._tiempo
    if (espacio == 0){
        throw "Error: El coche no se está moviendo, intentelo de nuevo"
    }
    return espacio
} 

capacidadC(){            //Indica los litros de combustible consumidos a la vdad indicada
    let capacidadC:number
    capacidadC= (this._consumo*this._velocidad)/100
    if (capacidadC==0){
        throw "Error: No hay consumo de combustible, por tanto el coche no se ha movido"
    }
    return capacidadC
}

rDep(){        // Indica la cantidad de litros de combustible que queda en el depósito
    let rDep:number
    rDep=this._capacidad-((this._consumo*this._velocidad)/100)
    return rDep
}

movimiento(){   //Para comprobar si el coche está o no parado.
    if(this._marcha==false){
        this._marcha=true
    }else{
        if(this._velocidad !=0){
            throw 'Error: Para apagar el automovil, primero tiene que estar parado'
        }else{
            this._marcha=false
        }
    }
}

verLista(){
    return `El automovil ${this._modelo} tiene un consumo de ${this._consumo} litros cada 100 km, un capacidad del deposito de ${this._capacidad} litros y circula a una velocidad de ${this._velocidad} km/h, durante ${this._tiempo} horas`

}


}