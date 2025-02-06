import { useState } from "react";
import "./../styles/Contact.css"; 

const ContactForm = () => {
  // State variables to store user input
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    // Validation: Ensure both fields are filled before submitting
    if (!name.trim() || !message.trim()) {
      alert("Var god och fyll i både namn och meddelande, tack.");
      return;
    }

    // Display submitted data
    alert(`Meddelande skickat!\n\nNamn: ${name}\nMeddelande: ${message}`);

    // Reset the form fields after submission
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* Name input field */}
      <label htmlFor="name">Ditt namn:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Skriv in ditt namn här"
        required
        className="input-field"
      />

      {/* Message textarea field */}
      <label htmlFor="message">Ditt meddelande:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Skriv in ditt meddelande här"
        required
        className="textarea-field"
      ></textarea>

      {/* Submit button */}
      <button type="submit" className="submit-button">Skicka in</button>
    </form>
  );
};

export default ContactForm;
