import './App.css';
import { UserStatusLogo } from './components/UserStatusLogo/UserStatusLogo';
import { MainLogo } from './components/MainLogo/MainLogo';
import { UserAvatar } from './components/UserAvatar/UserAvatar';

import { UserFullName } from './components/UserFullName/UserFullName';
import { user } from './utils/mockData/userMockData';
import UserMenu from './components/UserMenu/UserMenu';
import { userMenuMockData } from './utils/mockData/userMenuMockData';
import UserMenuNavLink from './components/UserMenuNavLink/UserMenuNavLink';

function App() {
  const {
    name, surname, patronymic, image,
  } = user;

  return (
    <div className="App">
      <header className="App-header">
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
