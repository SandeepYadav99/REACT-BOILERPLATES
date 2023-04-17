import React from 'react';
interface ErrorProps {
  children: any;
}

interface ErrorStates {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<ErrorProps, ErrorStates> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
