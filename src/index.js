import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
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

  render() {
    const { count, text } = this.state;

    return (
      <div>
        <P>{count}</P>
        <p>Text is: {text}</p>
        <input onChange={(event) => this.setState({ text: event.target.value })} />
        <button disabled={!text} type="button" onClick={() => this.setState({ count: count + 1 })}>
          Add
        </button>
      </div>
    );
  }
}

function CounterV2(props) {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState("Hello");
  const [moreText, setMoreText] = useState("more");

  return (
    <div>
      <p>{count}</p>
      <p>{text}</p>
      {count >= 5 && <p>{moreText}</p>}
      <input onChange={(event) => setText(text + event.target.value)} />
      <button type="button" onClick={() => setCount(count + 1)}>
        Add
      </button>
    </div>
  );
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <React.Fragment>
    <CounterV1 count={5} />
    <hr />
    <CounterV2 count={9} />
    <hr />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
