import Button from "react-bootstrap/esm/Button.js";
import RegisterForm from "./../../components/RegisterForm.jsx";

// que funcione aca va, que se vea historial de productos, que se vea el formulario para editar datos. y que se vena sus propuios datos


const UserProfile = () => {
//   const whereIam = () => {
//     return true;
//   };

//   useEffect(() => {
//     whereIam();
//   });

// post axios 

  return (
    <>
      <section className="mainAdmin">
       
        <article className="dataView">
          {/* ver sus propios datos, con un get  user su id map pa los datos */}
          <ul>
            <li>a</li>
            <li>s</li>
            <li>d</li>
            <li>4</li>
            <li>g</li>
            <li>f</li>
          </ul>
        </article>

        <article className="dataView">
          
          navigate to = favorites o ir a favoritos (boton navigate)
        
        
        </article>

        <article className="dataView">
          
          <div className="ListOfOrders">
            {/* usar axios y crear una lista con un map   get de buy_order y un map  */}
            <ul>
              <li>a</li>
              <li>s</li>
              <li>d</li>
              <li>4</li>
              <li>g</li>
              <li>f</li>
            </ul>

          </div>
        </article>
      </section>


    </>
  );
};

export default UserProfile;
