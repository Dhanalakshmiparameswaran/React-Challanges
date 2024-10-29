import React, { Suspense, lazy } from 'react';
import Loading from './Loading';
import Lazy from '../Lazy';

const withLazyLoad = <T extends object>(importComponent: () => Promise<{ default: React.ComponentType<T> }>) => {
  const LazyComponent = lazy(importComponent);

  return function WrappedComponent(props: T) {
    return (
      <Suspense fallback={<Loading />}>
        <Lazy />
      </Suspense>
    );
  };
};

export default withLazyLoad;
