import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/Desafio_Natural_Pic"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
