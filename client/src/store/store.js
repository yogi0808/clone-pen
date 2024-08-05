import { configureStore } from "@reduxjs/toolkit"

// Files
import userReducer from "./features/userSlice"
import toggleReducer from "./features/toggleSlice"
import projectReducer from "./features/projectSlice"
import publicPensReducer from "./features/publicPensSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        project: projectReducer,
        toggle: toggleReducer,
        publicPens: publicPensReducer
    }
})

export default store