import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNav from './components/MyNav';
import MyMain from './components/MyMain';
import MyFooter from "./components/MyFooter";
import MyLogin from "./components/MyLogin";
import MySignup from "./components/MySignup";
import MyCryptoList from "./components/MyCryptoList";
import MyCrypto from "./components/MyCrypto";

function App() {
  return (
    <BrowserRouter>
        <MyNav />
          <Routes>
            <Route path="/login" element={<MyLogin/>}/>
            <Route path="/signup" element={<MySignup/>}/>
            <Route path="/" element={<MyMain />} />
            <Route path="/mercati" element={<MyCryptoList/>}/>
            <Route path="/crypto" element={<MyCrypto/>}/>
          </Routes>
        <MyFooter/>  
    </BrowserRouter>
  );
}

export default App;
