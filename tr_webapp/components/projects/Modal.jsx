import styles from '../../styles/projects/Modal.module.css';

const Modal = ({ isVisible, onClose })=> {
    if ( !isVisible ) return null;

    const handleCLose = (e) => {
        if ( e.target.id === 'wrapper' ) onClose();
    }

    return(
        <div
            className={styles.modal_wrapper}
            id="wrapper"
            onClick={handleCLose}
            >
            <div className={styles.modal}>
                <div className={styles.modal_header}>
                    <h3 className={styles.modal_title}>
                        About Motion Detector
                    </h3>      
                    <button
                        className={styles.modal_close}
                        onClick={()=> onClose()}
                    >
                        X
                    </button>
                </div>
                <div className={styles.modal_content}>
                    Motion detector is an application using python program.
                    By using a camera (laptop, usb cam), the program will detect
                    movement caught in your camera and you can have the option to
                    save the captured data in the database as BLOB image.
                </div>
                <div className={styles.modal_footer}>      
                    <button
                        className={styles.modal_footer_close}
                        onClick={()=> onClose()}
                    >
                        OK, I got it!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;