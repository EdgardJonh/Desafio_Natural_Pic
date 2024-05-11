import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import { createClient } from 'pexels';

const client = createClient('eE7XAq4Q8GbpI9ieZlfTbq34BNDqtHt0pGZKJTYRLuNmU3t3FwgTbFCL');

// All requests made with the client will be authenticated


// Todas las solicitudes realizadas con el cliente serán autenticadas


// Todas las solicitudes realizadas con el cliente serán autenticadas


const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
    </div>
  );
};
export default App;
