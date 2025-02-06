import SkillsTable from "../components/SkillsTable"; // Import the SkillsTable component
import "./../styles/About.css"; 

const About = () => {
  return (
    <section className="about">
      <h1>Om mig</h1><br></br>
      <p>
        Jag heter Tobias Thor och studerar till front-end-utvecklare på 
        KYH Yrkeshögskola och är sedan tidigare utbildad IT-tekniker. 
        Innan dess jobbade jag som städare i cirka 20 år, varav flera av 
        åren även som restaurangbiträde inom skolmat.
      </p><br></br>

      {/* for "selfie" image */}
      <img 
        src="./images/90909-500px.png" 
        alt="Tobias Thor" 
        className="profile-image" 
      /><br></br>

      <h2>Mina kompetenser</h2>
      <SkillsTable /> {/* Using the SkillsTable component here */}<br></br>

      <h2>Mitt CV</h2>
      
      {/* Education Section */}
      <section>
        <h3>Utbildning</h3>
        <ul>
          <li>
            <p>Front End Developer (pågående) 2024 – 2026</p>
            <p>KYH Yrkeshögskola</p><br></br>
            <p>Kurser avklarade innan LIA:</p><br></br>
            <ul>
              <li>Arbetsmetodik 1-2</li> 
              <li>Jämlikhet i arbetslivet</li>
              <li>HTML & CSS</li>
              <li>JavaScript 1-3</li> 
              <li>UX och Grafisk design</li>
              <li>Back-end-utveckling</li>
              <li>Front-end-projekt</li>
            </ul>
          </li><br></br>
          <li>
            <p>IT-tekniker-utbildning 2023-2024</p>
            <p>Läroviken och SDCA</p><br></br>
            <p>Avslutade kurser:</p><br></br>
            <ul>
              <li>Datorteknik 1b</li>
              <li>Dator-och nätverksteknik</li>
              <li>Digital kommunikationsteknik</li>
              <li>Datorsamordning och support</li>
              <li>Nätverksadministration</li>
              <li>Administration av nätverks- och serverutrustning</li>
              <li>Nätverkssäkerhet</li>
              <li>(5 veckors APL på SDCA)</li>
            </ul>
          </li><br></br>
          <li>
            <p>Lösa kurser 2023-2026</p>
            <p>NTI-skolan och Hermods</p><br></br>
            <ul>
              <li>Teknik 1 (pågående)</li>
              <li>Webbserverprogrammering 1 (PHP, SQL)</li>
              <li>Webbutveckling 1 (HTML & CSS)</li>
              <li>Digitalt skapande 1 (Photoshop, Audition)</li>
              <li>Programmering 1 (C#)</li>
              <li>Datorteknik 1a (bla om GNU/Linux)</li>
            </ul>
          </li><br></br>
          <li>
            <p>Kockutbildning AVBRUTEN PGA AV SJUKDOM februari 2023-april 2023</p>
            <p>Läroviken (fd. CVL)</p>
          </li>
        </ul>
      </section><br></br>

      {/* Work Experience Section */}
      <section>
        <h3>Arbetslivserfarenhet (2003-2023)</h3>
        <ul>
          <li>
            Städare/Lokalvårdare
            Gävle Kommun, Sodexo, Forenede Service
            <ul>
              <li>Cirka 20 års erfarenhet av service</li>
            </ul>
          </li>
          <li>
            Restaurangbiträde (skolmat, flera av åren)
            Gävle Kommun, Sodexo, Forenede Service
          </li>
        </ul>
      </section><br></br>

      {/* Other Information */}
      <section>
        <h3>Övriga upplysningar</h3>
        <p>Jag har ej körkort men har goda möjligheter att pendla vid behov.</p>
      </section><br></br>

      {/* Strengths Section */}
      <aside className="strengths">
        <h3>Mina styrkor</h3>
        <blockquote>
          <ul>
            <li>Lugn</li>
            <li>Enkel</li>
            <li>Självständig</li>
            <li>Envis</li>
            <li>Kreativ</li>
            <li>Nyfiken</li>
            <li>Social</li>
          </ul>
        </blockquote>
      </aside>

      {/* Language Section */}
      <aside className="languages">
        <h3>Språk</h3>
        <blockquote>
          <ul>
            <li>Svenska - Modersmål</li>
            <li>Engelska - Flytande</li>
          </ul>
        </blockquote>
      </aside>
    </section>
  );
};

export default About;
