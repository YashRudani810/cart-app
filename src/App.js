import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './pages/Cart';
import Home from './pages/Home';
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;