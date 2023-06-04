import { ToastConfigType } from "../types/UITypes"

type initialUiStateType = {
    darkMode: boolean
    toast: ToastConfigType
    drawerOpen: boolean
    modals: {
        termsOfService: boolean
        privacy: boolean
    }
}


const initialUiState: initialUiStateType = {
    darkMode: false,
    toast: {
        variant: "info",
        timeout: 0,
        open: false,
        message: "",
        title: ""
    },
    drawerOpen: false,
    modals: {
        termsOfService: false,
        privacy: false
    }
}

export type modalType = keyof initialUiStateType["modals"]


export default initialUiState
