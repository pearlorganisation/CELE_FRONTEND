const ImgCard = ({ h1, p, image, title, description }) => {
  return (
    <>
      <div className="mt-10 px-20 max-w-7xl">
        <h1 className="text-3xl font-bold text-left text-green-800">{h1}</h1>
        <p className="text-left text-gray-600 mt-2">{p}</p>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-row ">
          <img src={image} alt={title} className="w-80 h-52 object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-green-800">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgCard;
