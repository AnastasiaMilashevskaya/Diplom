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
        ;
        <RootRouter />
      </Provider>
      <ButtonNav onClick={() => setIsVisible(true)} />
      <Form
        title="Оформление заявки"
        onClose={() => setIsVisible(false)}
        isVisible={isVisible}
      >
        <label> Имя/Name</label>
        <input placeholder="Введите имя" />
        <label> Фамилия/Surname</label>
        <input placeholder="Введите фамилию" />
        <label> Отчество/Middle name</label>
        <input placeholder="Введите отчество (если имеется)" />
        <label> E-mail</label>
        <input placeholder="Введите e-mail" />
        <label> Стоимость картины, $</label>
        <input placeholder="Введите стоимость картины,$" />
        <label> Описание картины</label>
        <textarea> </textarea>
        <input type="file" name="photo" multiple accept="image/*,image/jpeg" />
        <ButtonAdd
          onClick={() =>
            setTimeout(function () {
              setIsVisible(false);
              alert(
                "Ваша заявка отправлена и будет одобрена модератором через 30 минут!"
              );
            }, 700)
          }
        />
      </Form>
      <Modal
        title="Предлагаемая цена:"
        onClose={() => setIsDisplay(false)}
        isDisplay={isDisplay}
      >
        <label> Имя/Name</label>
        <input placeholder="Введите имя" />
        <label> Фамилия/Surname</label>
        <input placeholder="Введите фамилию" />
        <label> Отчество/Middle name</label>
        <input placeholder="Введите отчество (если имеется)" />
        <label> E-mail</label>
        <input placeholder="Введите e-mail" />
        <label> Предлагаемая цена</label>
        <input placeholder="Введите Вашу цену, $" />
        <button
          onClick={() =>
            setTimeout(function () {
              setIsDisplay(false);
              alert(
                "Ваша цена зафиксирована. Об окончании аукциона Вам сообщат на e-mail."
              );
            }, 700)
          }
        >
          Ок
        </button>
      </Modal>
    </div>
  );
}

export default App;
