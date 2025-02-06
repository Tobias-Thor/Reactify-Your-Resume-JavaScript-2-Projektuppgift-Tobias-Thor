import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  // Data to pass as props to Home component
  const homeData = {
    title: "Välkommen till min Portfolio",
    intro: "Jag är en blivande junior front-end-utvecklare med erfarenhet av:",
    skills: [
      "HTML (semantisk)",
      "WACG",
      "SEO",
      "CSS",
      "SASS/SCSS",
      "Tailwind",
      "JavaScript",
      "React",
      "Redux",
      "SPA",
      "Node.js",
      "bash",
      "VS Code",
      "GitHub",
      "Trello",
      "Figma"
    ]
  };

  return (
    <>
      <Provider store={store}>
        <Header /> {/* The Header component that appears at the top of the page */}
        <main>
          {/* Routes component to define different routes in the app */}
          <Routes>
            <Route 
              path="/" 
              element={<Home 
                title={homeData.title} 
                intro={homeData.intro} 
                skills={homeData.skills} 
              />} 
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* The Footer component that appears at the bottom of the page */}
      </Provider>
    </>
  );
}

export default App;
