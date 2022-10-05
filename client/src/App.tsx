import './App.css';
import { UserStatusLogo } from './components/UserStatusLogo/UserStatusLogo';
import { MainLogo } from './components/MainLogo/MainLogo';
import { UserAvatar } from './components/UserAvatar/UserAvatar';

import { UserFullName } from './components/UserFullName/UserFullName';
import { user } from './utils/mockData/userMockData';
import UserMenu from './components/UserMenu/UserMenu';
import { userMenuMockData } from './utils/mockData/userMenuMockData';
import UserMenuNavLink from './components/UserMenuNavLink/UserMenuNavLink';
import { Title } from './components/Title/Title';
import { UserPersonalDataTable } from './components/UserPersonalDataTable/UserPersonalDataTable';

function App() {
  const {
    name, surname, patronymic, image, personalData,
  } = user;

  return (
    <div className="App">
      <header className="App-header">
        <UserPersonalDataTable data={personalData} />
        <UserStatusLogo userStatus="gold" width={100} />
        <MainLogo width={300} />

        <UserMenu menuData={userMenuMockData} />

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
      </header>
    </div>
  );
}

export default App;
