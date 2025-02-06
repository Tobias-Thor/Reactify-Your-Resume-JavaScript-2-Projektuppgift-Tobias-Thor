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

// Functional component that serves as the main structure for the app
function App() {
  return (
    <>
      <Provider store={store}>
      <Header /> {/* The Header component that appears at the top of the page */}
      <main>
        {/* Routes component to define different routes in the app */}
        <Routes>
          <Route path="/" element={<Home />} />
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

export default App; // Exporting the App component to be used in other parts of the app
