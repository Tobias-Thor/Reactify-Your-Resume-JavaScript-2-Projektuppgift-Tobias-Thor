import React from "react";
import "./../styles/SkillsTable.css"; 

// Array of skill objects, each containing a skill name and its rating
const skills = [
  { skill: "React", level: "⭐" },
  { skill: "Node.js", level: "⭐" },
  { skill: "TypeScript", level: "🟢" },
  { skill: "JavaScript", level: "⭐" },
  { skill: "Tailwind", level: "⭐" },
  { skill: "SASS/SCSS", level: "⭐" },
  { skill: "CSS", level: "⭐⭐" },
  { skill: "HTML", level: "⭐⭐" },
  { skill: "SEO", level: "⭐" },
  { skill: "WCAG", level: "⭐⭐" },
  { skill: "SQL", level: "⭐" },
  { skill: "PHP", level: "⭐" },
  { skill: "C#", level: "🟢" },
  { skill: "GitHub", level: "⭐" },
  { skill: "VS Code", level: "⭐⭐" },
  { skill: "Trello", level: "⭐⭐" },
  { skill: "Figma", level: "⭐" },
  { skill: "M365", level: "⭐⭐" },
  { skill: "Photoshop", level: "⭐" },
  { skill: "Audition", level: "⭐" },
  { skill: "bash", level: "⭐" },
  { skill: "PowerShell", level: "⭐" },
  { skill: "Windows Server", level: "⭐⭐" },
  { skill: "Hyper-V", level: "⭐⭐" },
  { skill: "Active Directory", level: "⭐⭐" },
  { skill: "RAID/SAN/NAS", level: "⭐⭐" },
  { skill: "Nätverk", level: "⭐⭐" },
];

// Functional component to display the skills in a table format
const SkillsTable = () => {
  return (
    <table className="skills-table"> 
      <thead> 
        <tr>
          <th>Kompetens</th> 
          <th>Nivå</th> 
        </tr>
      </thead>
      <tbody> 
        {skills.map((item, index) => ( // Iterating through the skills array
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
