import logo from './logo.svg';
import './App.css';
import { UserStatusLogo } from './components/UserStatusLogo/UserStatusLogo';
import { MainLogo } from './components/MainLogo/MainLogo';
import { UserAvatar } from './components/UserAvatar/UserAvatar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserStatusLogo userStatus="gold" width={100} />
        <MainLogo width={300} />
        <div style={{ width: '228px', display: 'flex', height: '308px' }}>
          <UserAvatar
            alt="Фотография"
            src="https://images.unsplash.com/photo-1664737426331-a1cde6c831d5?ixlib=rb-1.2.1&
            ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80"
          />
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.tsx</code>
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
