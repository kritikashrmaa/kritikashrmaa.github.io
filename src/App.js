
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './routes/Blogs';
import Events from './routes/Events';
import Jobs from './routes/Jobs';
import News from './routes/News';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Blogs/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/news' element={<News/>}/>
    </Routes>

    </>
    
  );
}

export default App;
