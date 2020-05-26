import React from "react";

class ErrorBoundary extends React.Component {
  state = { error: false };

  componentDidCatch(error, info) {
    console.log("ErrorBoundary", { error, info });
    this.setState({ error: true });
  }

  render() {
    const { children, component: Component } = this.props;

    if (this.state.error) {
      return Component ? (
        <Component />
      ) : (
        <div>
          <p>Oops! Something went wrong!</p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
