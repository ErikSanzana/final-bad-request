// import { useContext } from "react";
import { useEffect } from "react";
import RegisterForm from "../../components/RegisterForm";

export const RegisterView = () => {
  const whereIam = () => {
    return true;
  };

  useEffect(() => {
    whereIam();
  });

  // desde aca axios data post

  return (
    <>
      <div className="d-inline-flex justify-content-center border border-success p-1 mt-4 rounded bg-primary-subtle ">
        <RegisterForm registerView={whereIam} />
      </div>
    </>
  );
};

export default RegisterView;
