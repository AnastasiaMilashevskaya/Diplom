import styles from "./Footer.module.css";
export function Footer() {
  return (
    <div className={styles.footer} id="contact">
      <div className={styles.footer__body}>
        <div className={styles.company}>
          <h2 className={styles.footer__subtitle}>ArtWikipedia</h2>
          <p className={styles.company__text}>
            Онлайн-платформа ArtWikipedia помогает в приобретении и продаже
            предметов искусства.Здесь Вы можете просто и быстро купить картину в
            Минске или с доставкой в любую страну мира. ArtWikipedia —
            онлайн-прикосновение к прекрасному, которое может стать частью
            Вашего дома.
          </p>
        </div>

        <div className={styles.footer__contact}>
          <div className={styles.contact__adress}>
            <h2 className={styles.footer__subtitle}>Наши контакты:</h2>
            <address className={styles.footer__contact__text}>
              Республика Беларусь, г.Минск, ул. Маневича,8, офис. 1404
            </address>
            <a className={styles.phone} href="tel:#">
              +375 44 544-98-43
            </a>
            <a
              className={styles.mail}
              href="mailto:anastasia.milashev@gmail.com"
            >
              anastasia.milashev@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer__copyright} id="footer">
        <p className={styles.copyright__text}>
          &#169; 2021 ArtWikipedia. Designed by Anastasia Milashevskaya
        </p>
      </div>
    </div>
  );
}
