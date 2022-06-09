
import './App.css';
import Nav from '../nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Cart from '../cart/Cart';
import WatchView from '../watches/WatchView';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/view" element={<WatchView />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
