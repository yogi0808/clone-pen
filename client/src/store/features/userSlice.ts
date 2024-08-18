import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils/types";

interface UserSlice {
    user: User | null
}

const initialState: UserSlice = {
    user: localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData") || "") : null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            localStorage.setItem("userData", JSON.stringify(action.payload))
            state.user = action.payload
        }
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer