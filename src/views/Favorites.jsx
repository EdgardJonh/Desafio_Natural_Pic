import { useContext } from "react";
import { GaleryContext } from "../context/GaleryContext";
import Tarjetas from "../components/Tarjetas";
const Favorites = () => {
  const {galeria}= useContext(GaleryContext) 
  
  return( 
  // <div className="gallery grid-columns-5 p-3">
    
   
    <div className="row">
        {
          // si galeria existe && itere galeria .map
          galeria &&  galeria.filter(imagenes=>imagenes.like == true).map(tarjetas =>(
            <Tarjetas tarjetas={tarjetas} key={tarjetas.id} filled={tarjetas.like}></Tarjetas>
          ))
        }
    </div>
  )
};
export default Favorites;
