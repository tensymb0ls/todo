import styles from '../styles/usersTable.module.css'
export const UsersTable = ({ users }) => {
    console.log(users);
    return <main>
        <div className={styles.wrapper}>
            <h1>Users:</h1>
            <ul className={styles.userList}>
                {users.map(({ age, avatar, createdAt, id, name, phone }) => {
                    return <li>
                        <div className={styles.userItem}>
                            <img src={avatar} alt='User avatar' />
                            <p><b><i>User name:</i></b> {name}</p>
                            <p><b><i>Created:</i></b> {createdAt}</p>
                            <p><b><i>Id:</i></b> {id}</p>
                            <p><b><i>Age:</i></b> {age}</p>
                            <p><b><i>Phone number:</i></b> {phone}</p>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    </main>
}
// age, avatar, createdAt, id, name, phone
