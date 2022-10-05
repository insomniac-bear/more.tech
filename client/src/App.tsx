import logo from './logo.svg';
import './App.css';
import { UserStatusLogo } from './components/UserStatusLogo/UserStatusLogo';
import { MainLogo } from './components/MainLogo/MainLogo';
import { UserAvatar } from './components/UserAvatar/UserAvatar';
import { UserMenuItem } from './components/UserMenuItem/UserMenuItem';

import { UserFullName } from './components/UserFullName/UserFullName';
import { user } from './utils/mockData/userMockData';
import { Title } from './components/Title/Title';
import { UserPersonalDataTable } from './components/UserPersonalDataTable/UserPersonalDataTable';
import { ExitButton } from './components/ExitButton/ExitButton';

function App() {
  const {
    name, surname, patronymic, image, personalData,
  } = user;

  return (
    <div className="App">
      <header className="App-header">
        <UserPersonalDataTable data={personalData} />
        <UserStatusLogo userStatus="gold" width={100} />
        <ExitButton />
        <MainLogo width={300} />

        <div style={{ width: '228px', display: 'flex', height: '308px' }}>
          <UserAvatar
            alt={`${name} ${surname} ${patronymic}`}
            src={image}
          />
        </div>
        <Title tag="h3" size="s">Я маленький заголовок третьего уровня</Title>
        <Title>Я дефолтный заголовок второго уровня среднего размера</Title>
        <Title tag="h2" size="l">Я заголовок второго уровня большого размера</Title>
        <UserMenuItem
          name="ВТБ Store"
          url="/"
          isActive
        />
        <UserMenuItem
          name="ВТБ Store"
          url="/"
          isActive={false}
        />

        <UserFullName nameFields={{ name, surname, patronymic }} />
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
