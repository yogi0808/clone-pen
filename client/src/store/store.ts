import { configureStore } from '@reduxjs/toolkit'
import layoutReducer from "./features/layoutSlice"
import codeReducer from "./features/codeSlice"
import userReducer from "./features/userSlice"

export const store = configureStore({
    reducer: {
        layout: layoutReducer,
        code: codeReducer,
        user: userReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch