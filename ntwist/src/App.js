import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import { useEffect, useState } from "react";
import Maincontent from "./Components/Maincontent/Maincontent";
import Footer from "./Components/Footer/Footer";

let data = [
  {
    id: 1,
    title: "Mine-To-Mill-To-Mine Optimization",
    detail:
      "NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.",
    img: "https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg",
  },
  {
    id: 2,
    title: "Sustainability",
    detail:
      "Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.",
    img: "https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg",
  },
  {
    id: 3,
    title: "Mineral Processing",
    detail:
      "NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.",
    img: "https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg",
  },
  {
    id: 4,
    title: "Oil & Gas",
    detail:
      "Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.",
    img: "https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png",
  },
];

function App() {
  const [load, setLoad] = useState(true);
  console.log("data:", data);
  useEffect(() => {
    setTimeout(() => {
      setLoad(!load);
    }, 3000);
  }, []);


  return (
    <div className="App">
      {load ? (
        <div className="loader">
          {" "}
          <img
            src="https://imgs.search.brave.com/0bdmj6YLuwTLia_hddTcLcTISU2i6VYm2F7ASoIQNSw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/RlhfOUFjWWVHb2tB/QUFBai9sb2FkZXIt/bG9hZGluZy5naWY.gif"
            alt="loader"
          />{" "}
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Maincontent data={data}/>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
