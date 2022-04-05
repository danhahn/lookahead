import React from 'react';
import GlobalStyle from './globalStyles';
import { Helmet } from 'react-helmet';
import Headline from './components/Headline/Headline';
import Select from './select/Select';
import Layout from './layout/Layout';
import Navigation from './navigation/Navigation';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Helmet>
        <title>🏈 My Title</title>
      </Helmet>
      <GlobalStyle />
      <Layout>
        <Navigation active={false} />
        <Branding>GitKanban by CodeSandbox</Branding>
        <Wrapper>
          <Headline maxWidth="430px">
            Search for a user or organization to find a repository.
          </Headline>
          <Select items={['item', 'item2']} />
        </Wrapper>
      </Layout>
    </>
  );
}

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
