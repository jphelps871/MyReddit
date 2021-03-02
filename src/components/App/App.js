import React, { useState } from "react";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import "./App.css";

const App = (props) => {
  const [searchReddit, setSearchRedit] = useState("popular");
  const [findName, setFindName] = useState({
    Best: true,
    Hot: false,
    New: false,
    Top: false,
    Rising: false,
  });

  const searchFor = ({ target }) => {
    setSearchRedit(target.value);
  };

  const handleClick = (event) => {
    // loop through and turn all to false
    for (var i in findName) findName[i] = false;
    // Switch one to true
    setFindName({ ...findName, [event.target.name]: true });
  };

  return (
    <div className="App">
      <Header onChange={searchFor} />
      <Filter handleClick={handleClick} findName={findName} />
      <main>
        <Cards searchReddit={searchReddit} />
      </main>
    </div>
  );
};

export default App;
