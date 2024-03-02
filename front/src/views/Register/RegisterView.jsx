// import { useContext } from "react";
import RegisterForm from "../../components/RegisterForm";

export const RegisterView = () => {
  return (
    <>
      <div className="d-inline-flex justify-content-center border border-5 p-2 mt-4 rounded bg-primary-subtle">
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterView;
