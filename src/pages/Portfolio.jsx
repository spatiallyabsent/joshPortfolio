import { FaGithub } from "react-icons/fa"; 
import React from "react";

const projects = [
        {
            title: 'Daily Planner',
            image: '../../public/dailydashboard.png', 
            githubLink: 'https://github.com/S10skeleton/Project-1-G5'
        },
        {
            title: 'company database',
            image: '../../public/company-databaseimg.png', 
            githubLink: 'https://github.com/spatiallyabsent/employee-tracker/tree/main'
        },
        {
            title: 'PWA Text Editor',
            image: '../../public/PWAtextimage.png', 
            githubLink: 'https://github.com/spatiallyabsent/PWAtexteditor'
        },
        {
            title: 'ReadMe Generator',
            image: '../../public/readmegenimage.png',
            githubLink: 'https://github.com/spatiallyabsent/readmegenerator'
        },
        {
            title: 'Coming soon',
            image: '../../public/underconstruction.png', 
            githubLink: 'https://github.com/spatiallyabsent'
        },
        {
            title: 'Coming soon',
            image: '../../public/underconstruction.png', 
            githubLink: 'https://github.com/spatiallyabsent'
        },

]

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <h2>{project.title}</h2>
                    <img src={project.image} alt={project.title} />
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30}/>
                    </a>
                </div>
            ))}
        </div>
    );
}