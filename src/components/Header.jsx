import { Link } from "react-router-dom"; // Import Link for navigation
import { useSelector, useDispatch } from "react-redux"; // Import Redux hooks
import { toggleTheme } from "../store/themeSlice"; // Import theme toggle action
import "../styles/Header.css"; // Import external CSS file

const Header = () => {
  // Get the current dark mode state from Redux
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch(); // Hook to dispatch actions

  return (
    <header className={darkMode ? "header dark" : "header"}>
      {/* Navigation links */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Theme toggle button */}
      <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
