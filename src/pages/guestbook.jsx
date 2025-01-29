import React, { useEffect, useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import { GiCandlebright } from "react-icons/gi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getallCandle } from "../features/actions/candleAction.js";
import { useForm } from "react-hook-form";
import { IoMdPhotos } from "react-icons/io";
const Guestbook = ({ data }) => {
  console.log("data", data.images?.map((img) => img.secure_url))

  const dispatch = useDispatch();
  const { loading, candle, error, success } = useSelector((state) => state.candle);

  const [selectedCandle, setSelectedCandle] = useState(null);
  const [selectedButton, setSelectedButton] = useState({ photos: false, candles: false });
  const [imagePreview, setImagePreview] = useState(null);
  const [modalImage, setModalImage] = useState(null); // State for modal image

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    dispatch(getallCandle());
  }, [dispatch]);

  const handleSelectCandle = (id) => {
    setSelectedCandle(id);
  };

  const handleButtonClick = (button) => {
    setSelectedButton((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-8">Guestbook</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded-lg shadow-md mb-6">
        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
          className="w-full p-2 border rounded-md mb-4"
        />
        <div className="flex gap-4 mb-4">
          <button
            type="button"
            className="flex items-center gap-2 border border-gray-400 text-black px-4 py-2 rounded-lg"
            onClick={() => handleButtonClick("photos")}
          >
            <HiPhoto className="text-gray-500" />
            Add Photos
          </button>
          <button
            type="button"
            className="flex items-center gap-2 border border-gray-400 text-black px-4 py-2 rounded-lg"
            onClick={() => handleButtonClick("candles")}
          >
            <GiCandlebright className="text-gray-500" />
            Light Candle
          </button>
        </div>

        {selectedButton.candles && (
          <div className="flex flex-row gap-4 px-4 py-6 shadow-md">
            {candle?.data?.map((cand) => (
              <div
                key={cand._id}
                className={`mx-auto ${selectedCandle === cand._id ? "selected" : ""}`}
                onClick={() => handleSelectCandle(cand._id)}
              >
                <img
                  src={cand.image.secure_url}
                  alt={cand.name}
                  className={`${selectedCandle === cand._id ? "border-4 border-blue-600 rounded-full" : ""} rounded-full w-24 h-24`}
                />
              </div>
            ))}
          </div>
        )}

        {selectedButton.photos && (
          <div className="mt-6">
            <div className="border-2 border-dashed border-gray-400 h-40 flex justify-center">
              <label htmlFor="photo-upload" className="cursor-pointer text-gray-500 pt-10">
                <MdOutlineAddPhotoAlternate className="text-2xl" />
                <span className="text-blue-500">Select Photos</span>
                <p className="text-gray-300">PNG, JPG, GIF up to 10MB</p>
              </label>
              <input
                id="photo-upload"
                {...register("photo")}
                type="file"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </div>
            {imagePreview && (
              <>     <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 mt-4 border border-gray-500 cursor-pointer"
            
            />
         
            <IoMdPhotos   className="text-black" onClick={() => openModal(imagePreview)} />
              </>
         
            )}
       
          </div>
        )}

        <button type="submit" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg w-full">
          Submit Post
        </button>
      </form>

      {/* Posts Section */}

         <div>{data.name}</div>
         <p className="text-sm text-gray-500">
        {data.createdAt ? new Date(data.createdAt).toLocaleDateString() : "Date not available"}
      </p>
      <div className="grid md:grid-cols-3 gap-6">
   
      {Array.isArray(data?.images) &&
          data.images.map((pic, index) => (
            <div key={pic._id || index}>
              <div className="  p-6 border mx-auto  rounded-lg hover:shadow-xl transition-shadow duration-300  py-4 overflow-hidden mt-10">
                <div className="flex gap-4 ">
              
                  <div className="flex items-center mx-auto">
                    <img
                      src={pic.secure_url}
                      alt="Gallery"
                      className="w-40 h-40 rounded-lg "
                      onClick={() => openModal(pic.secure_url)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full"
            >
              ✕
            </button>
            <img src={modalImage} alt="Modal" className="w-[300px ] h-[300px] rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Guestbook;
