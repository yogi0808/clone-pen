import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

interface codeState {
    id: string
    title: string
    projectType: string
    html: string | undefined
    css: string | undefined
    js: string | undefined
}

const initialState: codeState = {
    id: "",
    title: "",
    projectType: "",
    html: "",
    css: "",
    js: "",
}

const codeSlice = createSlice({
    name: "code",
    initialState,
    reducers: {
        setProject: (state, action: PayloadAction<codeState>) => {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.projectType = action.payload.projectType;
            state.css = action.payload.css;
            state.html = action.payload.html;
            state.js = action.payload.js;
        },
        setHtml: (state, action: PayloadAction<string | undefined>) => {
            state.html = action.payload
        },
        setCss: (state, action: PayloadAction<string | undefined>) => {
            state.css = action.payload
        },
        setJs: (state, action: PayloadAction<string | undefined>) => {
            state.js = action.payload
        }
    }
})

export const { setProject, setCss, setHtml, setJs } = codeSlice.actions
export default codeSlice.reducer