import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Back from "../assets/svgs/Back";
import InputFormField from "../components/InputFormField";
import Button from "../components/Button";

const Login = () => {
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
      <div className="flex flex-col justify-center items-center pt-[33vh]">
        <h1>Acesse sua conta.</h1>
        <form className="flex flex-col w-96">
          <InputFormField label="Email" />
          <InputFormField label="Senha" />
          <Button label="Entrar" marginTop={4} />
        </form>
      </div>
    </div>
  );
};

export default Login;
