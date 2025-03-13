import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{ id: 1, name: "ok" }, { id: 2, name: "no"}];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: nanoid(),
        ...action.payload,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
