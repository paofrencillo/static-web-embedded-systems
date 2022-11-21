import styles from "../../styles/projects/OurProjects.module.css"

const OurProjects = ()=> {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                OUR PROJECTS
            </h1>
            <div className={styles.our_projects}>
                <img className={styles.imgs} src="/images/cef.jpg" alt="img1" />
                <img className={styles.imgs} src="/images/jai.jpg" alt="" />
                <img className={styles.imgs} src="/images/pao.jpg" alt="" />
                <img className={styles.imgs} src="/images/ron1.jpg" alt="" />
                <img className={styles.imgs} src="/images/vegs.jpg" alt="" />
                <img className={styles.imgs} src="/images/ron2.jpg" alt="" />
                <img className={styles.imgs} src="/images/vj.jpg" alt="" />
            </div>
        </div>

    );
}

export default OurProjects;