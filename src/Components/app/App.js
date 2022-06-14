
import './App.css';
import Nav from '../nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import WatchView from '../watches/Showcase';
import Login from '../pages/login';
import Register from '../pages/register';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/showcase" element={<WatchView />} />
        <Route path="/users/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        
        <Route path="/users/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
