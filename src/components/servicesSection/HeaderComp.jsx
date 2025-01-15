const HeaderComp = () => {
    return (
      <div className="text-center">
        <p className="text-2xl font-semibold uppercase text-green-600 ">
          Need Immediate Services? We Are Available 24/7
        </p>
        <div className="flex flex-wrap justify-center space-x-2 mt-8">
          <button className="bg-green-100 text-green-700 border-2 border-green-700 rounded-full px-4 py-1 text-sm hover:bg-green-200">
            New Orleans (504) 366-4343
          </button>
          <button className="bg-green-100 text-green-700 border-2 border-green-700 rounded-full px-4 py-1 text-sm hover:bg-green-200">
            Harvey (504) 367-3920
          </button>
          <button className="bg-green-100 text-green-700 border-2 border-green-700 rounded-full px-4 py-1 text-sm hover:bg-green-200">
            Marrero (504) 348-2010
          </button>
        </div>
      </div>
    );
  };
  
  export default HeaderComp;
  