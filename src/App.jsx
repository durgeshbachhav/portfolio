import "./App.css";
import AboutUs from "./components/Aboutus";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="relative">
      {/* fixed */}
      <div
        style={{ height: "10vh" }}
        className="fixed top-0 w-full z-40 backdrop-blur-2xl"
      >
        <Navbar />
      </div>
      {/* relative */}
      <div
        style={{ height: "90vh", marginTop: "10vh" }}
        className="w-full max-w-7xl   mx-auto "
        id="home"
      >
        <Home />
      </div>
      <div
        style={{ height: "100vh" }}
        id="about"
        className="w-full max-w-7xl flex flex-col items-center justify-center  mx-auto"
      >
        <AboutUs />
      </div>
      <div
        style={{ height: "100%" }}
        className="w-full max-w-7xl flex flex-col items-center justify-center  mx-auto"
        id="skills"
      >
        <Skill />
      </div>
      <div
        style={{ height: "100%" }}
        className="w-full max-w-7xl flex flex-col items-center justify-center  mx-auto"
        id="projects"
      >
        <Projects />
      </div>
      <div
        style={{ height: "100%" }}
        className="w-full max-w-7xl flex flex-col items-center justify-center  mx-auto"
        id="qualification"
      >
        <Qualification />
      </div>
      <div
        style={{ height: "100%" }}
        className="w-full bg-gray-800 mt-8 flex flex-col items-center justify-center   mx-auto"
        id="contact"
      >
        <Contact />
      </div>
      {/* div for bg styling */}
      <div className="lg:absolute top-10 right-10 w-40 h-40 rounded-full circle2"></div>
      <div className="lg:absolute top-20 left-10 w-40 h-40 rounded-full circle2 animate-none"></div>
    </div>
  );
}

export default App;
