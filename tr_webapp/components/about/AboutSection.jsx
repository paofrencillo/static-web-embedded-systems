import styles from "../../styles/about/AboutSection.module.css";

const AboutSection = ()=> {
    return(
        <div className={styles.outer_container}>
            <div className={styles.inner_container}>
                <h3 className={styles.description}>
                    This website is all about the personal information
                    and social media accounts of the members of the
                    group team rocket under the subject embedded systems
                    (CPET17) which is aimed to do a system as a requirement
                    for this subject.
                </h3>      
            </div>
        </div>         
    );
}

export default AboutSection;