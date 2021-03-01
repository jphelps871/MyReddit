import React, { useState } from "react";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import "./App.css";

const App = (props) => {
  const [searchReddit, setSearchRedit] = useState("popular");

  const searchFor = ({ target }) => {
    setSearchRedit(target.value);
  };

  return (
    <div className="App">
      <Header onChange={searchFor} />
      <Filter />
      <main>
        <Cards searchReddit={searchReddit} />
      </main>
    </div>
  );
};

export default App;
