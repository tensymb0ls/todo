import { store } from '../utils/constants';
import styles from '../styles/store.module.css'
import { Header } from '../components/Header';

export const Store = () => {
    return (<main>
        <Header />
        <div className={styles.characters}>
            {store.map(({ name, link, desc, price }) => (
                <div className={styles.card}>

                    <div className={styles.top_box}>
                        <div className={styles.price}>{price}$</div>
                        <img className={styles.avatar} src={link} alt={name} />
                        <p className={styles.name}>{name}</p>
                    </div>
                    <div className={styles.desc}>{desc}</div>
                    <div className={styles.bottom}>
                        {/* <button className={styles.prim_butt}>Remove</button> */}
                        <button className={styles.second_butt}>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    </main>);
}