import './App.css';
import NavBar from './components/NavBar/nav';
import Footer from './components/Footer/footer';
import Contact from './components/Contact/contact';
import About from './components/about/about';
// import Faqs from './components/FAQS/faqs';
import DarkMode from './components/darkmode/dark';
import Corousel from './components/corousel/corousel';
import FrontCards from './components/front-cards/front-cards';

function App() {
  return (
    <div>
      
        <NavBar />
        <FrontCards />
        <About />
        {/* <Corousel /> */}
        {/* <Faqs /> */}
        
        <Contact />
        {/* <DarkMode /> */}
        <Footer />
    </div>
  );
}

export default App;
