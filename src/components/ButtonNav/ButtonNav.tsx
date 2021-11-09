import { useState } from "react";
import { ButtonAdd } from "../ButtonAdd";
import { Form } from "../Form";
import styles from "./ButtonNav.module.css";

export const ButtonNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button className={styles.button} onClick={() => setIsVisible(true)}>
        {" "}
        Оформить заявку
      </button>

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
    </div>
  );
};
