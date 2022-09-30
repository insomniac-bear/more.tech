import logo from './logo.svg';
import './App.css';
import { UserStatusLogo } from './components/UserStatusLogo/UserStatusLogo';
import { MainLogo } from './components/MainLogo/MainLogo';
import { UserMenuItem } from './components/UserMenuItem/UserMenuItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserStatusLogo userStatus="gold" width={100} />
        <MainLogo width={300} />
        <UserMenuItem
          name='ВТБ Store'
          url='/'
          isActive={true}
        />
        <UserMenuItem
          name='ВТБ Store'
          url='/'
          isActive={false}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
