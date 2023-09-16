import Rocket from '../img/4.jpg';
import styles from '../styles/hero.module.css'
export const Hero = () => {
    return <section className='float-left w-25 mt-1 mr-3 ml-1'>
        <img src={Rocket} alt="" className={'w-100 ' + styles.hero}></img>
    </section>
}