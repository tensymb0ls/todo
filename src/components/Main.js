import { ErrorPage } from "./404"
import { Characters } from "./Characters"
import { Home } from "./Home"
import { Lor } from "./Lor"
import { Store } from "./Store"

export const Main = ({ page }) => {
    switch (page) {
        case 1: return <Home />
        case 2: return <Characters />
        case 3: return <Lor />
        case 4: return <Store />
        default: return <ErrorPage />
    }

}