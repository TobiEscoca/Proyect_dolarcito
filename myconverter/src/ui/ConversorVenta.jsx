import React, { useState, useEffect } from "react";

const ConversorVenta = () => {
  const [ars, setArs] = useState(""); // vacío por defecto
  const [usd, setUsd] = useState(""); // vacío por defecto
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Cargar API una sola vez
  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setSelectedIndex(0);
      });
  }, []);

  const getRate = () => {
    return data?.[selectedIndex]?.venta || 0;
  };

  // Convertir ARS → USD
  const handleArsChange = (e) => {
    const val = e.target.value;

    // Permite campo vacío
    if (val === "") {
      setArs("");
      setUsd("");
      return;
    }

    const num = parseFloat(val);
    if (isNaN(num)) return;

    setArs(val);

    const rate = getRate();
    if (!rate) return;

    const converted = num / rate;
    setUsd(converted.toFixed(6));
  };

  // Convertir USD → ARS
  const handleUsdChange = (e) => {
    const val = e.target.value;

    if (val === "") {
      setUsd("");
      setArs("");
      return;
    }

    const num = parseFloat(val);
    if (isNaN(num)) return;

    setUsd(val);

    const rate = getRate();
    if (!rate) return;

    const converted = num * rate;
    setArs(converted.toFixed(2));
  };

  // Cuando cambia el tipo de dólar
  const handleRateChange = (e) => {
    const idx = parseInt(e.target.value, 10);
    setSelectedIndex(idx);

    const rate = data?.[idx]?.venta || 0;

    // Si el usuario escribió ARS
    if (ars !== "" && usd === "") {
      const num = parseFloat(ars);
      const converted = num / rate;
      setUsd(converted.toFixed(6));
    }

    // Si el usuario escribió USD
    else if (usd !== "") {
      const num = parseFloat(usd);
      const converted = num * rate;
      setArs(converted.toFixed(2));
    }
  };

  return (
    <div className="rounded justify-items-center bg-amber-50 text-black p-6 w-full md:w-1/2 h-full flex flex-col">
      <h2 className="text-xl md:text-2xl font-bold">Venta</h2>

      <div className="p-4">
        <div className="grid grid-cols-12 gap-2 items-center">
          {/* ARS row */}
          <input
            className="col-span-9 md:col-span-8 bg-amber-300 p-2 rounded-lg"
            type="number"
            placeholder="Ingrese ARS"
            value={ars}
            onChange={handleArsChange}
          />
          <p className="col-span-3 md:col-span-2 text-center">ARS</p>

          {/* USD row */}
          <input
            className="col-span-9 md:col-span-8 bg-amber-300 p-2 rounded-lg w-full"
            type="number"
            placeholder="Ingrese USD"
            value={usd}
            onChange={handleUsdChange}
          />

          {/* Selector cotización */}
          <select
            value={selectedIndex}
            onChange={handleRateChange}
            className="col-span-3 md:col-span-4 pr-6 rounded-lg whitespace-nowrap w-full md:w-auto"
          >
            {data?.map((d, i) => (
              <option key={d.nombre} value={i}>
                USD {d.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ConversorVenta;
