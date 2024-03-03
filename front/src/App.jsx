import { Routes, Route } from "react-router-dom";
import "./App.css";
//import firebaseApp from "./components/Firebase.jsx";

import Home from "./views/Home/Home.jsx";
import RegisterView from "./views/Register/RegisterView.jsx";
import LogInView from "./views/LogIn/LogInView.jsx";
import Navbarapp from "./components/Navbarapp.jsx";
import Footer from "./components/Footer.jsx";
import StoreView from "./views/Store/Store.jsx";
import Favoritos from "./views/Favoritos/Favoritos.jsx";
import ShoppingCart from "./views/Cart/Cart.jsx";
import NotFound from "./views/Errors/NotFound.jsx";


function App() {

  return (
    <>
      <Navbarapp />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/administrador" element={<Admin />} />*/}
        <Route path="/login" element={<LogInView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/store" element={<StoreView />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/cart" element={<ShoppingCart />} />

        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
