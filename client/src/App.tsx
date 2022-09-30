import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserStatusLogo } from './components/UserStatusLogo/UserStatusLogo';
import { MainLogo } from './components/MainLogo/MainLogo';
import { UserFullName } from './components/UserFullName/UserFullName';
import { user } from './utils/mockData/userMockData';

function App() {
  const { name, surname, patronymic } = user.personalData;

  return (
    <div className="App">
      <header className="App-header">
        <UserStatusLogo userStatus="gold" width={100} />
        <MainLogo width={300} />
        <UserFullName nameFields={{ name, surname, patronymic }} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
