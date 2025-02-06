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

  // Data for the Footer component
  const footerData = {
    youtube: "https://www.youtube.com/@TobiasThor-i6d",
    github: "https://github.com/Tobias-Thor",
    linkedin: "https://www.linkedin.com/in/tobias-thor-810215182/",
    email: "mailto:tobiasthor@protonmail.com",
    copyrightOwner: "Tobias Thor"
  };

  // Data for navigation links in Header
  const navLinks = [
    { name: "Hem", path: "/" },
    { name: "Om mig", path: "/about" },
    { name: "Projekt", path: "/projects" },
    { name: "Kontakt", path: "/contact" }
  ];

  return (
    <Provider store={store}>
      <Header navLinks={navLinks} /> {/* Passing navLinks as a prop */}
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
      <Footer footerData={footerData} /> {/* Pass footerData as prop */}
    </Provider>
  );
}

export default App;


