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
  // Data for the Home page
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

  // Data for the footer links
  const footerData = {
    youtube: "https://www.youtube.com/@TobiasThor-i6d",
    github: "https://github.com/Tobias-Thor",
    linkedin: "https://www.linkedin.com/in/tobias-thor-810215182/",
    email: "mailto:tobiasthor@protonmail.com",
    copyrightOwner: "Tobias Thor"
  };

  return (
    <Provider store={store}>
      <Header /> {/* The Header component that appears at the top of the page */}
      <main>
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
      <Footer footerData={footerData} /> {/* Pass footerData as prop to Footer */}
    </Provider>
  );
}

export default App;

