import calender from "../../assets/calendar.png";

const Card = ({ cardsData, handleTicket }) => {
  const { customer, priority, description, status, title, createdAt, id } =
    cardsData;
  const handleTicket1 = () => {
    // toast("added");
    handleTicket(cardsData);
    // console.log("clicked",cardsData);
  };
  return (
    <div
      onClick={handleTicket1}
      className="card  bg-base-100  card-md shadow-sm cursor-pointer"
    >
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{title}</h2>
          <div>
            <div
              className={`flex ${
                status == "Open" ? "bg-green-200" : "bg-yellow-200"
              } rounded-3xl justify-center items-center px-3 gap-1 py-1`}
            >
              <div
                className={`w-4 h-4  rounded-full ${
                  status == "Open"
                    ? "bg-green-700 text-green-950"
                    : "bg-yellow-400 text-yellow-950"
                }`}
              ></div>
              <h1
                className={`${
                  status == "Open" ? " text-green-900" : " text-yellow-900"
                }`}
              >
                {status}
              </h1>
            </div>
          </div>
        </div>
        <p>{description}</p>
        <div className="flex justify-between">
          <div className="flex gap-1 sm:gap-5">
            <h1> #{id}</h1>
            <h2
              className={`font-semibold ${
                priority == "HIGH PRIORITY"
                  ? "text-red-700"
                  : priority == "MEDIUM PRIORITY"
                  ? "text-yellow-700"
                  : "text-green-700"
              }`}
            >
              {priority}
            </h2>
          </div>
          <div className="flex gap-1 sm:gap-5">
            <h1>{customer}</h1>
            <div className="flex gap-1 items-center sm:gap-2">
              <img className="w-4 h-4" src={calender} alt="" />
              {createdAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
