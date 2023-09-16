import { Navigation } from "./Navigation"

export const Header = ({ changePage }) => {
    return (
        <header>
            {/* props drill for changePage */}
            <Navigation changePage={changePage} />
            <h1 className="text-center py-3">Rocket</h1>
        </header>
    )
}