// import PDF from "../assets/JoshuaDowResume.pdf";
export default function Resume() {
    const handleDownload = () => {
        fetch('/JoshuaDowResume.pdf').then((response) => {
          response.blob().then((blob) => {
            const fileURL = URL.createObjectURL(blob);
             //open(fileURL, '_blank')  //alternative to the a link opens embedded adobe viewer
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "JoshuaDowResume.pdf";
            alink.click(); 
          });
        });
      };

    return (
        <div>
            <a href="Resume" onClick={handleDownload} className="download-link">Download Resume</a>
            <h1>Resume</h1>
            <h2>Front End Technologies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Handlebars</li>
            </ul>
            <h2>Back End Technologies</h2>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>JSON WebTokens</li>
            </ul>
            <h2>Other Technologies</h2>
            <ul>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>VS Code</li>
                <li>Insomnia</li>
                <li>Render</li>
            </ul>
            <h2>Management</h2>
                <li>Employee Training</li>
                <li>Route Training</li>
                <li>Hiring, Firing, Employee Reviews</li>
                <li>Scheduling</li>
                <li>Store Inspections</li>
                <li>Quality Control</li>
                <li>Customer Retention Strategies</li>
        </div>
    );
}