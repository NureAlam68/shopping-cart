import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/features/products/productSlice";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(addProduct(data))
    navigate("/")
  }

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Add New Product!</h2>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-sm font-medium block text-gray-600">
            Product Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
            placeholder="Product name"
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border border-gray-300 focus:outline-0 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="text-sm font-medium block text-gray-600">
            Category:{" "}
          </label>
          <select
            id="category"
            name="category"
            {...register("category", { required: true })}
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border border-gray-300 focus:outline-0 focus:ring-1 focus:ring-indigo-500"
          >
            <option value="">Choose a category</option>
            <option value="fashion">Fashion</option>
            <option value="gadgets">Gadgets</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium block text-gray-600">
            Image URL:{" "}
          </label>
          <input
            type="text"
            name="image"
            id="image"
            {...register("image", { required: true })}
            placeholder="Product image"
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border border-gray-300 focus:outline-0 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium block text-gray-600">
              Price:{" "}
            </label>
            <input
              type="number"
              name="price"
              {...register("price", { required: true })}
              id="price"
              placeholder="Product price"
              className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border border-gray-300 focus:outline-0 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium block text-gray-600">
              Upload date:{" "}
            </label>
            <input
              type="date"
              name="date"
              {...register("date", { required: true })}
              id="date"
              className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border border-gray-300 focus:outline-0 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
