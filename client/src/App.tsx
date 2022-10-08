import './App.css';
import Header from './components/Header/Header';
import { user } from './utils/mockData/userMockData';
import UserCard from './components/UserCard/UserCard';

function App() {
  return (
    <div className="App">
      <Header />
      <UserCard style={{ margin: '0 auto' }} userData={user} />
    </div>
  );
}

export default App;
