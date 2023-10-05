import './App.css';
import './Style.css';
import Navbar from "./components/Navbar";
import{BrowserRouter, Route, Routes} from "react-router-dom";

import DetailsMovie from "./components/DetailsMovie";
import NotFound from "./components/ NotFound";
import GalleryMovie  from "./components/GalleryMovie";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Navbar/>
   <Routes>
    <Route path='/'element={<GalleryMovie/>}/>
    <Route path='/#' element={<NotFound/>}/>
    <Route path='/#'element={<DetailsMovie/>}/>
   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
