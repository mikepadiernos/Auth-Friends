import React, { useState } from "react";
// import axios from 'axios';

// IMPORT ASSETS
// import "./css/App.css";

// IMPORT CONTEXT: SmurfContext
import FriendsContext from "./contexts/FriendsContext";

function App() {

  const [friends, setFriends] = useState([]);

  return (
    <FriendsContext.Provider value={{friends, setFriends}} >
      <div className="App">
        <div className="container">
          <header id="header" className="header">
            <h1>
              Friends!
            </h1>
          </header>
          <main id="main-content" className="main-content">

          </main>
        </div>
      </div>
    </FriendsContext.Provider>
  );

}

export default App;
