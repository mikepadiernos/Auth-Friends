import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import axios from 'axios';

// IMPORT ASSETS
// import "./css/App.css";

// IMPORT CONTEXT: SmurfContext
import FriendsContext from "./contexts/FriendsContext";

// IMPORT UTILITIES
import ProtectedRoute from "./utilities/ProtectedRoute";

// IMPORT APP COMPONENTS
import Header         from "./components/Layout/Header";
import EntryLogin     from "./components/Entry/EntryLogin";
import FriendsList    from "./components/Friends/FriendsList";

function App() {

  const [friends, setFriends] = useState([]);

  return (
    <Router>
      <FriendsContext.Provider value={{friends, setFriends}} >
        <div className="App">
          <div className="container">
            <Header />
            <main id="main-content" className="main-content">
              <ProtectedRoute exact path="/friends" component={FriendsList} />
              <EntryLogin path="/" component={EntryLogin} />
              {/*<ProtectedRoute exact path="/friends/edit" component={FriendsEdit} />*/}
            </main>
          </div>
        </div>
      </FriendsContext.Provider>
    </Router>
  );

}

export default App;
