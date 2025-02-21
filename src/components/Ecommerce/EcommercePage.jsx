import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/slices/CartSlice";
import { getAllProducts } from "../../features/actions/productAction";
import AddProduct from "../CreateProduct/createProduct";

const EcommercePage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // Access 'items' from the cart state
console.log("cart",cart)


const { loading, products, error, success } = useSelector((state) => state.product);
console.log("pro",products)

useEffect(() => {
  dispatch(getAllProducts()); 
}, [dispatch]);
 
  //   {
  //     id: 1,
  //     name: "Red Roses",
  //     description: "A bouquet of beautiful red roses.",
  //     price: 19.99,
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkGJYvZZhibFQ2_uye9WyXomkPJKEmfDS8ayDf8K-8AlV2cmJ6ncAAis&s",
  //     category: "Roses"
  //   },
  //   {
  //     id: 2,
  //     name: "Tulips",
  //     description: "Fresh tulips in various colors.",
  //     price: 15.99,
  //     image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRooMe4DKQRGWpOE7zNO84TDkjTO46hxvuawemnLw9i72IaY0ji9WZ1-aQ8q4k8cyBphmAAis83uBiT4bQEdskcZaSuU5ZP&usqp=CAE",
  //     category: "Tulips"
  //   },
  //   {
  //     id: 3,
  //     name: "Lily Bouquet",
  //     description: "A delicate bouquet of lilies.",
  //     price: 25.99,
  //     image: "https://t3.ftcdn.net/jpg/10/60/11/42/240_F_1060114291_rYHS2w5VfjIvoSIjgEdFfrQqH3EYyjJP.jpg",
  //     category: "Lilies"
  //   },
  //   {
  //     id: 4,
  //     name: "Sunflowers",
  //     description: "Bright and cheerful sunflowers.",
  //     price: 12.99,
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXvmLBaAJCLs_3Ku4ubLpim3xZm_WwzQSC6bPygJrZI_3f0yBvumGw4OclO752MUGX9w&usqp=CAU",
  //     category: "Sunflowers"
  //   },
  //   {
  //     id: 5,
  //     name: "Orchid Vase",
  //     description: "A stylish orchid vase for any occasion.",
  //     price: 29.99,
  //     image: "https://example.com/images/orchid-vase.jpg",
  //     category: "Orchids"
  //   },
  //   {
  //     id: 6,
  //     name: "Daisies",
  //     description: "A cheerful bouquet of daisies.",
  //     price: 10.99,
  //     image: "https://example.com/images/daisies.jpg",
  //     category: "Daisies"
  //   },
  //   {
  //     id: 7,
  //     name: "Peonies",
  //     description: "Soft and fragrant peonies.",
  //     price: 22.99,
  //     image: "https://example.com/images/peonies.jpg",
  //     category: "Peonies"
  //   },
  //   {
  //     id: 8,
  //     name: "Mixed Bouquet",
  //     description: "A beautiful mix of various flowers.",
  //     price: 18.99,
  //     image: "https://example.com/images/mixed-bouquet.jpg",
  //     category: "Mixed"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="w-full h-80  bg-center flex items-center  justify-center text-white text-4xl font-bold"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1182338/pexels-photo-1182338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        }}
      >
        Fresh Flowers Delivered to Your Doorstep!
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {Array.isArray(products.products)&&
          products.products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={product?.images[0]?.secure_url
              }
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white p-4 text-center mt-6">
        <p>&copy; 2024 Flower Shop. All rights reserved.</p>
      </footer> */}
      <AddProduct/>
    </div>
  );
};

export default EcommercePage;
