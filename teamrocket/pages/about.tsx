import Head from 'next/head';
import Navbar from '../components/Navbar';
import AboutSection from '../components/about/AboutSection';
import Footer from '../components/Footer';
import styles from '../styles/about/About.module.css';


export default function Projects() {
  return (
    <div>
      <Head>
        <title>About | Team Rocket</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/rocketmind.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <AboutSection />
        <footer>
          <Footer />
        </footer>      
      </main>
    </div>
  );
}