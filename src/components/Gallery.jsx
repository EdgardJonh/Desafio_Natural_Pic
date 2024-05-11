// importamos usecontext
// GaleryContext que viene de context galery
import { useContext } from "react";
import { GaleryContext } from "../context/GaleryContext";
import Tarjetas from "./Tarjetas";

const Gallery = () => {
  // usamos useContext para traer los datos
  // usamos un destructuring
  const {galeria}= useContext(GaleryContext) 
  // console.log(galeria)
  return( 
  // <div className="gallery grid-columns-5 p-3">
    
   
    <div className="row">
        {
          // si galeria existe && itere galeria .map
          galeria &&  galeria.map(tarjetas =>(
            <Tarjetas tarjetas={tarjetas} key={tarjetas.id} filled={tarjetas.like}></Tarjetas>
          ))
        }
    </div>
  )
};
export default Gallery;
