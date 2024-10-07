import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import NavBar from './Components/NavBar';
import ChampionDetailsPage from './Pages/ChampionDetailsPage';

function App() {


  return <>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path='/champion/:id' element={<ChampionDetailsPage></ChampionDetailsPage>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
