import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

interface codeState {
    html: string | undefined
    css: string | undefined
    js: string | undefined
}

const initialState: codeState = {
    html: "",
    css: "",
    js: "",
}

const codeSlice = createSlice({
    name: "code",
    initialState,
    reducers: {
        setCode: (state, action: PayloadAction<codeState>) => {
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

export const { setCode, setCss, setHtml, setJs } = codeSlice.actions
export default codeSlice.reducer