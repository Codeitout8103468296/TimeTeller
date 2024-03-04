import './App.css';
import Header from './Header/Header'
import Main from './MainSection/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      {/* <Main/> */}
      <Routes>
          <Route path='/' element={<Main category="general" country="in"  />} />
          <Route path='/business' element={<Main category="business" country="in" />} />
          <Route path='/entertainment' element={<Main category="entertainment" country="in" />} />
          <Route path='/sports' element={<Main category="sports" country="in" />} />
        <Route path='/health' element={<Main category="health" country="in"  />} />
        <Route path='/science' element={<Main category="science" country="in"  />} />
        <Route path='/technology' element={<Main category="technology" country="in"  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
