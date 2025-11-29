import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";
import cartProducts from "./CartSlice";

const Store = configureStore({
    reducer: {
        products: productsReducer,
        Cart: cartProducts
    }
})

export default Store;