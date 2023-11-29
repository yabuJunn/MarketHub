import { dispatch } from "../store"
import { changeScreen, restarTGlobalStore, sideMenuVisibility } from "../store/actions"
import { Screens } from "../types/screens"

export const logOut = () => {
    localStorage.removeItem("logedFirebaseID")
    dispatch(
        restarTGlobalStore()
    )
    dispatch(
        sideMenuVisibility(false)
    )
    dispatch(
        changeScreen(Screens.landingPage)
    )
}