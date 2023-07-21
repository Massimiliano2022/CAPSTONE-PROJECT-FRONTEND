import "bootstrap/dist/css/bootstrap.min.css";
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeUtenteCorrente } from "./redux/actions";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MyNav from './components/MyNav';
import MyMain from './components/MyMain';
import MyFooter from "./components/MyFooter";
import MyLogin from "./components/MyLogin";
import MySignup from "./components/MySignup";
import MyCryptoList from "./components/MyCryptoList";
import MyCrypto from "./components/MyCrypto";
import MyWallet from "./components/MyWallet";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeUtenteCorrente());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/login" element={<MyLogin />} />
        <Route path="/signup" element={<MySignup />} />
        <Route path="/" element={<MyMain />} />
        <Route path="/mercati" element={<MyCryptoList />} />
        <Route path="/crypto/:simbolo" element={<MyCrypto />} />
        <Route path="/wallet" element={<MyWallet />} />
      </Routes>
      {<MyFooter />}
    </BrowserRouter>
  );
}

export default App;
