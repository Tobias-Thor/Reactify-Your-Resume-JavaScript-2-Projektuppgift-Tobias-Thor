import { useState } from "react";

const ContactForm = ({ userName }) => {
  // Initialize the 'name' state with the value from the props (userName)
  const [name, setName] = useState(userName || "");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      alert("Var god och fyll i både namn och meddelande, tack.");
      return;
    }
    alert(`Meddelande skickat!\n\nNamn: ${name}\nMeddelande: ${message}`);
    setName("");  // Clear name field
    setMessage("");  // Clear message field
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="name">Ditt namn:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Skriv in ditt namn här"
        required
      />
      <label htmlFor="message">Ditt meddelande:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Skriv in ditt meddelande här"
        required
      ></textarea>
      <button type="submit">Skicka in</button>
    </form>
  );
};

export default ContactForm;
