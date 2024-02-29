import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
// import firebaseApp from "./components/Firebase.jsx";
import RegisterForm from "./components/RegisterForm.jsx";


function App() {
  // aca van las vistas y modificarlas para que se vean las rutas y views

  return (
    <>

      <Footer />

      {/* <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Profile />} />
        <Route path="/pizza/:id" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store" element={<Store />} />
        <Route
          path="/product/:id"
          element={<StorePeroParaElDetalleDeProductosDeLaBaseDeDatos />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  );
}

export default App;
