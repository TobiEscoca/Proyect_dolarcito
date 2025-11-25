import AllChanges from "./ui/AllChanges";
import Conversor1 from "./ui/ConversorCompra";
import { Navbar } from "./ui/Navbar";
import Conversor2 from "./ui/ConversorVenta";
import { Footer } from "./ui/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AllChanges />
      <div className="w-full px-4">
        <h1 className="text-center text-3xl md:text-5xl font-bold">
          Conversores
        </h1>
        <div className="flex flex-col p-4 md:flex-row md:items-stretch gap-4 w-full">
          <Conversor1 />
          <Conversor2 />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
