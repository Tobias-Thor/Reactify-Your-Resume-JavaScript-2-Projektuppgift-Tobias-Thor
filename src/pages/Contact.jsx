import ContactForm from "../components/ContactForm"; // Imports the ContactForm component
import "./../styles/Contact.css"; // Imports CSS-stylesheet

const Contact = () => {
  return (
    <section className="contact">
      {/* Page title */}
      <h1>Kontakta mig</h1>

      {/* ContactForm component handles input fields and form submission */}
      <ContactForm />
    </section>
  );
};

export default Contact;
