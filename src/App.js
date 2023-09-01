
import './App.css';
import "./fonts/fonts.css";
// 


import Navbar from './components/navbar';
import Articulo from './components/articulo/articulo'
import About from './components/About/about';
import Works from './components/works/works';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Articulo />
      <About/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
