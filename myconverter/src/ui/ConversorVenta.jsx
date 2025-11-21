import React, { useState } from "react";
import { useEffect } from "react";

const ConversorCompra = () => {
  const [coin1, setCoin1] = useState(0);
  const [coin2, setCoin2] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleChangeCoin1 = (e) => {
    const value = e.target.value;
    setCoin1(value);
    setCoin2(value * 2);
  };

  const handleChangeCoin2 = (e) => {
    const value = e.target.value;
    setCoin2(value);
    setCoin1(value * 0.5);
  };

  return (
    <div className="rounded justify-items-center bg-amber-50 text-black">
      <h2 className="text-2xl font-bold">Venta</h2>

      <div className="p-4">
        <div className="flex items-center">
          <input
            className="bg-amber-300 p-2 m-2 rounded-lg"
            type="number"
            placeholder="Ingrese la cantidad"
            value={coin1}
            onChange={handleChangeCoin1}
          />
          <p>ARS</p>
        </div>

        <div>
          <input
            className="bg-amber-300 p-2 m-2 rounded-lg"
            type="number"
            placeholder="Ingrese la cantidad"
            value={coin2}
            onChange={handleChangeCoin2}
          />
          <select name="divise2" id="divise2">
            {data?.map((dolares) => (
              <option key={dolares.nombre} value={dolares.nombre}>
                USD {dolares.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ConversorCompra;
