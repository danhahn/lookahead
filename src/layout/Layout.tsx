import React from 'react';
import { StyledLayout } from './styles';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
