import React from "react";
// import SVG from "react-inlinesvg";
// import { FaBeer } from "react-icons/fa";

import "./App.css";
import Title from "./components/Title";
import ContentBlock from "./components/ContentBlock";
import SelectLanguage from "./components/SelectLanguage";
import data from "./data.json";

// import devTo from "./images/social/dev-to.svg";

// let username = null;
// let password = null;

// let lang = "en";

function App() {
  const [lang, setLang] = React.useState("lt");

  const onChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <div className="App">
      <header className="Header">
        <SelectLanguage onChange={onChange} />
        <div className="Header__content">
          <Title level="9">Mindaugas J.</Title>
          <div className="black-box">{data[lang].header.title}</div>
        </div>
      </header>
      <main>
        {/* <div className="Social__icon">
          <SVG className="SVG" src={devTo} />
        </div> */}
        <div className="row mt-5">
          <ContentBlock className="col-4" title={data[lang].personalSkills.title}>
            {data[lang].personalSkills.skills.map((skill) => {
              return <div className={`level--${skill.level}`}>{skill.name}</div>;
            })}
          </ContentBlock>
          <ContentBlock className="col-8" title={data[lang].about.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
            Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non
            augue egestas, dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at enim a,
            lacinia porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit lacus,
            tempus ac vehicula in, imperdiet dapibus elit. Nullam scelerisque euismod leo id
            vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo
            libero. Vestibulum vitae mattis diam.
          </ContentBlock>
        </div>
        <div className="row mt-5">
          <ContentBlock className="col-4" title={data[lang].personalSkills.title}>
            {data[lang].personalSkills.skills.map((skill) => {
              return <div className={`level--${skill.level}`}>{skill.name}</div>;
            })}
          </ContentBlock>
          <ContentBlock className="col-4" title={data[lang].personalSkills.title}>
            {data[lang].personalSkills.skills.map((skill) => {
              return <div className={`level--${skill.level}`}>{skill.name}</div>;
            })}
          </ContentBlock>
          <ContentBlock className="col-4" title={data[lang].personalSkills.title}>
            {data[lang].personalSkills.skills.map((skill) => {
              return <div className={`level--${skill.level}`}>{skill.name}</div>;
            })}
          </ContentBlock>
        </div>
        <div className="row mt-5">
          <ContentBlock className="col-12" title="Work Experience">
            <p>Lorem ipsum</p>
          </ContentBlock>
        </div>

        {/* <div className="Social__icon">
          <FaBeer />
        </div> */}
      </main>
    </div>
  );
}

export default App;

// const onSubmit = (event) => {
//   event.preventDefault();
//   // console.dir(event.target);
//   alert(`username: ${username} and password: ${password}`);
// };

/* <div style={{ margin: "20px" }}>
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
      </div> */
