import { use, useState } from "react";
import { toast } from "react-toastify";
import Card from "../card/Card";
import Resolve from "../resolve/resolve";
import SideStatus from "../sideStatus/SideStatus";
const Cards = ({
  fetchPromise,
  ticket,
  setTicket,
  handleFilterTicket,
  resolved,
  setResolved,
}) => {
  const initialData = use(fetchPromise);
  // const [ticket, setTicket] = useState([]);

  const [data, setData] = useState(initialData);
  const handleTicket = (cardsData) => {
    // const newTicket = [...ticket, cardsData];
    toast.success(`${cardsData.title} is In Progress`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTicket((prev) => [...prev, cardsData]);

    // console.log("ticked clicked", cardsData);
  };

  handleFilterTicket = (id) => {
    setData((prev) => prev.filter((el) => el.id !== id));
    const completed = ticket.find((el) => el.id === id);
    setTicket(ticket.filter((el) => el.id !== id));
    if (completed) {
      setResolved((prev) => [...prev, completed]);
    }
  };

  const handleResolve = (id) => {
    setResolved(resolved.filter((el) => el.id !== id));
  };
  // console.log(data);
  return (
    <div className="bg-[#f5f5f5] py-7">
      <div className="container mx-auto">
        <div className="px-5 py-5 font-semibold text-2xl">
          <h1>Customer Tickets</h1>
        </div>
        <div className="grid sm:grid-cols-12 gap-5 px-4">
          <div className="sm:col-span-9 grid sm:grid-cols-2 gap-4">
            {data.map((cardsData) => (
              <Card
                key={cardsData.id}
                cardsData={cardsData}
                handleTicket={handleTicket}
              />
            ))}
          </div>
          <div className="w-full sm:col-span-3 space-y-5">
            <h1 className="font-bold  text-xl">Task Status</h1>
            {ticket.length > 0 ? (
              ticket.map((tkt, ind) => (
                <SideStatus
                  handleFilterTicket={handleFilterTicket}
                  key={ind}
                  tkt={tkt}
                />
              ))
            ) : (
              <p className="text-[#627382]">
                Select a ticket to add to Task Status
              </p>
            )}

            <h1 className="font-bold  text-xl">Resolved Task</h1>
            {resolved.length > 0 ? (
              resolved.map((el, ind) => (
                <Resolve
                  key={ind}
                  el={el}
                  handleResolve={() => handleResolve(el.id)}
                />
              ))
            ) : (
              <p className="text-[#627382]">No resolved tasks yet.</p>
            )}
          </div>
        </div>
      </div>
      {/* <ToastContainer position="top-right" autoClose={2000} /> */}
    </div>
  );
};

export default Cards;
