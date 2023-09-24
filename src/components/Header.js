import { Navigation } from "./Navigation"
import logo from '../img/logo.png'
import styles from '../styles/farGalaxy.module.css'
export const Header = ({ changePage, title }) => {
    return (
        <header>
            {/* props drill for changePage */}
            <Navigation changePage={changePage} />
            <div className={styles.logo}><img src={logo} />{title}</div>
        </header>
    )
}