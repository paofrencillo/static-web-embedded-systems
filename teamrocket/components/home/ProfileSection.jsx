import styles from "../../styles/home/ProfileSection.module.css";
import Link from "next/link";

const ProfileSection = ()=> {
    return(
        <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.profiles_img_wrapper}>
                        <img className={styles.profiles_img} src="/images/worker1.png" alt="cef_art_img" />
                    </div>     
                    <h3 className={styles.profiles_name}>CEFRIN PAANOD</h3>
                    <p className={styles.profiles_description}>Developer/Designer</p>
                    <div className={styles.contact_wrapper}>
                        <Link href={'https://www.facebook.com/bokaroids'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/fb.png" alt="fb" />
                        </Link>
                        <Link href={''} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/linkedin.png" alt="linkedin" />
                        </Link>
                        <Link href={'https://mail.google.com/mail/u/0/?tab=rm#sent?compose=DmwnWrRlRZPNQKWkJLhWhmhHxnTRwjdwPNCdZZscRkGxrcfshktPWbSrvCQLvxLtJZDldrXWKtjQ'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/google.png" alt="google" />
                        </Link>    
                        <Link href={'https://github.com/cefbok'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/github.png" alt="github" />
                        </Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.profiles_img_wrapper}>
                        <img className={styles.profiles_img} src="/images/worker2.png" alt="pao_art_img" />
                    </div>     
                    <h3 className={styles.profiles_name}>PAO FRENCILLO</h3>
                    <p className={styles.profiles_description}>Developer/Designer</p>
                    <div className={styles.contact_wrapper}>
                        <Link href={'https://www.facebook.com/paopaolopaoloo'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/fb.png" alt="fb" />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/paofrencillo/'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/linkedin.png" alt="linkedin" />
                        </Link>
                        <Link href={'https://mail.google.com/mail/u/0/?tab=rm#sent?compose=CllgCJTLGtngfxmjCqRWCKhMLvQKZRtlTZgMsLKLLnkqDCrMQZcHKGlVngfcqcWTDTpCRlxRXFL'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/google.png" alt="google" />
                        </Link>    
                        <Link href={'https://github.com/paopaolopaoloo'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/github.png" alt="github" />
                        </Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.profiles_img_wrapper}>
                        <img className={styles.profiles_img} src="/images/worker3.png" alt="niel_art_img" />
                    </div>     
                    <h3 className={styles.profiles_name}>RONIEL KILARIO</h3>
                    <p className={styles.profiles_description}>Developer</p>
                    <div className={styles.contact_wrapper}>
                        <Link href={'https://www.facebook.com/kilarioronielks'} target={'_blank'}>
                                <img className={styles.contact_icons} src="/images/fb.png" alt="fb" />
                        </Link>
                        <Link href={''} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/linkedin.png" alt="linkedin" />
                        </Link>
                        <Link href={'https://mail.google.com/mail/u/0/?tab=rm#sent?compose=DmwnWtDvfTDFWdXfgpHPTBZRnDbPFJrGbHffJXTVfkBZRbXGnzftQQCxHNrlJwfnTTpVBRrvVVng'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/google.png" alt="google" />
                        </Link>    
                        <Link href={'https://github.com/Crnphlx'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/github.png" alt="github" />
                        </Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.profiles_img_wrapper}>
                        <img className={styles.profiles_img} src="/images/worker4.png" alt="vj_art_img" />
                    </div>     
                    <h3 className={styles.profiles_name}>VJ MONTARIL</h3>
                    <p className={styles.profiles_description}>Quality Assurance</p>
                    <div className={styles.contact_wrapper}>
                        <Link href={'https://www.facebook.com/vincentjakemontaril'} target={'_blank'}>
                                <img className={styles.contact_icons} src="/images/fb.png" alt="fb" />
                        </Link>
                        <Link href={''} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/linkedin.png" alt="linkedin" />
                        </Link>
                        <Link href={'https://mail.google.com/mail/u/0/?tab=rm#sent?compose=DmwnWrRnXfDJmKPtbcHgKHPLNVFLHZPhJjttNBZSKlghQmBXxnjgcCwMTwWLBbGrxXzMppLCXKJb'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/google.png" alt="google" />
                        </Link>    
                        <Link href={'https://github.com/VincentJakeMontaril'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/github.png" alt="github" />
                        </Link>
                    </div>    
                </div>

                <div className={styles.card}>
                    <div className={styles.profiles_img_wrapper}>
                        <img className={styles.profiles_img} src="/images/worker5.png" alt="rj_art_img" />
                    </div>     
                    <h3 className={styles.profiles_name}>RJ VEGA</h3>
                    <p className={styles.profiles_description}>Project Manager</p>
                    <div className={styles.contact_wrapper}>
                        <Link href={'https://www.facebook.com/rayjustine.mosqueravega'} target={'_blank'}>
                                <img className={styles.contact_icons} src="/images/fb.png" alt="fb" />
                        </Link>
                        <Link href={''} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/linkedin.png" alt="linkedin" />
                        </Link>
                        <Link href={'https://mail.google.com/mail/u/0/?tab=rm#sent?compose=jrjtXPVgjblXZXvZzltxCTsTCBCSLskxchwZvlhnhLwxGRNMhJzQmzFwtbLSvzWQWJCWQwQb'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/google.png" alt="google" />
                        </Link>    
                        <Link href={'https://github.com/rayjustinevega'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/github.png" alt="github" />
                        </Link>
                    </div> 
                </div>

                <div className={styles.card}>
                    <div className={styles.profiles_img_wrapper}>
                        <img className={styles.profiles_img} src="/images/worker6.png" alt="jc_art_img" />
                    </div>     
                    <h3 className={styles.profiles_name}>JC SAMBAJON</h3>
                    <p className={styles.profiles_description}>Developer</p>
                    <div className={styles.contact_wrapper}>
                        <Link href={'https://www.facebook.com/SJaywus'} target={'_blank'}>
                                <img className={styles.contact_icons} src="/images/fb.png" alt="fb" />
                        </Link>
                        <Link href={''} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/linkedin.png" alt="linkedin" />
                        </Link>
                        <Link href={'https://mail.google.com/mail/u/0/?tab=rm#sent?compose=CllgCJlJVSHcfWltGRbCmzLpmrWqphvJjJZDQhWWbHFHWFHMnLQtWwsrgncqLWqnccxSmhxQkTL'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/google.png" alt="google" />
                        </Link>    
                        <Link href={'https://github.com/JairusSambajon'} target={'_blank'}>
                            <img className={styles.contact_icons} src="/images/github.png" alt="github" />
                        </Link>
                    </div> 
                </div>
            </div>
    );
}

export default ProfileSection;