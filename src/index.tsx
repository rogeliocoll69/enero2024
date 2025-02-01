


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store"; // Asegúrate de que esta ruta sea correcta
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/footer";
import RandomNumberComponent from "./store/RandomNumber";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Aquí se pasa el store */}
      <Header />
      <Cards />
      <Footer />
    </Provider>
  </React.StrictMode>
);

