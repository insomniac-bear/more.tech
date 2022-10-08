import './App.css';
import Header from './components/Header/Header';
import StatusBar from './components/StatusBar/StatusBar';
import Title from './components/Title/Title';
import UserAvatar from './components/UserAvatar/UserAvatar';
import UserName from './components/UserName/UserName';
import UserMenuNavLink from './components/UserMenuNavLink/UserMenuNavLink';
import UserPersonalDataTable from './components/UserPersonalDataTable/UserPersonalDataTable';
import UserStatusLogo from './components/UserStatusLogo/UserStatusLogo';
import { user } from './utils/mockData/userMockData';
import ProgressBar from './components/ProgressBar/ProgressBar';

function App() {
  const {
    name, surname, image, personalData,
  } = user;

  return (
    <div className="App">
      <Header />
      <ProgressBar progress={50} />
      <div className="App-header">
        <div style={{ width: '500px', height: '500px' }}>
          <UserPersonalDataTable data={personalData} />
        </div>

        <UserStatusLogo userStatus="gold" width={100} />

        {/* Завернут в див чтобы ограничить размер */}
        <div style={{ width: '276px', display: 'flex', height: '370px' }}>
          <UserAvatar alt={`${name} ${surname}`} src={image} />
        </div>

        <StatusBar />
        <UserMenuNavLink
          title="ВТБ Store"
          to="/"
        />
        <Title tag="h3" size="s">Я маленький заголовок третьего уровня</Title>
        <UserName nameFields={{ name, surname }} />
        <UserMenuNavLink title="ВТБ Store" to="/" />
        <Title tag="h3" size="s">
          Я маленький заголовок третьего уровня
        </Title>
        <Title>Я дефолтный заголовок второго уровня среднего размера</Title>
        <Title tag="h2" size="l">
          Я заголовок второго уровня большого размера
        </Title>

        <UserMenuNavLink title="ВТБ Store" to="/" />
      </div>
    </div>
  );
}

export default App;
