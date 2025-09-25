import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
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
  const [resolved, setResolved] = useState([]);

  return (
    <>
      <Navbar />
      <CountSection ticket={ticket} resolved={resolved} />
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <Cards
          fetchPromise={fetchPromise}
          ticket={ticket}
          setTicket={setTicket}
          handleFilterTicket={handleFilterTicket}
          setResolved={setResolved}
          resolved={resolved}
        />
      </Suspense>
      <ToastContainer></ToastContainer>
      <Footer />
    </>
  );
}

export default App;
