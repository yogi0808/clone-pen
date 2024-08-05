import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    project: {
        title: "Untitled",
        description: "",
        type: "public",
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
        setProjectData: (state, action) => {
            state.project.title = action.payload.title || ""
            state.project.description = action.payload.desc || ""
            state.project.type = action.payload.type || "public"
            state.project.html = action.payload.html || ""
            state.project.css = action.payload.css || ""
            state.project.js = action.payload.js || ""
        }
    }
})

export const { setCss, setHtml, setJs, setProjectData } = projectSlice.actions
export default projectSlice.reducer