import "./../styles/Home.css"; 

// Functional component for the Home page of the portfolio
const Home = () => {
  return (
    <section className="home">
      <h1>Välkommen till min Portfolio</h1>
      <p>
        Jag är en blivande junior front-end-utvecklare med erfarenhet av: 
      <ul className="skills">
        <li>HTML (semantisk)</li>
        <li>WACG</li>
        <li>SEO</li>
        <li>CSS</li>
        <li>SASS/SCSS</li>
        <li>Tailwind</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>SPA</li>
        <li>Node.js</li>
        <li>bash</li>
        <li>VS Code</li>
        <li>GitHub</li>
        <li>Trello</li>
        <li>Figma</li>
      </ul>
      </p>
    </section>
  );
};

export default Home;
