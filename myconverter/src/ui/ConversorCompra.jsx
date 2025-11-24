import React, { useState, useEffect } from "react";

const ConversorCompra = () => {
  const [ars, setArs] = useState("");
  const [usd, setUsd] = useState("");
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setSelectedIndex(0);
      });
  }, []);

  const getRate = () => data?.[selectedIndex]?.compra || 0;

  const handleArsChange = (e) => {
    const val = e.target.value;
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
    setUsd((num / rate).toFixed(6));
  };

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
    setArs((num * rate).toFixed(2));
  };

  const handleRateChange = (e) => {
    const idx = parseInt(e.target.value, 10) || 0;
    setSelectedIndex(idx);
    const rate = data?.[idx]?.compra || 0;

    if (ars !== "" && usd === "") {
      const num = parseFloat(ars);
      setUsd((num / rate).toFixed(6));
    } else if (usd !== "") {
      const num = parseFloat(usd);
      setArs((num * rate).toFixed(2));
    }
  };

  return (
    <div className="rounded justify-items-center bg-amber-50 text-black p-6 w-full md:w-1/2 h-full flex flex-col">
      <h2 className="text-xl md:text-2xl font-bold">Compra</h2>

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
            className="col-span-9 md:col-span-8 bg-amber-300 p-2 rounded-lg"
            type="number"
            placeholder="Ingrese USD"
            value={usd}
            onChange={handleUsdChange}
          />

          <select
            value={selectedIndex}
            onChange={handleRateChange}
            className="col-span-3 md:col-span-4 p-1 rounded-lg whitespace-nowrap w-full md:w-auto"
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

export default ConversorCompra;
