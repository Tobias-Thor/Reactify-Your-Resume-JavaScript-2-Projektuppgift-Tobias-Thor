import { Link } from "react-router-dom"; // Import Link for navigation
import { useSelector, useDispatch } from "react-redux"; // Import Redux hooks
import { toggleTheme } from "../store/themeSlice"; // Import theme toggle action
import "../styles/Header.css";

const Header = ({ navLinks }) => { // Accept navLinks as prop
  // Get the current dark mode state from Redux (global state-handling)
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch(); // Hook to dispatch actions

  return (
    <header className={darkMode ? "header dark" : "header"}>
      {/* Navigation links */}
      <nav className="nav">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path}>{link.name}</Link> // Dynamically render nav links
        ))}
      </nav>

      {/* Theme toggle button */}
      <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
        {darkMode ? "Ljust Läge" : "Mörkt Läge"}
      </button>
    </header>
  );
};

export default Header;
