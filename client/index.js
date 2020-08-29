import React from "react";
import { render } from "react-dom";
import axios from "axios";

class App extends React.Component {
  state = { users: [] };

  componentDidMount = async () => {
    try {
      const { data } = await axios.get("/api/users");
      this.setState({ users: data });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return <div>Hello there! </div>;
  }
}

render(<App />, document.getElementById("app"));
