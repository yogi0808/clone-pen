import { configureStore } from "@reduxjs/toolkit"

// Files
import userReducer from "./features/userSlice"
import toggleReducer from "./features/toggleSlice"
import projectReducer from "./features/projectSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        project: projectReducer,
        toggle: toggleReducer
    }
})

export default store