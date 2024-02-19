import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { _getAllCharecters } from "../../services/todo.service";

const initialState = {
    entities: [],
    loading: false,
};


export const getAllCharecters = createAsyncThunk(
    "comics/getAllCharecters",
    async () => {
        const res = await _getAllCharecters();
        return res.data;
    }
);



export const comicsSlice = createSlice({
    name: 'comics',
    initialState,
    reducers: {
        showCharecters: (state, action) => {
            const entity = {
                id: nanoid(),
                name: action.payload,
            }
            state.entities.push(entity)
        }
    },
    extraReducers: {
        [getAllCharecters.pending]: (state) => {
            state.loading = true
        },
        [getAllCharecters.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.entities = payload
        },
        [getAllCharecters.rejected]: (state) => {
            state.loading = false
        },
    },
})

export const { showCharecters } = comicsSlice.actions;

export default comicsSlice.reducer;


