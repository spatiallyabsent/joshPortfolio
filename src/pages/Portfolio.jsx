import { FaGithub } from "react-icons/fa"; 
import React from "react";

const projects = [
        {
            title: 'Daily Planner',
            image: 'dailydashboard.jpg', 
            githubLink: 'https://github.com/S10skeleton/Project-1-G5'
        },
        {
            title: 'company database',
            image: 'company-databaseimg.jpg', 
            githubLink: 'https://github.com/spatiallyabsent/employee-tracker/tree/main'
        },
        {
            title: 'PWA Text Editor',
            image: 'PWAtextimage.jpg', 
            githubLink: 'https://github.com/spatiallyabsent/PWAtexteditor'
        },
        {
            title: 'ReadMe Generator',
            image: 'readmegenimage.jpg',
            githubLink: 'https://github.com/spatiallyabsent/readmegenerator'
        },
        {
            title: 'Coming soon',
            image: 'public/underconstruction.jpg', 
            githubLink: 'https://github.com/spatiallyabsent'
        },
        {
            title: 'Coming soon',
            image: 'public/underconstruction.jpg', 
            githubLink: 'https://github.com/spatiallyabsent'
        },

]

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <h1 className="portfolio-heading">Portfolio</h1>
            <div className="port-images">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h2>{project.title}</h2>
                        <div className="image-container">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30}/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}