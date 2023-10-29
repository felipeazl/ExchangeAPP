import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Back from "../assets/svgs/Back";
import InputFormField from "../components/InputFormField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Importe a função correta do Firebase

const Register = () => {
  const history = useNavigate();
  function handleGoBack() {
    history(-1);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuário registrado com sucesso
        const user = userCredential.user;
        // Redirecione o usuário para a página de login ou qualquer outra página desejada
        history("/login");
      })
      .catch((error) => {
        // Lidar com erros de registro, por exemplo, exibindo uma mensagem de erro
        console.error(error.message);
      });
  }

  return (
    <div className="relative">
      <div className="flex flex-col items-center pt-[20vh]">
        <h1 className="text-2xl font-semibold">Crie sua conta.</h1>
        <form className="flex flex-col w-96" onSubmit={handleSignUp}>
          <InputFormField
            type="email"
            label="Email"
            onChange={handleEmailChange}
          />
          <InputFormField
            type="password"
            label="Senha"
            onChange={handlePasswordChange}
          />
          <div className="mt-4">
            <Button label="Registrar" className="py-4" type="submit" />
          </div>
        </form>
        <div className="mt-2">
          Já tem uma conta?{" "}
          <Link className="hover:text-indigo-600" to="/login">
            Entre.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
