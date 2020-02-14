import React from 'react';
import './App.scss';
import Layout from './components/layout/Layout';
import PlayerGame from './components/PlayerGame';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App" data-test="App">
      <Layout>
        <ErrorBoundary>
          <PlayerGame data-test="PlayerGame" />
        </ErrorBoundary>
      </Layout>
    </div>
  );
}

export default App;
