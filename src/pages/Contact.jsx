import { useState } from "react";
import ContactForm from "../components/ContactForm"; // Imports the ContactForm component
import "./../styles/Contact.css"; 

const Contact = () => {
  // Optionally, you can use state to manage the user name dynamically
  const [userName, setUserName] = useState("Tobias Thor");

  return (
    <section className="contact">
      {/* Page title */}
      <h1>Kontakta mig</h1>

      <h2>Mina kontaktuppgifter</h2>
      <address className="address">
        <p><strong>Stad:</strong> Gävle</p>
        <p><strong>E-post:</strong> <a href="mailto:tobiasthor@protonmail.com">tobiasthor@protonmail.com</a></p>
        <p><strong>Telefon:</strong> 07XX-XX2-0XX</p>
        <p><strong>YouTube:</strong> <a href="https://www.youtube.com/@TobiasThor-i6d" target="_blank" rel="noopener noreferrer">Besök min YouTube-kanal</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tobias-thor-810215182/" target="_blank" rel="noopener noreferrer">Min LinkedIn-profil</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Tobias-Thor" target="_blank" rel="noopener noreferrer">Min GitHub</a></p>
      </address><br></br>
      
      {/* Pass the userName as a prop to the ContactForm component */}
      <ContactForm userName={userName} />
    </section>
  );
};

export default Contact;
