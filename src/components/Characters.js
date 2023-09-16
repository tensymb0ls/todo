import { characters } from "../utils/constants";
import styles from '../styles/characters.module.css'
export const Characters = () => {
    return (<main>
        <div className={styles.characters}>
            {characters.map(({ name, link, desc }) => (
                <div className={styles.card}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.top_box}>

                        <p><img className={styles.avatar} src={link} alt={name} />
                            {desc}</p>
                    </div>
                    {/* <div className={styles.bottom}>
                        <button className={styles.prim_butt}>Remove</button>
                        <button className={styles.second_butt}>Add</button>
                    </div> */}
                </div>
            ))}
        </div>
    </main>);
}