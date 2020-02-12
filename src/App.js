import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Players from './components/Players';

function App() {
  return (
    <div className="App">
      <Layout>
        <Players />
      </Layout>
    </div>
  );
}

export default App;
