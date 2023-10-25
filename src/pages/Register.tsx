import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Back from "../assets/svgs/Back";
import InputFormField from "../components/InputFormField";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const history = useNavigate();

  function handleGoBack() {
    history(-1);
  }

  return (
    <div className="relative">
      <Header />
      <Back
        width={24}
        height={24}
        onClick={handleGoBack}
        className="absolute top-[100px] left-[50px] cursor-pointer"
      />
      <div className="flex flex-col items-center pt-[20vh]">
        <h1 className="text-2xl font-semibold">Crie sua conta.</h1>
        <form className="flex flex-col w-96">
          <InputFormField type="email" label="Email" />
          <InputFormField type="password" label="Senha" />
          <div className="mt-4">
            <Button label="Registrar" className="py-4"/>
          </div>
        </form>
        <div className="mt-2">
          Já tem uma conta? <Link className="hover:text-indigo-600" to="/register">Entre.</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
