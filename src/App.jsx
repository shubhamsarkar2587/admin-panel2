import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Kyc from './pages/kyc';
import Login from './pages/login';

const App = () => {
  return (
    <div className="App h-full w-full overflow-hidden">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/kyc" element={<Kyc />}></Route>
      </Routes>
    </div>
  );
}

export default App;
