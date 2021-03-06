import React, { Component } from 'react';
import Layout from './components/Layout'
import BurguerBuilder from './containers/BurguerBuilder'

class App extends Component {
  render() {
    return (
      <Layout>
        <BurguerBuilder />
      </Layout>
    );
  }
}

export default App;
