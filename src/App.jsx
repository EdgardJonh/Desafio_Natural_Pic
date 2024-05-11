import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import NotFound from "./views/NotFound"

// const PHOTO_URL = "/photos.json";

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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};
export default App;
