import React from "react";

import "./App.css";
import Title from "./components/Title";
import ContentBlock from "./components/ContentBlock";
import SelectLanguage from "./components/SelectLanguage";
import ErrorBoundary from "./components/ErrorBoundary";
import data from "./data.json";

class Timer extends React.Component {
  intervalId = null;
  state = {
    time: 10,
    obj: {
      timeInObj: 10,
      finish: false,
    },
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log("update time");
      this.setState(
        {
          time: this.state.time - 1,
          obj: { ...this.state.obj, finish: this.state.time - 1 < 1 },
        },
        () => {
          console.log(this.state);

          // if (this.state.time === 0) {
          //   window.location.assign("https://wikipedia.com");
          // }
        }
      );
    }, 1000);
  }

  componentWillUnmount() {
    this.intervalId = clearInterval(this.intervalId);
  }

  render() {
    // throw new Error("Priverstine klaida");

    return <div>{this.state.time}</div>;
  }
}

function ErrorMessage() {
  return <p>Ohhh nouzzz! 🙀</p>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "en",
      height: null,
      error: false,
    };

    console.log("Constructor");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("will mount");
  // }

  componentDidMount() {
    console.log("did mount");

    // this.setState({ lang: "lt" });
    // setTimeout(() => {
    //   this.setState({ lang: "lt" });
    // }, 3000);
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps", { props: this.props, nextProps });

  //   // if (nextProps.count === 20) {
  //   //   window.location.assign("https://google.com");
  //   // }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", { nextState, nextProps });
    if (nextProps.count % 2 === 1) {
      return false;
    }

    return true;
  }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log("componentWillUpdate", { nextProps, nextState });
  // }

  // static getDerivedStateFromProps(state, props) {
  //   console.log("getDerivedStateFromProps", props.count);

  //   if (props.count > 15) {
  //     return { height: props.count * 10 };
  //   }

  //   return state;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", { prevProps, prevState });
    console.log("DOM info", document.querySelector("#root > div > div.App > div").textContent);

    if (prevProps.count !== this.props.count) {
      const y = window.scrollY;

      window.scrollTo(y + 50);
    }

    // return "Hello World!!!! 🌎";
    return prevProps.count !== this.props.count;
  }

  componentDidUpdate(prevProps, prevState, dataFromSnapshot) {
    if (dataFromSnapshot) {
      // alert("there is new messages");
    }

    console.log("componentDidUpdate", { prevProps, prevState, dataFromSnapshot });
  }

  // componentDidCatch(error, info) {
  //   this.setState({ error: true });
  //   console.log("componentDidCatch", { error, info });
  // }

  onChange = (event) => {
    console.log("onChange", this);

    this.setState({ lang: event.target.value });
  };

  render() {
    const { lang, height, error } = this.state;
    const { count } = this.props;

    console.log("render", error);

    if (error) {
      return (
        <div className="App">
          <p>Ooops! Something went teribly wrong!</p>
        </div>
      );
    }

    return (
      <div className="App">
        <ErrorBoundary
          component={function () {
            return null;
          }}
        >
          {count < 10 && <Timer />}
        </ErrorBoundary>
        <header className="Header">
          <input type="text" placeholder="Randoms" />
          <SelectLanguage onChange={this.onChange} />
          <div style={{ height: height ? height : null }} className="Header__content">
            <Title level="9">Mindaugas J.</Title>
            <div className="black-box">{data[lang].header.title}</div>
          </div>
        </header>
        <div>Count: {count}</div>
        <main>
          <div className="row mt-5">
            <ContentBlock className="col-4" title={data[lang].personalSkills.title}>
              {data[lang].personalSkills.skills.map((skill, index) => {
                return (
                  <div key={index} className={`level--${skill.level}`}>
                    {skill.name}
                  </div>
                );
              })}
            </ContentBlock>
            <ContentBlock className="col-8" title={data[lang].about.title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
              Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse
              non augue egestas, dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at
              enim a, lacinia porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit
              lacus, tempus ac vehicula in, imperdiet dapibus elit. Nullam scelerisque euismod leo
              id vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
              justo libero. Vestibulum vitae mattis diam.
            </ContentBlock>
          </div>
          <div className="row mt-5">
            <ContentBlock className="col-4" title={data[lang].personalSkills.title}>
              {data[lang].personalSkills.skills.map((skill, index) => {
                return (
                  <div key={index} className={`level--${skill.level}`}>
                    {skill.name}
                  </div>
                );
              })}
            </ContentBlock>
            <ContentBlock className="col-4" title={data[lang].personalSkills.title}>
              {data[lang].personalSkills.skills.map((skill, index) => {
                return (
                  <div key={index} className={`level--${skill.level}`}>
                    {skill.name}
                  </div>
                );
              })}
            </ContentBlock>
            <ContentBlock className="col-4" title={data[lang].personalSkills.title}>
              {data[lang].personalSkills.skills.map((skill, index) => {
                return (
                  <div key={index} className={`level--${skill.level}`}>
                    {skill.name}
                  </div>
                );
              })}
            </ContentBlock>
          </div>
          <div className="row mt-5">
            <ContentBlock className="col-12" title="Work Experience">
              <p>Lorem ipsum</p>
            </ContentBlock>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
