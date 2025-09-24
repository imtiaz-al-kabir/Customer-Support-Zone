import { use, useState } from "react";
import Card from "../card/Card";
import SideStatus from "../sideStatus/SideStatus";

const Cards = ({ fetchPromise, ticket, setTicket, handleFilterTicket }) => {
  const initialData = use(fetchPromise);
  // const [ticket, setTicket] = useState([]);
  const [data, setData] = useState(initialData);
  const handleTicket = (cardsData) => {
    // const newTicket = [...ticket, cardsData];
    setTicket((prev) => [...prev, cardsData]);
    setData((prev) => prev.filter((el) => el.id !== cardsData.id));
    // console.log("ticked clicked", cardsData);
  };
  // console.log(data);
  return (
    <div className="bg-[#f5f5f5] py-10">
      <div className="container mx-auto">
        <div className="px-5 py-5 font-semibold text-2xl">
          <h1>Customer Tickets</h1>
        </div>
        <div className="grid sm:grid-cols-12 gap-5 px-4">
          <div className="col-span-9 grid sm:grid-cols-2 gap-4">
            {data.map((cardsData) => (
              <Card
                key={cardsData.id}
                cardsData={cardsData}
                handleTicket={handleTicket}
              />
            ))}
          </div>
          <div className="w-full sm:col-span-3 space-y-5">
            <h1 className="font-bold pb-4 text-xl">Task Status</h1>
            {ticket.map((tkt, ind) => (
              <SideStatus
                handleFilterTicket={handleFilterTicket}
                key={ind}
                tkt={tkt}
              />
            ))}

            <h1>Resolved Task</h1>

              <div className="card  bg-base-100 card-sm shadow-sm ">
      <div className="card-body">
        <h2 className="card-title">{}</h2>

        <button
          onClick={() => {
            
            handleFilterTicket(tkt.id);
          }}
          className="btn bg-green-500 text-white font-medium"
        >
          Complete
        </button>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
