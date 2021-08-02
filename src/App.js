import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from '@Style/globalStyle';
import Layout from '@/layout/index';

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <Layout></Layout>
    </>
  );
};

App.propTypes = {};

export default App;
