import { FaYoutube, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons
import "./../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      {/* Copyright text with dynamic year */}
      <p>© Copyright och Upphovsrätt Tobias Thor {new Date().getFullYear()} Min Portfolio</p>

      {/* Social media icons section */}
      <section className="icon-container">
        {/* YouTube link */}
        <a
          href="https://www.youtube.com/@TobiasThor-i6d"
          target="_blank"
          rel="noopener noreferrer" // Security measure
          className="icon"
          aria-label="Besök min YouTube-kanal"
        >
          <FaYoutube />
        </a>

        {/* GitHub link */}
        <a
          href="https://github.com/Tobias-Thor"
          target="_blank"
          rel="noopener noreferrer" // Security measure
          className="icon"
          aria-label="Besök min GitHub-profil"
        >
          <FaGithub />
        </a>

        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/tobias-thor-810215182/"
          target="_blank"
          rel="noopener noreferrer" // Security measure
          className="icon"
          aria-label="Besök min LinkedIn-profil"
        >
          <FaLinkedin />
        </a>

        {/* Email link */}
        <a
          href="mailto:tobiasthor@protonmail.com"
          className="icon"
          aria-label="Skicka e-post till mig"
        >
          <FaEnvelope />
        </a>
      </section>
    </footer>
  );
};

// Export the Footer component
export default Footer;
