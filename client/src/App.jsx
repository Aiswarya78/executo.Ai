import { Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/Landing/Landing';
import Login from '../src/pages/Login/Login';
import Userdetails from '../src/pages/Userdetails/Userdatails';
import Home from './pages/Home/Home';
import Addtask from './pages/Addtask/Addtask';
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/userdetails' element={<Userdetails />} />
      <Route path='/home' element={<Home />} />
      <Route path='/addtask' element={<Addtask />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
    
  );
}


export default App;