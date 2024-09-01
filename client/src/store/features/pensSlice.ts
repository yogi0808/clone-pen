import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PensState {
    pens: []
}

const initialState: PensState = {
    pens: []
}

const pensSlice = createSlice({
    name: "pens",
    initialState,
    reducers: {
        setPens: (state, action: PayloadAction<[]>) => {
            state.pens = action.payload
        }
    }
})

export const { setPens } = pensSlice.actions
export default pensSlice.reducer