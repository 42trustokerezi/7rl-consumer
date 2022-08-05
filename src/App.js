import './App.css';
import Header from './Components/NavigationBar/Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Footer from './Components/NavigationBar/Footer';
import SimplyWell from './Pages/7rlSimplyWell/7rlSimplyWell';
import StiGold from './Pages/7rlSti-Gold/StiGold';
import XtraWellMen from './Pages/7rlXtraWellMen/XtraWellMen';
import XtraWellWomen from './Pages/7rlXtraWellWomen/XtraWellWomen';
import VelvetiEssential from './Pages/VelvetiEssential/VelvetiEssential';
import VelvetiGold from './Pages/VelvetiGold/VelvetiGold';
import Raspicare from './Pages/RaspiCare/Raspicare';
import BuyTestModal from './Components/Modal/BuyTestModal';
import ProductsList from './Pages/Products/ProductsList';
import LocationModal from './Components/Modal/LocationModal';
import Login from './Pages/Login/Login';
import Mobile from './Components/NavigationBar/MobileNav/Mobile';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* General Routes */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/7rl-simply-well' element={<SimplyWell/>}/>
          <Route path='/product/7rl-sti-gold' element={<StiGold />}/>
          <Route path='/product/7rl-xtrawell-men' element={<XtraWellMen />}/>
          <Route path='/product/7rl-xtrawell-women' element={<XtraWellWomen />}/>
          <Route path='/product/7rl-velveti-essential' element={<VelvetiEssential/>}/>
          <Route path='/product/7rl-velveti-gold' element={<VelvetiGold/>}/>
          <Route path='/product/7rl-respicare' element={<Raspicare/>}/>
          <Route path='/products/all' element={<ProductsList/>}/>
          <Route path='/user/login' element={<Login/>}/>
          

          <Route path='/paymentmodal' element={<BuyTestModal />}/>
          <Route path='/locationmodal' element={<LocationModal/>}/>
          <Route path='/mobile' element={<Mobile/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
