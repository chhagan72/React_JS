import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"

export const like = configureStore({
  reducer: {
    counter: counterReducer,
  }
})