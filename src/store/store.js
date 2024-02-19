import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
import comicsReducer from '../features/comics/comicsSlice'

export const store = configureStore({
    reducer: { todoReducer, comicsReducer }

})