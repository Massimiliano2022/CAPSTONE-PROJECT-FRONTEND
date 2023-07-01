import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNav from './components/MyNav';
import MyMain from './components/MyMain';
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <BrowserRouter>
        <MyNav />
          <Routes>
            <Route path="/" element={<MyMain />} />
          </Routes>
        <MyFooter/>  
    </BrowserRouter>
  );
}

export default App;
