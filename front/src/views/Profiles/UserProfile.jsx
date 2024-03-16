import Button from "react-bootstrap/esm/Button.js";
import RegisterForm from "./../../components/RegisterForm.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINT } from "../../context/config/constant.js";

// que funcione aca va, que se vea historial de productos, que se vea el formulario para editar datos. y que se vena sus propuios datos

const UserProfile = () => {
  const [history, setHistory] = useState([]);
  const [userData, setUserData] = useState(null);
  console.log(userData);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impob25fc25vd0BuaWdodHdhdGNoLmNvbSIsImlhdCI6MTcxMDYyODc3MCwiZXhwIjoxNzEwNjMyMzcwfQ.2cpMh2waAoh_Yowz4hQErjTxLRfKoVfzybz9JHZN82A";
  const userId = "1700001";

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        // `${ENDPOINT.adminUsers}/${userId}`
        "https://backend-backup-3tm8.onrender.com/api/v1/admin/users/1700001",
        config
      ); // solicita para obtener los datos del usuario
      setUserData(response.data.user); // Almacenar los datos del usuario en el estado
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const fetchHistory = async () => {
    try {
      const response = await axios.get(ENDPOINT.orderUser);
      setHistory(response.data.order_history);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    fetchHistory();
    fetchUserData();
  }, []);

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
        
          {userData && (
            <ul>
              <h6>Datos del usuario:</h6>
              <li>RUT: {userData.rut}</li>
              <li>Nombre: {userData.name}</li>
              <li>Apellido: {userData.last_name}</li>
              <li>Email: {userData.email}</li>
            </ul>
          )}
        </article>

        <article className="dataView">
          {/* navigate to = favorites o ir a favoritos (boton navigate) */}
        </article>

        <article className="dataView">
          <div className="ListOfOrders">
            {/* usar axios y crear una lista con un map   get de buy_order y un map  */}
            <h6>Historial</h6>
            <ul>
              {history.map((order) => (
                <li key={order.id}>
                  {/* Muestrar detalles del historial de productos */}
                  {order.product_code} - ${order.total_price}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};

export default UserProfile;
