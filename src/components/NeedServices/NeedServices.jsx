const NeedServices = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-3 mt-12">
      <h1 className="mt-6 font-bold text-4xl text-green-800 text-center">
        Need Immediate Services? We Are Available 24/7
      </h1>

      <p className="px-20 mt-6 font-semibold text-xl text-black/80 text-center">
        <span className="text-green-800">CELE</span>, LLC offers distinctive,
        personal, and affordable services designed to help you honor your loved
        one in a way that is unique to them and meaningful to you.
      </p>

      <div className="px-20 mt-6 font-semibold text-xl text-black/80 text-center flex items-center justify-center gap-4">
        <button className="px-4 py-2 bg-white text-green-800 border-green-800 border-2 rounded-full hover:bg-green-800 hover:text-white">
          Dehradun (+91 9012345678)
        </button>
        <button className="px-4 py-2 bg-white text-green-800 border-green-800 border-2 rounded-full hover:bg-green-800 hover:text-white">
          Delhi (+91 91234567890)
        </button>
        <button className="px-4 py-2 bg-white text-green-800 border-green-800 border-2 rounded-full hover:bg-green-800 hover:text-white">
          Dubai (+971 1234567890)
        </button>
      </div>
    </div>
  );
};

export default NeedServices;
