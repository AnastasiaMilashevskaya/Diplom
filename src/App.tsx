import React, { useState } from "react";

import { Provider } from "react-redux";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { AboutProject } from "./components/AboutProject";
import { Shop } from "./components/Shop";
import "./App.css";
import { ButtonNav } from "./components/ButtonNav";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Modal } from "./components/Modal";
import { ButtonAdd } from "./components/ButtonAdd";
import { ButtonShow } from "./components/ButtonShow";
import { ShopCard } from "./components/ShopCard";

import { store } from "./redux/store";
import { RootRouter } from "./routing/RootRouter";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <div className="App">
      <Provider store={store}>
        <RootRouter />
      </Provider>
    </div>
  );
}

export default App;
