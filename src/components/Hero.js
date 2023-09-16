import Rocket from '../img/4.jpg';
import styles from '../styles/hero.module.css'
export const Hero = () => {
    return <section className={styles.section}>
        <img src={Rocket} alt="" className={styles.hero}></img>
    </section>
}