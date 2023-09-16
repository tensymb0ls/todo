import { friends } from "../utils/constants"
import styles from '../styles/friend.module.css'
export const DreamTeam = () => {
    return (
        <section className={styles.section}>
            <h2 className="col-12 text-center">  Dream Team</h2>
            <div className={styles.grid}>
                {friends.map((item, index) => {
                    return <img
                        src={item}
                        key={index + 1}
                        className={styles.image}
                        alt='Placeholder'
                    />
                })}
            </div>
        </section>
    )
}