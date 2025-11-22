import AllChanges from "./ui/AllChanges";
import Conversor1 from "./ui/ConversorCompra";
import { Navbar } from "./ui/Navbar";
import Conversor2 from "./ui/ConversorVenta";

function App() {
  return (
    <>
      <Navbar />
      <AllChanges />
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center text-3xl md:text-5xl p-2 font-bold">
          Conversores
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4">
          <Conversor1 />
          <Conversor2 />
        </div>
      </div>
    </>
  );
}

export default App;
