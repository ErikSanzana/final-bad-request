import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { ENDPOINT } from "../context/config/constant.js";

const ButtonGoogle = () => {
  const validarTokenGoogle = (credendialGOOGLE) => {
    axios
      .post(ENDPOINT.validarGogle, {
        google: { credential: credendialGOOGLE.credential }
      })
      .then(({ data }) => {
        console.log("dato", data);
        window.sessionStorage.setItem("token", data.token);
        window.alert("Usuario identificado con éxito 😀.");
        //setDeveloper({})
        //navigate('/perfil')
      })
      .catch(({ response: { response } }) => {
        console.error(response);
        window.alert(`${data.message} 🙁.`);
      });
  };

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
        validarTokenGoogle(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default ButtonGoogle;
