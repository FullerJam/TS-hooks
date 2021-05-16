import { createContext } from 'react'

const initialState = {
    firstName: "James",
    lastName: "fuller"
}
export type UserState = typeof initialState;


const context = createContext<typeof initialState>(initialState)

export default context