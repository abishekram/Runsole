
import React from "react";
import Page from "./components/Page";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <Page></Page>
    );
  }
}

export default App;
