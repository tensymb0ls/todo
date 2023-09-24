import { ErrorPage } from "./404"
import { Characters } from "../pages/Characters"
import { Home } from "./Home"
import { Lor } from "../pages/Lor"
import { Store } from "../pages/Store"

export const Main = ({ page }) => {
    switch (page) {
        case 1: return <Home />
        case 2: return <Characters />
        case 3: return <Lor />
        case 4: return <Store />
        default: return <ErrorPage />
    }

}