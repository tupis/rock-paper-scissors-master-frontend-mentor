import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HardGame from "./screens/HardGame";
import NormalGame from "./screens/NormalGame";
import './sass/app.scss'
import ChangeGame from "./components/ChangeGame";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NormalGame />}/>
        <Route path='/hard' element={<HardGame />}/>
      </Routes>
      <ChangeGame />
    </BrowserRouter>
  );
}