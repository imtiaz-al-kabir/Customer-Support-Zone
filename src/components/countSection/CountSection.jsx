import vectorImg from "../../assets/vector1.png";

const CountSection = ({ ticket }) => {
  return (
    <div className="bg-[#f5f5f5] pt-10">
      <div className="flex flex-col md:flex-row gap-4 p-4 container mx-auto ">
        <div className="relative flex-1 rounded-lg p-6 flex flex-col justify-center items-center text-white overflow-hidden bg-gradient-to-r from-[#642fe3] to-[#8D5AF1] h-[250px]">
          <div className="absolute inset-0 opacity-60 flex justify-between">
            <img className="" src={vectorImg} alt="" />
            <img className="rotate-y-180" src={vectorImg} alt="" />
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-xl font-semibold mb-2">In-Progress</h3>
            <p className="text-6xl font-bold leading-none">{ticket.length}</p>
          </div>
        </div>
        <div className="relative flex-1 rounded-lg p-6 flex flex-col justify-center items-center text-white overflow-hidden bg-gradient-to-r from-[#4CAF50] to-[#00827a]">
          <div className="absolute inset-0 opacity-60 flex justify-between">
            <img className="" src={vectorImg} alt="" />
            <img className="rotate-y-180" src={vectorImg} alt="" />
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-xl font-semibold mb-2">Resolved</h3>
            <p className="text-6xl font-bold leading-none">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountSection;
