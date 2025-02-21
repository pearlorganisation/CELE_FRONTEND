// src/components/AddProduct.js

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
  const [selectedImages, setSelectedImages] = useState([]);

  // Auto-generate slug from name
  const generateSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setValue("slug", generateSlug(name));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("slug", data.slug);
    formData.append("category", data.category);

  
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await axios.post("http://localhost:5000/api/v1/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product added successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            {...register("name", { required: "Product name is required" })}
            onChange={handleNameChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        Slug (Auto-generated)
        <div>
          <label className="block text-sm font-medium">Slug</label>
          <input
            type="text"
            {...register("slug")}
            readOnly
            className="w-full p-2 border rounded-md bg-gray-100"
          />
        </div> 

     
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="w-full p-2 border rounded-md"
          ></textarea>
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>


        <div>
          <label className="block text-sm font-medium">Price ($)</label>
          <input
            type="number"
            {...register("price", { required: "Price is required", min: 1 })}
            className="w-full p-2 border rounded-md"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input {...register("category", { required: "Category is required" })} className="w-full p-2 border rounded-md"/>
         
          
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium">Product Images</label>
          <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="w-full p-2 border rounded-md" />
          {selectedImages.length > 0 && (
            <div className="mt-2 grid grid-cols-3 gap-2">
              {selectedImages.map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt="Preview" className="w-full h-24 object-cover rounded-md" />
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
