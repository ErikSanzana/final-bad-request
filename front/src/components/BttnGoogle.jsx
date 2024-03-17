import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { ENDPOINT } from "../context/config/constant.js";
import { useContext } from "react";
import { SoapContext } from "./../context/context.jsx";
import { useNavigate } from 'react-router-dom'

const ButtonGoogle = () => {
  const {dataLog, setDataLog } = useContext(SoapContext);
    const navigate = useNavigate()

  const validarTokenGoogle = async (credendialGOOGLE) => {
     await axios
      .post(
        ENDPOINT.validarGogle, {
        google: { credential: credendialGOOGLE.credential }
      })
      .then(({data}) => {
        setDataLog(data)
        console.log("dato", data);
        window.sessionStorage.setItem("token", data.data);

        window.alert("Usuario identificado con éxito 😀.");

        //setDeveloper({})
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
        console.log(error);
        // window.alert(`${error.message} 🙁.`);
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
