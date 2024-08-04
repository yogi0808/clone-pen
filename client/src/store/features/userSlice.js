import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null,
    userProjects: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action) => {

            localStorage.setItem("userData", JSON.stringify(action.payload))

            state.user = action.payload
        },
        setUserProjects: (state, action) => {
            state.userProjects = action.payload
        },
        addSingleProject: (state, action) => {
            state.userProjects.push(action.payload)
        },
        logout: (state, action) => {
            localStorage.clear()

            state.user = null
        }
    }
})

export const { setUserData, setUserProjects, addSingleProject, logout } = userSlice.actions
export default userSlice.reducer