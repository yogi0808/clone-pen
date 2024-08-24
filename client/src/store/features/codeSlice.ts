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
            state = action.payload;
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