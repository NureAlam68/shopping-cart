import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "T-shirt",
    price: 100,
    category: "Cloth",
    image:
      "https://img.freepik.com/free-vector/flat-minimalist-support-small-business-t-shirt_742173-10802.jpg?t=st=1742054909~exp=1742058509~hmac=0f79e5e2fe5b8754a072a8b874f971caeb688e78d1f9e9a6d9daf9e275c7745d&w=740",
    date: "2025-03-15",
  },
  {
    id: 2,
    name: "T-shirt",
    price: 100,
    category: "Cloth",
    image:
      "https://img.freepik.com/free-vector/flat-minimalist-support-small-business-t-shirt_742173-10802.jpg?t=st=1742054909~exp=1742058509~hmac=0f79e5e2fe5b8754a072a8b874f971caeb688e78d1f9e9a6d9daf9e275c7745d&w=740",
    date: "2025-03-15",
  },
  {
    id: 3,
    name: "T-shirt",
    price: 100,
    category: "Cloth",
    image:
      "https://img.freepik.com/free-vector/flat-minimalist-support-small-business-t-shirt_742173-10802.jpg?t=st=1742054909~exp=1742058509~hmac=0f79e5e2fe5b8754a072a8b874f971caeb688e78d1f9e9a6d9daf9e275c7745d&w=740",
    date: "2025-03-15",
  },
  {
    id: 4,
    name: "T-shirt",
    price: 100,
    category: "Cloth",
    image:
      "https://img.freepik.com/free-vector/flat-minimalist-support-small-business-t-shirt_742173-10802.jpg?t=st=1742054909~exp=1742058509~hmac=0f79e5e2fe5b8754a072a8b874f971caeb688e78d1f9e9a6d9daf9e275c7745d&w=740",
    date: "2025-03-15",
  },
];

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
