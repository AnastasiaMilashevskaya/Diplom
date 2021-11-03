import styles from "./Footer.module.css";
export function Footer() {
  return (
    <div className={styles.footer}id="contact">
    <div className={styles.footer__body}>
        <div className={styles.company}>
            <h2 className={styles.footer__subtitle}>ArtWikipedia</h2>
            <p className={styles.company__text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet4 dolore magna aliquam erat.</p>
        </div>
        
        <div className={styles.footer__contact}>
            <div className={styles.contact__adress}>
                <h2 className={styles.footer__subtitle}>Contact us</h2>
                <address className={styles.footer__contact__text}>213 Baker Street Oriel City Kounty 7000 KNW, Kountry Name</address>
                <a className={styles.phone} href="tel:#">+23 994 233 4022</a>
                <a className={styles.mail} href="mailto:info@konstruct.com">info@konstruct.com</a>
            </div>
        </div>
    </div>
    <div className={styles.footer__copyright} id="footer">
        <p className={styles.copyright__text}>&#169; 2021 ArtWikipedia. Designed by Anastasia Milashevskaya</p>
    </div>      
    </div>
  );
}