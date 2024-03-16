import { Link, useLocation } from "react-router-dom";
// used npm install react-icons and imported the ones i needed below
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// add logic here for icons and footer
// need icons that link to github, linkedin, and email
 function FootIcons() {
    const location = useLocation();
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://github.com/spatiallyabsent" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/josh-dow-7985112b8/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="mailto:joshuapdow@gmail.com">
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    );
}


export default FootIcons;