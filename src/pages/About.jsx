import "./../styles/About.css"; // Import external CSS file for styling
import SkillsTable from "../components/SkillsTable"; // Import the SkillsTable component

const About = () => {
  return (
    <section className="about">
      <h1>Om mig</h1>
      <p>
        Jag heter Tobias Thor och studerar till front-end-utvecklare på 
        KYH Yrkeshögskola och är sedan tidigare utbildad IT-tekniker. 
        Innan dess jobbade jag som städare i cirka 20 år, varav flera av 
        åren även som restaurangbiträde inom skolmat.
      </p>

      {/* Placeholder for Image */}
      <img 
        src="path/to/your-image.jpg" 
        alt="Tobias Thor" 
        className="profile-image" 
        style={{ width: "200px", borderRadius: "50%" }} // Add CSS or inline styling
      />

      <h2>Mina kompetenser</h2>
      <SkillsTable /> {/* Using the SkillsTable component here */}

      <h2>Mitt CV</h2>
      
      {/* Education Section */}
      <section>
        <h3>Utbildning</h3>
        <ul>
          <li>
            <strong>Front End Developer (pågående) 2024 – 2026</strong><br />
            KYH Yrkeshögskola
            <ul>
              <li>Kurser avklarade innan LIA:</li>
              <li>Arbetsmetodik 1-2, Jämlikhet i arbetslivet</li>
              <li>HTML & CSS, JavaScript 1-3, UX och Grafisk design</li>
              <li>Back-end-utveckling, Front-end-projekt</li>
            </ul>
          </li>
          <li>
            <strong>IT-tekniker-utbildning 2023 - 2024</strong><br />
            Läroviken och SDCA
            <ul>
              <li>Avslutade kurser:</li>
              <li>Datorteknik 1b, Dator-och nätverksteknik</li>
              <li>Digital kommunikationsteknik, Datorsamordning och support</li>
              <li>Nätverksadministration, Administration av nätverks- och serverutrustning</li>
              <li>Nätverkssäkerhet, 5 veckors APL på SDCA</li>
            </ul>
          </li>
          <li>
            <strong>Lösa kurser 2023-2026</strong><br />
            NTI-skolan och Hermods
            <ul>
              <li>Teknik 1 (pågående)</li>
              <li>Webbserverprogrammering 1 (PHP, SQL)</li>
              <li>Webbutveckling 1 (HTML & CSS)</li>
              <li>Digitalt skapande 1 (Photoshop, Audition)</li>
              <li>Programmering 1 (C#)</li>
              <li>Datorteknik 1a (bla om GNU/Linux)</li>
            </ul>
          </li>
          <li>
            <strong>Kockutbildning AVBRUTEN PGA AV SJUKDOM februari 2023-april 2023</strong><br />
            Läroviken (fd. CVL)
          </li>
        </ul>
      </section>

      {/* Work Experience Section */}
      <section>
        <h3>Arbetslivserfarenhet (2003-2023)</h3>
        <ul>
          <li>
            <strong>Städare/Lokalvårdare</strong><br />
            Gävle Kommun, Sodexo, Forenede Service
            <ul>
              <li>Cirka 20 års erfarenhet av service</li>
            </ul>
          </li>
          <li>
            <strong>Restaurangbiträde (skolmat, flera av åren)</strong><br />
            Gävle Kommun, Sodexo, Forenede Service
          </li>
        </ul>
      </section>

      {/* Other Information */}
      <section>
        <h3>Övriga upplysningar</h3>
        <p>Jag har ej körkort men goda möjligheter att pendla vid behov.</p>
      </section>

      {/* Strengths Section */}
      <aside className="strengths">
        <h3>Styrkor</h3>
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
