import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const API_URL = "https://dummyjson.com";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [laylo, setLaylo] = useState(1);

  useEffect(() => {
    setLoading(true); // Start loading
    axios
      .get(`${API_URL}/products`, {
        params: {
          limit: 4 * laylo,
        },
      })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Failed to fetch products:", err))
      .finally(() => setLoading(false)); // Stop loading when request is complete
  }, [laylo]);

  const handleClick = () => setLaylo((prev) => prev + 1);

  const loadingSkeleton = Array(4)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="product__wrapper overflow-hidden group w-[350px] mt-7 relative duration-300 p-4 gap-1 flex flex-col rounded-[30px] animate-pulse bg-gray-200"
      >
        <div className="w-full h-[300px] bg-gray-300" />
        <p className="h-4 bg-gray-300 w-1/3 mt-4" />
        <h3 className="h-6 bg-gray-300 w-2/3 mt-2" />
        <p className="h-4 bg-gray-300 w-full mt-2" />
        <p className="h-8 bg-gray-300 w-1/2 mt-5 mb-10" />
        <div className="flex justify-between">
          <div className="w-1/4 h-6 bg-gray-300" />
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
        </div>
      </div>
    ));

  const productItem = products.map((product) => (
    <div
      key={product.id}
      className="product__wrapper overflow-hidden group w-[350px] mt-7 relative duration-300 p-4 gap-1 hover:shadow-lg hover:cursor-pointer flex flex-col rounded-[30px]"
    >
      <img
        src={product.images?.[0]}
        className="w-full h-[300px] object-contain"
        alt={product.title}
      />
      <p className="text-[red] font-bold">{product.discountPercentage}%</p>
      <h3 className="text-xl">{product.title}</h3>
      <p className="line-clamp-1">{product.description}</p>
      {product.dimensions && (
        <p>
          {product.dimensions.width}x{product.dimensions.height} cm
        </p>
      )}
      <p className="text-black text-3xl mb-10 mt-5 font-bold">
        {product.price} $
      </p>
      <div className="product__button w-[320px] items-center flex absolute transition-all duration-300 -bottom-20 left-4 group-hover:bottom-2">
        <div className="w-1/2 flex items-center gap-3">
          <button
            disabled
            className="flex items-center justify-center border w-[14px] h-[14px] pb-1 border-[#7d7d7d] text-[#7d7d7d] text-1xl rounded-[5px]"
          >
            -
          </button>
          <p className="text-black">{laylo}</p>
          <button
            onClick={handleClick}
            className="flex items-center justify-center pb-1 border w-[14px] h-[14px] border-[#7d7d7d] text-[#7d7d7d] rounded-[5px] text-1xl"
          >
            +
          </button>
        </div>
        <div className="w-1/2 flex justify-end">
          <button className="w-[48px] h-[48px] bg-yellow-400 rounded-[50%] flex items-center justify-center text-white text-3xl">
            <MdOutlineAddShoppingCart />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div id="Product" className="mt-16 container mx-auto">
      <select name="" id="" className="mb-4 p-2 border rounded">
        <option value="">Select a category</option>
        <option value="">Select a category</option>
        <option value="">Select a category</option>
        <option value="">Select a category</option>
      </select>
      <div className="flex flex-wrap justify-between">
        {loading ? loadingSkeleton : productItem}
      </div>
      <button
        className="border block mx-auto mt-10 rounded-[20px] py-2 px-2 bg-gray-800 text-white"
        onClick={() => setLaylo((prev) => prev + 1)}
      >
        See more
      </button>
    </div>
  );
};

export default Product;

