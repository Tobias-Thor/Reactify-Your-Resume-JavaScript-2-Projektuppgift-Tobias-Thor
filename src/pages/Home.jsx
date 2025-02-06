import "./../styles/Home.css"; 

// Functional component for the Home page of the portfolio
const Home = ({ title, intro, skills }) => {
  return (
    <section className="home">
      <h1>{title}</h1>
      <p>{intro}</p>
      <ul className="skills">
        {skills.map((skill, index) => ( // Dynamically render skills list
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
