
import { createSlice } from "@reduxjs/toolkit"

const cartProducts = createSlice({
    name: "cart",
    initialState: {
        products: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id)
        }
    }
})

export default cartProducts.reducer
export const { addProduct, removeProduct } = cartProducts.actions