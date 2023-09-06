import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/card/ItemListContainer';
import ItemDetailContainer from './components/card/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;