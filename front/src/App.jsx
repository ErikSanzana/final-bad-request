import { Routes, Route } from "react-router-dom";
import "./App.css";
//import firebaseApp from "./components/Firebase.jsx";
//import Main from "./components/Main.jsx";
//import RegisterForm from "./components/RegisterForm.jsx";
//import Card from "./components/Card.jsx";

import Home from "./views/Home/home.jsx";
import RegisterView from "./views/Register/RegisterView.jsx";
import LogInView from "./views/LogIn/LogInView.jsx";
import Navbarapp from "./components/Navbarapp.jsx";
import Footer from "./components/Footer.jsx";

//import Favoritos from "./views/Favoritos/Favoritos.jsx";
//import Admin from "./views/Admin/Admin.jsx";


function App() {
  
  // aca van las vistas y modificarlas para que se vean las rutas y views

  return (
    <>

<Navbarapp />
       {/* <NavigationBar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/favoritos" element={<Favoritos />} />*/}
        {/*<Route path="/administrador" element={<Admin />} />*/}
        
        {/* <Route path="/menu" element={<Profile />} /> */}
        <Route path="/enter" element={<LogInView />} />
        <Route path="/register" element={<RegisterView />} />
        {/* <Route path="/store" element={<Store />} /> */}
        {/* <Route path="/product/:id" element={<StorePeroParaElDetalleDeProductosDeLaBaseDeDatos />}/> */}
        {/* <Route path="/favorites" element={<Favorites />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes> 
      <Footer />
    </>
  );
}

export default App;
