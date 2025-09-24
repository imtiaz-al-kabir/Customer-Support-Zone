import { Suspense, useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards";
import CountSection from "./components/countSection/countSection";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const fetchData = async () => {
    const result = await fetch("/ticket.json");
    return result.json();
  };
  const fetchPromise = fetchData();
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <CountSection />
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <Cards fetchPromise={fetchPromise} />
      </Suspense>

      <Footer/>
    </>
  );
}

export default App;
