import { configureStore } from "@reduxjs/toolkit";
import Todo from "./ReduxToolkit/Todo";

export const store = configureStore({
    reducer: {
        todos: Todo
    }
})