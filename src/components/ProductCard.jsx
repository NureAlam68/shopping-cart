import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/carts/cartSlice";

const ProductCard = ({product}) => {
  const {id, name, price, category, image,date} = product || {};
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }
 
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full h-[220px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold">
          ${price}
        </p>
        <div className="card-actions justify-between">
          <h2 className="font-semibold">{category}</h2>
          <button onClick={handleAddToCart}  className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
