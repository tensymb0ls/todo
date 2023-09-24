import { items } from "../utils/constants"
import { Link } from "react-router-dom";
export const Navigation = ({ changePage }) => {
    return (
        <nav className='fixed-top mt-4'>
            <ul className="nav">
                {items.map(({ text, id }) => (
                    <li
                        className="btn nav-item mx-1 border border-white btn-nav">
                        <Link to={id}>{text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}