import { Link } from "react-router-dom";
import IconCashCoin from "../assets/svgs/Logo";

export default function Header() {
  //define as rotas do header
  const routes = [
    { path: "/home", name: "Home" },
    { path: "/crypto", name: "Crypto" },
    { path: "/investments", name: "B3" },
    { path: "/favorites", name: "Favoritas" },
  ];

  return (
    <div className="flex justify-between items-center top-0 py-4 px-8 bg-indigo-700 w-screen">
      <div className="text-white">
        <IconCashCoin width={40} height={40} />
      </div>
      <div className="text-white font-medium w-[480px] flex justify-around">
        {routes.map((item, key) => (
          <Link key={key} to={item.path}>
            <div className="py-2 px-8 hover:bg-indigo-900 rounded-lg">
              {item.name}
            </div>
          </Link>
        ))}
      </div>

      <Link to="/login"></Link>
    </div>
  );
}
