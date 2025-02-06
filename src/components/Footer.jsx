import { FaYoutube, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons
import "../styles/Footer.css";

const Footer = ({ footerData }) => { // Receive footerData prop
  return (
    <footer className="footer">
      {/* Copyright text with dynamic year */}
      <p>© Copyright och Upphovsrätt {footerData.copyrightOwner} {new Date().getFullYear()} Min Portfolio</p>

      {/* Social media icons section */}
      <section className="icon-container">
        {/* YouTube link */}
        <a
          href={footerData.youtube}
          target="_blank"
          rel="noopener noreferrer" // Security measure
          className="icon"
          aria-label="Besök min YouTube-kanal"
        >
          <FaYoutube />
        </a>

        {/* GitHub link */}
        <a
          href={footerData.github}
          target="_blank"
          rel="noopener noreferrer" // Security measure
          className="icon"
          aria-label="Besök min GitHub-profil"
        >
          <FaGithub />
        </a>

        {/* LinkedIn link */}
        <a
          href={footerData.linkedin}
          target="_blank"
          rel="noopener noreferrer" // Security measure
          className="icon"
          aria-label="Besök min LinkedIn-profil"
        >
          <FaLinkedin />
        </a>

        {/* Email link */}
        <a
          href={footerData.email}
          className="icon"
          aria-label="Skicka e-post till mig"
        >
          <FaEnvelope />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
