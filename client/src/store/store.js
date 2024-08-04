import { configureStore } from "@reduxjs/toolkit"
import projectReducer from "./features/projectSlice"
import userReducer from "./features/userSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        project: projectReducer
    }
})

export default store