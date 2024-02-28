import "./App.css";
import Footer from './components/Footer';
import Main from "./components/Main";
import firebaseApp from "./components/Firebase.jsx";

function App() {
  return (
    <>
      <div>
      <Main>
        <Gallery/>
      </Main>
      </div>
      <Footer />
    </>
    
  );
}

export default App;
