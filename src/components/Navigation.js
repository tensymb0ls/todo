import { items } from "../utils/constants"
export const Navigation = ({ changePage }) => {
    return (
        <nav className='fixed-top ml-4 mt-2'>
            <ul className="nav">
                {items.map(({ text, id }) => (
                    <li
                        onClick={() => changePage(id)}
                        className="btn nav-item mx-1 border border-white btn-nav">
                        {text}
                    </li>
                ))}
            </ul>
        </nav>
    )
}