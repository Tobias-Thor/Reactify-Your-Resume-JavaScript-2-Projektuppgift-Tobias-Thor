import { FaYoutube, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons
import "./../styles/Footer.css"; // Import CSS stylesheet

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Copyright text with dynamic year */}
      <p>© Copyright och Upphovsrätt Tobias Thor{new Date().getFullYear()} My Portfolio</p>

      {/* Social media icons section */}
      <section style={styles.iconContainer}>
        {/* YouTube link */}
        <a
          href="https://www.youtube.com/@TobiasThor-i6d"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
          aria-label="Visit my YouTube channel"
        >
          <FaYoutube />
        </a>

        {/* GitHub link */}
        <a
          href="https://github.com/Tobias-Thor"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
          aria-label="Visit my GitHub profile"
        >
          <FaGithub />
        </a>

        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/tobias-thor-810215182/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
          aria-label="Visit my LinkedIn profile"
        >
          <FaLinkedin />
        </a>

        {/* Email link */}
        <a
          href="mailto:tobiasthor@protonmail.com"
          style={styles.icon}
          aria-label="Send me an email"
        >
          <FaEnvelope />
        </a>
      </section>
    </footer>
  );
};

// Export the Footer component
export default Footer;
