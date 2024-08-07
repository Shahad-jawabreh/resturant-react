import './App.css'
import Navbar from './componant/navbar/Navbar.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Resturant from './componant/resturant/Resturant.jsx'
import Product from './componant/product/Product.jsx'
import Home from './componant/home/Home'
import Notfound from './componant/notfound/Notfound'
import Pizza from './componant/resturant/Pizza.jsx'
import Salad from './componant/resturant/Salad'
import Onion from './componant/resturant/Onion'

function App() {

  return (
    <BrowserRouter>
     <Navbar/>
        <Routes>
            <Route path='/resturant' element={<Resturant/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Notfound/>}/>
            <Route path='/Pizza' element={<Pizza/>}/>
            <Route path='/Onion' element={<Onion/>}/>
            <Route path='/Salad' element={<Salad/>}/>




        </Routes>
    </BrowserRouter>
   
  )
}

export default App
