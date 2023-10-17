export default function Header() {
  return (
    <div className="flex justify-between items-center top-0 py-4 px-8 bg-indigo-700 w-screen">
      <div className="text-white">Logo</div>
      <div className="text-white font-medium w-[480px] flex justify-around">
        <a>Home</a>
        <a>Crypto</a>
        <a>B3</a>
        <a>Favoritas</a>
      </div>
      <div className="text-white">Entrar/Sair</div>
    </div>
  );
}
