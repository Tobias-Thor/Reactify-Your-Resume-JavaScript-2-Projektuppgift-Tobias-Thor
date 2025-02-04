import React from "react";
import "./../styles/SkillsTable.css"; // Importing external CSS

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

const SkillsTable = () => {
  return (
    <table className="skills-table">
      <thead>
        <tr>
          <th>Kompetens</th>
          <th>Betyg</th>
        </tr>
      </thead>
      <tbody>
        {skills.map((item, index) => (
          <tr key={index}>
            <td>{item.skill}</td>
            <td>{item.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SkillsTable;
