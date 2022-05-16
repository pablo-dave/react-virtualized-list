import React, { Fragment, PureComponent } from "react";
import { name } from "faker";
import ExampleWrapper from "./ExampleWrapper";

class App extends PureComponent {
  state = {
    hasNextPage: true,
    isNextPageLoading: false,
    items: []
  };

  _loadNextPage = (...args) => {
    console.log("loadNextPage", ...args);
    this.setState({ isNextPageLoading: true }, () => {
      setTimeout(() => {
        this.setState(state => ({
          hasNextPage: state.items.length < 100,
          isNextPageLoading: false,
          items: [...state.items].concat(
            new Array(10).fill(true).map(() => ({ name: name.findName() }))
          )
        }));
      }, 2500);
    });
  };

  render() {
    const { hasNextPage, isNextPageLoading, items } = this.state;

    return (
      <Fragment>
        <p className="Note">
          This demo app shows how to create a list that automatically loads the
          next "page" of data when a user scrolls close to the end of the list.
        </p>

        <ExampleWrapper
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          items={items}
          loadNextPage={this._loadNextPage}
        />

        <p className="Note">
          Check out the documentation to learn more:
          <br />
          <a href="https://github.com/bvaughn/react-window-infinite-loader#documentation">
            github.com/bvaughn/react-window-infinite-loader
          </a>
        </p>
      </Fragment>
    );
  }
}

export default App;
