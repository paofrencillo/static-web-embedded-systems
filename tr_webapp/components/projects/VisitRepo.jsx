import styles from "../../styles/projects/VisitRepo.module.css"
import Link from "next/link";


const VisitRepo = ()=> {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                Visit our Project Repositories
            </h1>
            <div className={styles.github_container}>
                <div className={styles.github_links_wrapper}>
                    <Link className={styles.github_links} href={'https://github.com/paopaolopaoloo/THESIS-WEB-APP'}>
                        <img className={styles.github_img} src="/images/github.png" alt="github" />
                        <h4 className={styles.github_repo}>Tool Keeper System</h4>
                    </Link>
                </div>
                <div className={styles.github_links_wrapper}>
                    <Link className={styles.github_links} href={'https://github.com/paopaolopaoloo/THESIS-WEB-APP'}>
                        <img className={styles.github_img} src="/images/github.png" alt="github" />
                        <h4 className={styles.github_repo}>Static Website using next.js</h4>     
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default VisitRepo;