import './App.css';
import Navbar from './components/navigation/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services';
import Title from './components/title/Title';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className='container'>
        <About />
        <Title subTitle='Services' title='What I Do'/>
        <Services />
        <Title subTitle='Projects' title='Jobs I have done'/>
        <Projects/>
        <Title subTitle='Contact Me' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
