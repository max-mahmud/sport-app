import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/About/About';
import Blog from './component/Blog/Blog'
import { Route, Routes } from "react-router-dom"



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
