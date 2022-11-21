import styles from "../../styles/home/ProjectsSection.module.css";
import Link from "next/link";

const ProjectsSection = ()=> {
    return(
        <div className={styles.container}>
            <div className={styles.img_wrapper}>
                <img className={styles.projects_img} src="/images/crying_face.jpg" alt="crying image" />
            </div>
            <div className={styles.description}>
                <h1 className={styles.question}>Want to see what we do?</h1>
                <Link href={'/projects'} target={'_blank'}>
                    <button className={styles.button}>Go to our projects</button>
                </Link>

            </div>
        </div>
    );
}

export default ProjectsSection;