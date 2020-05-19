import React from "react";
import "./App.css";

import Title from "./components/Title";
import ContentBlock from "./components/ContentBlock";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="Header__content">
          <Title level="9">Sophie Alpert</Title>
          <div className="black-box">Programmer</div>
        </div>
      </header>
      <main>
        <ContentBlock className="col-12" title="About Me">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
          Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non
          augue egestas, dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at enim a,
          lacinia porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit lacus, tempus
          ac vehicula in, imperdiet dapibus elit. Nullam scelerisque euismod leo id vestibulum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
          Vestibulum vitae mattis diam.
        </ContentBlock>
      </main>
    </div>
  );
}

export default App;
