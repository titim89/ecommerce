import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home prod="Conoce nuestros productos"/>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
