import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../utils/cartSlice"
import favoritesReducer from "../utils/favoritesSlice";
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer,
    },
})
export default appStore;