import  {  leerTeclado  }  from  './entradaTeclado'

export  const  Menu  =  async  ( )  =>  {
    let  n : number
    console . log ( '\n' )
    console . log ( '1.- Introducir vehículo' )
    console . log ( '2.- Ver modelos' )
    console . log ( '3.- Seleccionar vehiculo')
    console . log ( '0.- Salir' )
    n  =  parseInt (  await  leerTeclado ( 'Opción: ' )  )
    return  n
}

export  const  MenuCoche  =  async  ( )  =>  {
    let  n : number
    console . log ( '\n' )
    console . log ( '1.- Ver el vehiculo seleccionado' )
    console . log ( '2.- Encender/apagar' )
    console . log ( '3.- Cambiar la velocidad')
    console . log ( '4.- Calcular consumo' )
    console . log ( '5.- Calcular la distancia recorrida')
    console . log ( '6.- Calular el combustible que queda en el depósito')
    console . log ( '0.- Salir' )
    n  =  parseInt (  await  leerTeclado ( 'Opción: ' )  )
    return  n
}