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
                <Link className={styles.contacts} href={'tel:09090000000'}>
                    Contact Us: 090900000000
                </Link>
                <Link className={styles.contacts} href={'mailto: teamrocket@support.com'}>
                    Email: teamrocket@support.com
                </Link>
            </div>
        </div>
    );
}

export default Footer;