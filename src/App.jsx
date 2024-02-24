
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop'
import ItemsDetails from './Components/Shop/ItemsDetails/ItemsDetails'

import { Outlet } from 'react-router-dom'


function App() {
  

  return (
    <>
       <Navbar/>

       <Outlet/>
      
       <Footer/>
    </>
  )
}

export default App
