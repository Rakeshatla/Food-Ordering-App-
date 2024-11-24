import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        items: []
    },
    reducers: {
        addFav: (state, action) => {
            state.items.push(action.payload);
        },
        delFav: (state, action) => {
            state.items.pop(action.payload)
        }
    }
})
export const { addFav, delFav } = favoritesSlice.actions;
export default favoritesSlice.reducer;