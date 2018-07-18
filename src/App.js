import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import JSON from "./db.json";

class App extends Component {
  state = {
    title: "props comming from APP",
    db: JSON
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <header>
              <ul>
                <li>
                  <Link exact to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
              </ul>
            </header>
            <hr />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/posts" component={Posts} />
              <Route
                render={function() {
                  return (
                    <p>
                      {" "}
                      Not Found
                      <br />
                      <Link className="btn nav-link btn-success" to="/">
                        Back to log and Reg
                      </Link>
                    </p>
                  );
                }}
              />
            </Switch>
          </div>
        </BrowserRouter>
        <Posts db={this.state.db} post={this.state.title} />
      </div>
    );
  }
}
export default App;
