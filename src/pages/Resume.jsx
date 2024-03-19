import PDF from "../assets/fakeresume.pdf";// need to change name once full resume is created
export default function Resume() {
    const handleDownload = () => {
        fetch(PDF).then((response) => {
          response.blob().then((blob) => {
            const fileURL = URL.createObjectURL(blob);
             //open(fileURL, '_blank')  //alternative to the a link opens embedded adobe viewer
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "fakeresume.pdf";
            alink.click(); 
          });
        });
      };

    return (
        <div>
            <a href="resume" onClick={handleDownload}>Download Resume</a>
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
            </ul>
            <h2>Other</h2>
            <ul>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>VS Code</li>
                <li>Insomnia</li>
                <li>Render</li>
            </ul>
        </div>
    );
}