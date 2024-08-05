import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    layout: "left",
    showNewProjectPopup: false
}

const toggleSlice = createSlice({
    name: "toggle",
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
        togglePopup: (state, action) => {
            state.showNewProjectPopup = action.payload
        }
    }
})

export const { toggleLayout, togglePopup } = toggleSlice.actions
export default toggleSlice.reducer