import './App.css'
import Navbar from "./components/navbar/Navbar"
import Home from "./components/Home/Home"
import Search from "./components/Search/Search"
import Support from "./components/Support/Support"
import Info from "./components/Info/Info"
import Any from "./components/Any/Any"
import Travellers from "./components/Travellers/Travellers"
import Subscribers from "./components/Subscribers/Subscribers"
import Footer from "./components/Footer/Footer"

function App() {

  return (
   <div className="app">
    <Navbar/>
    <Home/>
    <Search/>
    <Support/>
    <Info/>
    <Any/>
    <Travellers/>
    <Subscribers/>
    <Footer/>
   </div>
  )
}

export default App
