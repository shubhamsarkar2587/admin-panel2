import { Routes, Route } from 'react-router-dom';
import Navbar from './containers/navbar/Navbar';
import Sidebar from './containers/sidebar/Sidebar';
import Homepage from './pages/homepage';
import Kyc from './pages/kyc';
import Login from './pages/login';

const App = () => {
  return (
    <div className="App h-full w-full overflow-hidden">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <div>
        <Navbar />
        <div className="flex h-full">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/kyc" element={<Kyc />}></Route>
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
