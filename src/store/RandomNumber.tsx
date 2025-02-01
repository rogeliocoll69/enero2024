import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchRandomNumber } from './randomNumberSlice';
import { useFetchRandomNumber } from "./newst"

const RandomNumberComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { value, loading, error } = useAppSelector((state) => state.randomNumber);

  const handleClick = () => {
    dispatch(useFetchRandomNumber());
  };

  return (
    <div>
      <button onClick={handleClick}>Obtener Número Aleatorio</button>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {value !== null && <p>Número Aleatorio: {value}</p>}
    </div>
  );
};

export default RandomNumberComponent;
//codigo anterior
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch } from "./store";
// import { fetchRandomNumber } from './randomNumberSlice'; // Importa la acción asíncrona
// import { RootState } from './store'; // Importa la interfaz RootState

// export default function RandomNumber() {
//   const useAppDispatch: () => AppDispatch = useDispatch; // Obtiene la función dispatch de Redux

//   // Usa useSelector para acceder al estado de randomNumber desde el store de Redux.
//   // Desestructura las propiedades value, loading y error.
//   const { value, loading, error } = useSelector((state: RootState) => state.randomNumber);


//   // Función que se ejecuta al hacer clic en el botón.
//   const handleClick = () => {
//     const dispatch = useAppDispatch(); // Usa el dispatch tipado
//     dispatch(fetchRandomNumber()); // No debería dar error ahora
//   };

//   return (
//     <div className="text-center p-4">
//       <h1 className="text-2xl font-bold">Número Aleatorio</h1>

//       {/* Muestra un mensaje de "Cargando..." si loading es true */}
//       {loading && <p className="text-blue-500">Cargando...</p>}

//       {/* Muestra el mensaje de error si existe un error */}
//       {error && <p className="text-red-500">{error}</p>}

//       {/* Muestra el valor si value no es null */}
//       {value !== null && <p className="text-green-500 text-xl">{value}</p>}

//       {/* Botón que al hacer clic despacha la acción para generar un nuevo número aleatorio */}
//       <button
//         onClick={handleClick} // Llama a la función handleClick al hacer clic
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Generar Número
//       </button>
//     </div>
//   );
// };

