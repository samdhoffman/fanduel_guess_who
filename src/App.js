import React from 'react';
import './App.scss';
import Layout from './components/layout/Layout';
import PlayerGame from './components/PlayerGame';

function App() {
  return (
    <div className="App" data-test="App">
      <Layout>
        <PlayerGame data-test="PlayerGame" />
      </Layout>
    </div>
  );
}

export default App;
