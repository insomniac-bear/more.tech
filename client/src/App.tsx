import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import UserAvatar from './components/UserAvatar/UserAvatar';
import UserFullName from './components/UserFullName/UserFullName';
import UserMenuNavLink from './components/UserMenuNavLink/UserMenuNavLink';
import UserPersonalDataTable from './components/UserPersonalDataTable/UserPersonalDataTable';
import UserStatusLogo from './components/UserStatusLogo/UserStatusLogo';
import { user } from './utils/mockData/userMockData';

function App() {
  const {
    name, surname, patronymic, image, personalData,
  } = user;

  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <UserPersonalDataTable data={personalData} />
        <UserStatusLogo userStatus="gold" width={100} />

        <div style={{ width: '228px', display: 'flex', height: '308px' }}>
          <UserAvatar
            alt={`${name} ${surname} ${patronymic}`}
            src={image}
          />
        </div>

        <UserMenuNavLink
          title="ВТБ Store"
          to="/"
        />
        <Title tag="h3" size="s">Я маленький заголовок третьего уровня</Title>
        <Title>Я дефолтный заголовок второго уровня среднего размера</Title>
        <Title tag="h2" size="l">Я заголовок второго уровня большого размера</Title>

        <UserMenuNavLink
          title="ВТБ Store"
          to="/"
        />

        <UserFullName nameFields={{ name, surname, patronymic }} />
      </div>
    </div>
  );
}

export default App;
