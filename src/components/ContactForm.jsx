import { useState } from "react";
import "./../styles/Contact.css"; // Imports CSS-stylesheet

const ContactForm = () => {
  // State variables to store user input
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    // Validation: Ensure both fields are filled before submitting
    if (!name.trim() || !message.trim()) {
      alert("Please fill in both name and message.");
      return;
    }

    // Display submitted data (replace this with actual form handling logic)
    alert(`Message sent!\n\nName: ${name}\nMessage: ${message}`);

    // Reset the form fields after submission
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {/* Name input field */}
      <label htmlFor="name">Ditt namn:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Skriv in ditt namn här"
        required
        style={styles.input}
      />

      {/* Message textarea field */}
      <label htmlFor="message">Ditt meddelande:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Skriv in ditt meddelande här"
        required
        style={styles.textarea}
      ></textarea>

      {/* Submit button */}
      <button type="submit" style={styles.button}>Skicka in</button>
    </form>
  );
};


export default ContactForm;
