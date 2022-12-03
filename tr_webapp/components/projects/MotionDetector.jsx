import styles from "../../styles/projects/MotionDetector.module.css"
import Link from "next/link";
import { useState } from "react";
import Modal from "../projects/Modal";

const OurProjects = ()=> {
    const [showModal, setShowModal] = useState(false);
    return(
        <div className={styles.section_wrapper}>
            <Modal
                isVisible={showModal}
                onClose={()=> setShowModal(false)}
            />
            <div 
                className={styles.project_about}
                onClick={()=> setShowModal(true)}
            >
                ?
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    MOTION DETECTOR
                </h1>

                    <div className={styles.md_section}>
                        <img src="/images/motion.gif" alt="motion.gif" />
                        <Link href={'/showimgs'}>
                            <button className={styles.button}>
                                Check this out!
                            </button>
                        </Link>
                    </div> 

                </div>
          
        </div>
    );
}

export default OurProjects;