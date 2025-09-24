import { Suspense, useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards";
import CountSection from "./components/countSection/countSection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";

const fetchData = async () => {
  const result = await fetch("/ticket.json");
  return result.json();
};
const fetchPromise = fetchData();
function App() {
  const [ticket, setTicket] = useState([]);
  const handleFilterTicket = (id) => {
    console.log("handle ticket Clicked", id);
    const updatedTicket = ticket.filter((el) => el.id !== id);
    setTicket(updatedTicket);
  };

  return (
    <>
      <Navbar />
      <CountSection ticket={ticket} />
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <Cards
          fetchPromise={fetchPromise}
          ticket={ticket}
          setTicket={setTicket}
          handleFilterTicket={handleFilterTicket}
        />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
