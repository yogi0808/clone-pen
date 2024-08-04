import { configureStore } from "@reduxjs/toolkit"
import projectReducer from "./features/projectSlice"

const store = configureStore({
    reducer: {
        project: projectReducer
    }
})

export default store