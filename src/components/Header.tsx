import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between items-center top-0 py-4 px-8 bg-indigo-700 w-screen">
      <div className="text-white">Logo</div>
      <div className="text-white font-medium w-[480px] flex justify-around">
        <Link to="/">Home</Link>
        <Link to="/crypto">Crypto</Link>
        <Link to="/investments">B3</Link>
        <Link to="/favorites">Favoritas</Link>
      </div>
      <div className="text-white">
        <Link to="/login">Entrar</Link>
      </div>
    </div>
  );
}
