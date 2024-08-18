import { createSlice } from "@reduxjs/toolkit";

interface LayoutState {
    layout: "left" | "right" | "top" | "bottom"
}

const initialState: LayoutState = {
    layout: "left",

}

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        toggleLayout: (state) => {
            switch (state.layout) {
                case "top":
                    state.layout = "right"
                    break
                case "right":
                    state.layout = "bottom"
                    break
                case "bottom":
                    state.layout = "left"
                    break
                case "left":
                    state.layout = "top"
                    break
                default:
                    state.layout = "left"
            }
        },
    }
})

export const { toggleLayout } = layoutSlice.actions
export default layoutSlice.reducer