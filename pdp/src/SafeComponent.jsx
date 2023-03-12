import React from "react";

export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error, "get");
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log(error, "catch COmponent");
  }

  render() {
    if (this.state.hasError) {
      return <div>Something Went Wrong.</div>;
    }
    return this.props.children;
  }
}
