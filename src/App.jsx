import './App.css';
import ProductsContainer from './components/ProductsContainer';
import logo from '../public/images/Pompagua-1 (1).png'
import Footer from './components/Footer';

function App() {

  return (
    <main className="main-container">
      <img className='logo' src={logo} alt="" />
      <ProductsContainer />
      <Footer />
    </main>
  )
}

export default App
