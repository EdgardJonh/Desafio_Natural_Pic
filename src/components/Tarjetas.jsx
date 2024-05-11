import IconHeart from "./IconHeart";

const Tarjetas = ({tarjetas, filled}) => {
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "18rem" }}>
        
        <img src={tarjetas.src.original} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <IconHeart filled={filled} id={tarjetas.id}></IconHeart>
      </div>
    </div>
  );
};
export default Tarjetas;
