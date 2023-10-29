/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import InputFormField from "../components/InputFormField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import { signInWithEmailAndPassword, User } from "firebase/auth"; // Importe a função correta do Firebase

const Login = () => {
  const [user, setUser] = useState<User>({} as User);

  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        history("/home");
        console.log(user);
      })
      .then(() => localStorage.setItem("isLogged", "1"))
      .catch((error) => {
        console.error(error.message);
      });
  }

  return (
    <div className="relative">
      <div className="flex flex-col items-center pt-[20vh]">
        <h1 className="text-2xl font-semibold">Acesse sua conta.</h1>
        <form className="flex flex-col w-96" onSubmit={handleSignIn}>
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
            <Button label="Entrar" className="py-4" type="submit" />
          </div>
        </form>
        <div className="mt-2">
          Não tem uma conta?{" "}
          <Link className="hover:text-indigo-600" to="/register">
            Registre-se
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
