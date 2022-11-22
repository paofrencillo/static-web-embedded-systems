import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = ()=> {
    return(
        <div className={styles.navbar}>
            <div className={styles.navbar_brand_wrapper}>
                <Link className={styles.navbar_brand_link} href={'/'}>
                    <h2 className={styles.navbar_brand}>TR</h2>
                </Link>
            </div>
            <div>
                <ul className={styles.navbar_options_wrapper}>
                    <Link className={styles.navbar_links} href={'/'}>
                        <li className={styles.navbar_options}>HOME</li>
                    </Link>
                    <Link className={styles.navbar_links} href={'/projects'} target={'_blank'}>
                        <li className={styles.navbar_options}>PROJECTS</li>
                    </Link>
                    <Link className={styles.navbar_links} href={'/about'} target={'_blank'}>
                        <li className={styles.navbar_options}>ABOUT</li>
                    </Link>     
                </ul>
            </div>
        </div>
    );
}

export default Navbar;