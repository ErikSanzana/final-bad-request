// import { useContext } from "react";
import { useEffect } from "react";
import RegisterForm from "../../components/RegisterForm.jsx";

export const RegisterView = () => {

 

  return (
    <>
      <div className="d-inline-flex justify-content-center border border-success p-1 mt-4 rounded bg-primary-subtle ">
        <RegisterForm registerView={true} />
      </div>
    </>
  );
};

export default RegisterView;
