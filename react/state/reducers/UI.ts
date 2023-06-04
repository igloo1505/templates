import * as Types from "../types/redux";
import { createReducer } from "@reduxjs/toolkit";
import initState from "../initial/initialState";
import { RootState } from "../store";
const initialState = initState.UI;

const UIReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        "TOGGLE_DARK_MODE",
        (state: typeof initialState, action: Types.TOGGLE_DARK_MODE) => {
            return {
                ...state,
                darkMode: !state.darkMode
            };
        }
    );
    builder.addCase(
        "SHOW_TOAST",
        (state: typeof initialState, action: Types.SHOW_TOAST) => {
            return {
                ...state,
                toast: action.payload
            };
        }
    );
    builder.addCase(
        "DISPOSE_TOAST",
        (state: typeof initialState, action: Types.DISPOSE_TOAST) => {
            return {
                ...state,
                toast: initialState.toast
            };
        }
    );
    builder.addCase(
        "TOGGLE_DRAWER",
        (state: typeof initialState, action: Types.TOGGLE_DRAWER) => {
            return {
                ...state,
                drawerOpen: typeof action.payload !== "undefined" ? action.payload : !state.drawerOpen
            };
        }
    );
    builder.addCase(
        "TOGGLE_MODAL",
        (state: typeof initialState, action: Types.TOGGLE_MODAL) => {
            return {
                ...state,
                modals: {
                    ...state.modals,
                    [action.payload]: !state.modals[action.payload]
                }
            };
        }
    );
    builder.addCase(
        "CLOSE_ALL_MODALS",
        (state: typeof initialState, action: Types.CLOSE_ALL_MODALS) => {
            // @ts-ignore
            let newModals: RootState['UI']['modals'] = {}
            Object.keys(state.modals).forEach((k) => {
                // @ts-ignore
                newModals[k] = false
            })
            return {
                ...state,
                modals: newModals
            };
        }
    );
});

export default UIReducer;
