import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "carts",
    initialState: [],
    reducers: {
        // add to cart
        addToCart: (state, action) => {
            // console.log(action.payload)
            const existingProduct = state.find((product) => product.productId === action.payload.id)

            if(existingProduct) {
                alert("Product already exists ia cart")
            } else {
                state.push({
                    ...action.payload,
                    id: nanoid(),
                    quantity: 1,
                    productId: action.payload.id,
                })
            }
        }

        // decrement quantity 

        // remove from cart
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;