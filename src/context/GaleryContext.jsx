import { createContext, useState , useEffect} from "react";
// creamos un contexto lo exportamos para que sea usado en nuetra app 
// esta variable es lo que contiene nuetros datos que seran exportados atravez de context
export const GaleryContext = createContext()
// creamos un provedor para nuetra app que es una arrow function que provee la informacion
// el recibe ub props es obligatorio se llama children, es el que se va encargar de identificar en que componente 
// es que nosotros estamos llamando a esta informacion 
//  por enden cuando yo llame mi informacion en un componente en espesifico en alguna vista
// el va decir por detras ,ok! el esta llamando la informacion en esta vista y todo sera enviado y trabajado
// en esa vista. 
// RECORDEMOS QUE TODA FUNCION DEBE RETORNAR ALGO.

// el segundo esport estara llamdo al primer export de arriba cada ves que lo necesite
const GaleryProvider = ({children})=>{
    // defino mi variable que contiene un set para actualizarla y  un  useState que es un estado inicia en 0 se asigan a la variable 
    const [galeria , setGaleria]= useState([])
    const getData= async ()=>{
        const data = await fetch('/photos.json')
        const response = await data.json()
        let galeriadeFotos = Object.values(response.photos)
        const allData = galeriadeFotos.flat().map((galeria =>({...galeria, like:false})))
        setGaleria(allData)
    }

    useEffect(()=>{
        getData()
    },[])
    // EJECUTAMOS EL CONTEXTO ORIGINAL Y LE PROVEEMOS LA SIGUENTE INFORMACION
    // creamos el componente
    // luego enviamos la informacion en un value que se pasara atravesz de un children
    // se lo voy a enviar al hijo que estoy recibiendo
    return(
        <GaleryContext.Provider value={{galeria,setGaleria}}>
            {children}
        </GaleryContext.Provider>
    ) 
   
}
export default GaleryProvider