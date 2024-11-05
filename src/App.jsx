import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import NavBar from './Components/NavBar';
import ChampionDetailsPage from './Pages/ChampionDetailsPage';
import ItemPage from './Pages/ItemPage';
import ItemDetailsPage from './Pages/ItemDetailsPage';

function App() {

  return <>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path='/champion/:id' element={<ChampionDetailsPage></ChampionDetailsPage>}/>
        <Route path='/item' element={<ItemPage></ItemPage>}/>
        <Route path='/item/:name' element={<ItemDetailsPage></ItemDetailsPage>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
