import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import PlayerGame from './components/PlayerGame';

function App() {
  return (
    <div className="App">
      <Layout>
        <PlayerGame />
      </Layout>
    </div>
  );
}

export default App;
