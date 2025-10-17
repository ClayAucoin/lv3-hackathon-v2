import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import data from "./data/enriched-collection.json";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  function goToHome() {
    setCurrentPage("home");
  }

  let pageContent = <Home data={data} />;

  if (currentPage === "home") {
    pageContent = <Home data={data} />;
  }

  return (
    <>
      <button type="button" onClick={goToHome}>
        Home
      </button>
      {pageContent}
    </>
  );
}

export default App;
