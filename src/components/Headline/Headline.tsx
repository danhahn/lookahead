import React from 'react';
import { StyledHeadline } from './styles';

export type Props = {
  /** children */
  children: React.ReactNode;
  /** is */
  as?: 'h1' | 'h2' | 'h3';
  maxWidth?: React.CSSProperties['maxWidth'];
};

const Headline: React.FC<Props> = ({ children, as, maxWidth }) => (
  <StyledHeadline as={as} maxWidth={maxWidth}>
    {children}
  </StyledHeadline>
);

export default Headline;
