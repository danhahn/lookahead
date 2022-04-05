import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import { Helmet } from 'react-helmet';
import Layout from './components/layout/Layout';
import Navigation from './components/navigation/Navigation';
import styled from 'styled-components';
import Search from './components/search/Search';
import Konbon from './components/kanban/Kanbon';

const App = () => {
  const [user, setUser] = useState<string | undefined>(undefined);

  return (
    <>
      <Helmet>
        <title>🏈 My Title</title>
      </Helmet>
      <GlobalStyle />
      <Layout>
        <Navigation active={!!user} onClick={() => setUser('')} />
        <Branding>GitKanban by CodeSandbox</Branding>
        <Wrapper>{user ? <Konbon user={user} /> : <Search setUser={setUser} />}</Wrapper>
      </Layout>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 100px;
`;

const Branding = styled.p`
  font-size: 12px;
  margin-top: 8px;
  max-width: 100px;
  line-height: 18.4px;
`;

export default App;
