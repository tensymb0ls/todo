import { mainText } from "../utils/constants"
import { DreamTeam } from "./DreamTeam"
import { Hero } from "./Hero"
import styles from '../styles/farGalaxy.module.css'

export const Home = () => {
    return <main>
        <Hero />
        <DreamTeam />
        <p className={styles.farGalaxy}>{mainText}</p>
    </main>
}