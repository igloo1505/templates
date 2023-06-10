import type { modalType } from "../initial/ui";
import type { RetrievedUserData } from "./authTypes";
import type { ToastConfigType } from "./UITypes";


// SECTION: Authentication stuff
export type SET_AUTHENTICATED = { type: "SET_AUTHENTICATED"; payload: boolean };
export type LOGIN_SUCCESS = { type: "LOGIN_SUCCESS", payload: RetrievedUserData }
export type INVALID_CREDENTIALS = { type: "INVALID_CREDENTIALS" }
export type LOGOUT = { type: "LOGOUT" }


// SECTION: Ui Stuff
export type TOGGLE_DARK_MODE = { type: "TOGGLE_DARK_MODE" };
export type SHOW_TOAST = { type: "SHOW_TOAST", payload: ToastConfigType };
export type DISPOSE_TOAST = { type: "DISPOSE_TOAST" };
export type TOGGLE_DRAWER = { type: "TOGGLE_DRAWER", payload?: boolean };
export type TOGGLE_MODAL = { type: "TOGGLE_MODAL", payload: modalType }
export type CLOSE_ALL_MODALS = { type: "CLOSE_ALL_MODALS" }
