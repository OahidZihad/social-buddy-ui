import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import PostDetails from "./Components/PostDetails/PostDetails";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { useState } from "react";

function App() {
  const [likeColor, setLikeColor] = useState("");
  const handleLike = () => {
    const color = likeColor ? "" : "secondary";
    setLikeColor(color);
  };
  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpIcon onClick={handleLike} color={likeColor}></ThumbUpIcon>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/id/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
