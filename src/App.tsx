import Card from "./components/Card";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <h1 className="text-3xl font-bold">Hello World!</h1>
      <Card acronym="BTC" name="Bitcoin" price="100000" imgUrl="asd" />
    </div>
  );
}
