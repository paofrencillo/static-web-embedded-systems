import styles from "../styles/Footer.module.css";
import Link from "next/link";


const Footer = ()=> {
    return(
        <div className={styles.container}>
            <h3 className={styles.team_logo}>
                TR
            </h3>
            <h5 className={styles.team_name}>
                Team Rocket
            </h5>
            <p className={styles.team_description}>
                Team Rocket is a dedicated team that provide services
                that exceed the expectation of the clients and users.
                <br /><br />
                <strong>Catch 'em all Pokemon!</strong>
            </p>
            <div className={styles.team_contacts}>
                <Link className={styles.contacts}
                    href={'https://mail.google.com/mail/u/0/?tab=rm#sent?compose=DmwnWrRlRZPNQKWkJLhWhmhHxnTRwjdwPNCdZZscRkGxrcfshktPWbSrvCQLvxLtJZDldrXWKtjQ'}
                    target={'_blank'}>
                    Email: cefrin.paanod@gsfe.tupcavite.edu.ph
                </Link>
            </div>
        </div>
    );
}

export default Footer;