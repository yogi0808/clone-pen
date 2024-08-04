import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    project: {
        title: "",
        description: "",
        html: "",
        css: "",
        js: ""
    }
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setHtml: (state, action) => {
            state.project.html = action.payload
        },
        setCss: (state, action) => {
            state.project.css = action.payload
        },
        setJs: (state, action) => {
            state.project.js = action.payload
        },
        setProjectTitle: (state, action) => {
            state.project.title = action.payload
        },
        setProjectDesc: (state, action) => {
            state.project.description = action.payload
        }
    }
})

export const { setCss, setHtml, setJs, setProjectDesc, setProjectTitle } = projectSlice.actions
export default projectSlice.reducer