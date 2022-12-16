import styles from "../../styles/home/HeroSection.module.css";

const HeroSection = ()=> {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>TEAM ROCKET</h1>
            <div className={styles.descriptions_wrapper}>
            <p className={styles.description}>
                <em>"Build, Innovate, Be Amazed."</em>
            </p>
            </div>
        </div>
    );
}

export default HeroSection;