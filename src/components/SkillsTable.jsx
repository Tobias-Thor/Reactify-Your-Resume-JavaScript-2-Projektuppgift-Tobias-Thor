import React from "react";
import "./../styles/SkillsTable.css"; 

// Functional component to display the skills in a table format
const SkillsTable = ({ skills }) => {
  return (
    <table className="skills-table"> 
      <thead> 
        <tr>
          <th>Kompetens</th> 
          <th>Nivå</th> 
        </tr>
      </thead>
      <tbody> 
        {skills.map((item, index) => ( // Iterating through the skills array passed as prop
          <tr key={index}> {/* Unique key for each table row */}
            <td>{item.skill}</td> 
            <td>{item.level}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SkillsTable;

