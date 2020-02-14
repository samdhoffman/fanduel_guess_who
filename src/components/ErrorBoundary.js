import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }
  
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-msg">
          <h1>Something went wrong.</h1>
          <h4>Please check your internet connection or try again later.</h4>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;