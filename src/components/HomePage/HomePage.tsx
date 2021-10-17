import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <header className={styles.header}>
            <h1 className={styles.header__title}>
                ArtWikipedia
            </h1>
            <p className={styles.header__subtitle}>
                Наша платформа с каждым годом собирает все больше единомышненников, готовых поделиться своим
                творчеством. Мы помогаем всему миру узнать и раскрыть талантливых людей. Присоединяйся и ты!
            </p>
        </header>
  );
}
