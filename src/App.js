import React from "react";
// import SVG from "react-inlinesvg";
import { FaBeer } from "react-icons/fa";

import "./App.css";
import Title from "./components/Title";
import ContentBlock from "./components/ContentBlock";

// import devTo from "./images/social/dev-to.svg";

let username = null;
let password = null;

function App() {
  const onSubmit = (event) => {
    event.preventDefault();

    // console.dir(event.target);
    alert(`username: ${username} and password: ${password}`);
  };

  return (
    <div className="App">
      <header className="Header">
        <div className="Header__content">
          <Title level="9">Sophie Alpert</Title>
          <div className="black-box">Programmer</div>
        </div>
      </header>
      <div style={{ margin: "20px" }}>
        <form onSubmit={onSubmit}>
          <input
            onChange={(event) => {
              username = event.target.value;
            }}
            type="text"
            placeholder="username"
          />
          <input
            onChange={(event) => {
              password = event.target.value;
            }}
            type="password"
            placeholder="password"
          />
          <button disabled={!username || !password} type="submit">
            Click Me
          </button>
        </form>
      </div>
      <main>
        {/* <div className="Social__icon">
          <SVG className="SVG" src={devTo} />
        </div> */}
        <ContentBlock className="col-12" title="About Me">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
          Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non
          augue egestas, dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at enim a,
          lacinia porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit lacus, tempus
          ac vehicula in, imperdiet dapibus elit. Nullam scelerisque euismod leo id vestibulum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
          Vestibulum vitae mattis diam.
        </ContentBlock>
        <div className="Social__icon">
          <FaBeer />
        </div>
      </main>
    </div>
  );
}

export default App;
