import './App.css';
import Header from './components/Header/Header';
import { user } from './utils/mockData/userMockData';
import ProgressBar from './components/ProgressBar/ProgressBar';
import UserCard from './components/UserCard/UserCard';

function App() {
  return (
    <div className="App">
      <Header />
      <ProgressBar progress={50} skill="soft" />
      <ProgressBar progress={50} skill="hard" />
      <UserCard style={{ margin: '0 auto' }} userData={user} />
    </div>
  );
}

export default App;
