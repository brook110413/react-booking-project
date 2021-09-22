import React from 'react';
import styled from 'styled-components';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import GlobalStyle from '@Style/globalStyle';
import Layout from '@/layout/index';

import Home from '@Pages/home';
import SearchResult from '@Pages/searchResult';
import Detail from '@Pages/detail';
import Reserve from '@Pages/reserve';

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Layout>
          <StyledMain>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/searchResult" component={SearchResult} />
              <Route path="/detail" component={Detail} />
              <Route path="/reserve" component={Reserve} />
              <Redirect path="*" to="/home" />
            </Switch>
          </StyledMain>
        </Layout>
      </HashRouter>
    </>
  );
};

const StyledMain = styled.div`
  flex: 1;
`;

export default App;
