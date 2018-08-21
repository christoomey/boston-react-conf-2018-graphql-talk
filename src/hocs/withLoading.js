import React from 'react';

const withLoading = WrappedComponent => {
  const WithLoading = props =>
    props.data && props.data.loading ? (
      <div>Loading...</div>
    ) : (
      <WrappedComponent {...props} />
    );

  setDisplayName(WithLoading, WrappedComponent);

  return WithLoading;
};

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName ||
  WrappedComponent.name ||
  'Component';

const setDisplayName = (hoc, WrappedComponent) => {
  // eslint-disable-next-line no-param-reassign
  hoc.displayName = `${hoc.name}(${getDisplayName(
    WrappedComponent
  )})`;
};

export default withLoading;
