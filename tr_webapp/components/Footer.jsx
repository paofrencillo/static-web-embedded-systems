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
                Team Rocket offers a simple way for you to have your very own pokemon and be the very best that no one ever was.
                To catch them is a real test and to train them is your cause. As Team Rocket will catch em all for you to make
                your journey an easy one!
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