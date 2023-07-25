import "./App.css"
import Contact from "./Components/Contact/Contact";
import Features from "./Components/Features/Features";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";



function App() {
  return (
    <div className="App">



      <Home/>
      <Features />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
