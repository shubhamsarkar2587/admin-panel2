import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Login from './pages/login';

const App = () => {
  return (
    <div className="App h-full w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
