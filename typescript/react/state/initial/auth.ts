import type { RetrievedUserData } from '../types/authTypes'

export interface InitialAuthStateType {
    authenticated: boolean
    user?: RetrievedUserData
}

const authState: InitialAuthStateType = {
    authenticated: false,
    user: undefined
}


export default authState
