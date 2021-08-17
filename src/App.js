import React from 'react';
import styled from 'styled-components';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import GlobalStyle from '@Style/globalStyle';
import Layout from '@/layout/index';

import Home from '@Pages/home';
import SearchResult from '@Pages/searchResult';
import Detail from '@Pages/detail';

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Layout>
          <StyledMain>
            <Switch>
              <Redirect exact path="/" to="/home" />
              <Route path="/home" component={Home} />
              <Route path="/searchResult" component={SearchResult} />
              <Route path="/detail" component={Detail} />
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
