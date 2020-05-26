import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import * as serviceWorker from "./serviceWorker";

function P({ children }) {
  return <p>{children}</p>;
}

class CounterV1 extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: this.props.count || 0,
  //     text: "",
  //   };
  // }

  state = {
    count: this.props.count || 0,
    text: "",
  };

  onClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    const { count, text } = this.state;

    return (
      <div>
        <P>{count}</P>
        <p>Text is: {text}</p>
        <input onChange={(event) => this.setState({ text: event.target.value })} />
        <button type="button" onClick={this.onClick}>
          Add
        </button>
      </div>
    );
  }
}

function CounterV2({ count, setCount }) {
  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Add
      </button>
    </div>
  );
}

function Link(props) {
  return <a {...props}>{props.children}</a>;
}

function WholeApp() {
  const [count, setCount] = useState(9);

  return (
    <div style={{ padding: "40px" }}>
      <Link href="https://wikipedia.com" target="_blank" whatever="bla bla">
        Awesome link
      </Link>
      <CounterV1 count={5} />
      <hr />
      <CounterV2 setCount={setCount} count={count} />
      <hr />
      <ErrorBoundary
        component={() => (
          <div>
            <p>Whole App Crashed! 🙀</p>
          </div>
        )}
      >
        <App count={count} />
      </ErrorBoundary>
    </div>
  );
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <WholeApp />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
