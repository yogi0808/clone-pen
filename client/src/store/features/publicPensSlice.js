import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pens: []
}

const publicPensSlice = createSlice({
    name: "publicPense",
    initialState,
    reducers: {
        setPens: (state, action) => {
            state.pens = action.payload
        }
    }
})

export const { setPens } = publicPensSlice.actions
export default publicPensSlice.reducer