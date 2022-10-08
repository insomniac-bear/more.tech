import './App.css';
import Header from './components/Header/Header';
import { user } from './utils/mockData/userMockData';
import UserCard from './components/UserCard/UserCard';
import ControlPanel from './components/ControlPanel/ControlPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <UserCard style={{ margin: '0 auto' }} userData={user} />
      <ControlPanel />
    </div>
  );
}

export default App;
