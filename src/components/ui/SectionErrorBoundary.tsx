import React, { type ErrorInfo, type ReactNode } from 'react';

type SectionErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type SectionErrorBoundaryState = {
  hasError: boolean;
};

export class SectionErrorBoundary extends React.Component<
  SectionErrorBoundaryProps,
  SectionErrorBoundaryState
> {
  declare props: SectionErrorBoundaryProps;
  state: SectionErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): SectionErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Section render failed:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }

    return this.props.children;
  }
}
