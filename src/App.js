import { BrowserRouter, Routes, Route } from "react-router-dom";

import Content from './screens/Content/Content'
import Home from './screens/Home/Home'

import './App.css';

function App() {
  
  return (
    <div>
      <BrowserRouter>
          <Routes >
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/content" element={<Content />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
