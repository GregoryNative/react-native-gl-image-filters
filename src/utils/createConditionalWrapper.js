import React from 'react';

import NoopFilter from '../filters/Noop';

const ConditionalWrapper = ({ condition, wrapper, children }) => 
  condition ? wrapper(children) : <NoopFilter>{children}</NoopFilter>

export const createConditionalWrapper = ({ FilterComponent, condition, ...props }) => {
  return ({ children }) => (
    <ConditionalWrapper
      condition={condition}
      wrapper={(children) => <FilterComponent {...props}>{children}</FilterComponent>}
    >
      {children}
    </ConditionalWrapper>
  );
};
