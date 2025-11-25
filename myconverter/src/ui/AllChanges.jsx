import React from "react";
import { useEffect, useState } from "react";

const AllChanges = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-center text-3xl md:text-5xl p-2 font-bold">
        Cambios hoy
      </h1>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 justify-items-center m-2">
        {data?.map((dolares) => (
          <div
            key={dolares.nombre}
            className="bg-white rounded-lg w-full shadow-md p-4 border transition-all duration-300 hover:scale-103"
          >
            <h3 className="text-black font-semibold text-lg mb-2">
              {dolares.nombre}
            </h3>
            <p className="text-sm text-gray-600">
              Compra: <span className="font-medium">{dolares.compra}</span>
            </p>
            <p className="text-sm text-gray-600">
              Venta: <span className="font-medium">{dolares.venta}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllChanges;
