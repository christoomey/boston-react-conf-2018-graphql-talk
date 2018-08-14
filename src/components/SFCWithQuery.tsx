import * as React from 'react';

export interface SFCWithQuery<T> {
  component: React.SFC<T>;
  fragment: string;
}
