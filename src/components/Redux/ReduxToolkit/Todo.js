import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "form",
    initialState: {
        list: []
    },
    reducers: {
        Add: (state, action) => {
            state.list.push(action.payload)
        },
        Edit: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state.list.splice(index, 1,action.payload);
              }
        },
        Delete: (state, action) => {
            state.list = state.list.filter((form) => form.id !== action.payload);
        }
    }
})

export const { Add, Edit, Delete } = todoSlice.actions
export default todoSlice.reducer