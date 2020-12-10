import { Menu, MenuCoche } from './vistas/menu'
import { leerTeclado } from './vistas/entradaTeclado'
import { Automovil } from './models/coches'

const main = async () => {
    // Primero creamos el array donde vamos a almacenar los coches introducidos manualmente
    let n : number
    let automoviles : Array<Automovil> = new Array()
    do {
        n = await Menu ()
        switch(n){
            case 1:
                console.log("Va usted a crear un nuevo vehículo")

                let modelo: string, capacidad: number, velocidad: number, tiempo: number, consumo: number 

                /* Hacemos el primer control de errores con try/catch que compruebe
                que el coche introducido no está repetido */

                try{
                    modelo =  await leerTeclado('Introduce el modelo del automovil')
                    capacidad= parseInt( await leerTeclado('Intoduzca la capacidad del deposito en litros'))
                    velocidad= parseInt( await leerTeclado('Introduzca la velocidad a la que circula el automovil en km/h'))
                    tiempo= parseInt( await leerTeclado('Introduzca el tiempo que está circulando el automovil en horas'))
                    consumo = parseInt( await leerTeclado('Introduzca el consumo del automovil en litros a los 100km'))
                
                    let automovil = new Automovil(modelo, capacidad, velocidad, tiempo, consumo,)
                    let existe = false
                    for(let a of automoviles){
                        if (automovil.modelo==a.modelo){
                            existe=true
                        }
                    }
                    
                    if (existe){
                        console.log('El vehiculo introducido ya existe, introduzca otro modelo distinto, por favor')
                    } else {
                        automoviles.push(automovil)
                    }
                
                } catch (error){
                    console.log(error)
                }
                                    
                break
                
            case 2:
                
                 if (automoviles.length==0) {
                     console.log('No hay ningún automóvil creado')
                 } else {
                     console.log('Vamos a ver los automóviles creados')
                     for (let a of automoviles){
                         console.log(`${a.verLista()}`)
                     }
                 }
                 
                 break

            case 3:
                    
                if (automoviles.length==0) {
                    console.log('No hay ningún automóvil creado')
                } else {
                    let model: string
                    console.log('Indique el modelo del vehiculo a modificar, por favor')
                    for (let a of automoviles){
                        console.log(`${a.verLista()}`)
                    }
                model= await leerTeclado('Introduce el modelo del automovil')
                let index: number= -1
                for (let a of automoviles){
                    if (a.modelo==model){
                        index=automoviles.indexOf(a)
                    }
                }
                /* Cuando modifiquemos un vehiculo pasamos al menuCoche */
                if (index != -1){
                    let n2: number

                    let oAutomovil=automoviles[index]
                    do {
                        n2 = await MenuCoche()
                        switch (n2){
                          case 1: 
                            console.log('Estamos viendo el automovil seleccionado')
                            console.log(oAutomovil.verLista())

                            break

                          case 2:
                              if(oAutomovil.marcha){
                                  try{
                                      oAutomovil.movimiento()
                                      console.log('Automovil apagado')
                                  }catch (error){
                                      console.log(error)
                                  }
                              }else{
                                  console.log('Automovil encendido')
                                  oAutomovil.movimiento()
                              }
                              break

                          case 3:   // cambio de velocidad para poder encender y apagar el vehiculo

                              let nVdad:number

                            try {
                                nVdad=parseInt(await leerTeclado('Introduzca una nueva velocidad'))
                                oAutomovil.vdad = nVdad
                            }catch (error) {
                                console.log(error)
                            }

                            /*velocidad=parseInt(await leerTeclado('Introduzca la nueva velocidad del automovil'))
                            oAutomovil.velocidad=velocidad
                             break */      

                                                  
                          case 4:  //Consumo en litros del vehiculo a la vdad indicada
                              
                              try{
                                  let capacidadC = oAutomovil.capacidadC()
                                  console.log(`El consumo del automovil ${oAutomovil.modelo} es ${oAutomovil.capacidadC()} litros`)
                              } catch (error) {
                                  console.log(error)
                              }
                              break

                          case 5:  //Distancia recorrida

                            try{
                                  let espacio = oAutomovil.espacio()
                                  console.log(`La distancia recorrida por el vehíclo ${oAutomovil.modelo} es de ${oAutomovil.espacio()} km`)
                            } catch (error){
                                console.log(error)
                            }
                            break
                        
                          case 6:  //Combustible restante en capacidad

                            try{
                                let rDep = oAutomovil.rDep()
                                console.log(`El combustible restante en el deposito es ${oAutomovil.rDep()} litros`)
                            } catch (error){
                                console.log(error)
                            }
                            break
                        
                            }
                    } while (n2 !=0)
                 } else {
                     console.log(`Este automovil no existe`)
                 }
                }
                 break        
            case 0:
                console.log (`\nHemos terminado`)

                 break
        }
    } while (n !=0)
}

main()