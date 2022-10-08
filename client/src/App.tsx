import './App.css';
import Header from './components/Header/Header';
import { user } from './utils/mockData/userMockData';
import ProgressBar from './components/ProgressBar/ProgressBar';
import UserCard from './components/UserCard/UserCard';
import ControlPanel from './components/ControlPanel/ControlPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <ProgressBar progress={60} skill="soft" />
      <ProgressBar progress={40} skill="hard" />
      <UserCard style={{ margin: '0 auto' }} userData={user} />
      <ControlPanel />
    </div>
  );
}

export default App;
