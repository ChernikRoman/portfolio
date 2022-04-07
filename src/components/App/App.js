import './App.css';
import Menu from '../Menu/Menu'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Menu />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
