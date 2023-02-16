import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/About/About';
import Blog from './component/Blog/Blog'
import { Route, Routes } from "react-router-dom"
import Notpage from './Notfoundpage/Notpage';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="*" element={<Notpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
