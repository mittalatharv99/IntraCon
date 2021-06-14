import React from "react";
import Header1 from "./Header1";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header1 backButton="/chat" />
            <ChatScreen/>
          </Route>
          <Route path="/chat">
            <Header1 backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header1 />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
