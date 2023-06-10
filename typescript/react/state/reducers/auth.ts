import * as Types from "../types/redux";
import { createReducer } from "@reduxjs/toolkit";
import initState from "../initial/initialState";
const initialState = initState.auth;

const AuthReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        "SET_AUTHENTICATED",
        (state: typeof initialState, action: Types.SET_AUTHENTICATED) => {
            return {
                ...state,
                authenticated: action.payload
            };
        }
    );
    builder.addCase(
        "LOGIN_SUCCESS",
        (state: typeof initialState, action: Types.LOGIN_SUCCESS) => {
            debugger
            return {
                ...state,
                user: action.payload,
                authenticated: true
            };
        }
    );
    builder.addCase(
        "LOGOUT",
        (state: typeof initialState, action: Types.LOGOUT) => {
            return {
                ...initialState,
            };
        }
    );

});

export default AuthReducer;
