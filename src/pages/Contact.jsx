// import Form from '../components/Form/form';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';



import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// react differentiates between its components and mine through the first letter being capitalized
function Contact() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'userName') {
            setUserName(value);
        } else if (name === 'userEmail') {
            setUserEmail(value);
        } else {
            setUserMessage(value);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!userName || !validateEmail(userEmail) || !userMessage) {
            setErrorMessages('Please fill out all fields');
            return;
        } else {
            setErrorMessages('');
            setUserName('');
            setUserEmail('');
            setUserMessage('');
        }
    };
  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>name</Form.Label>
        <Form.Control name="userName" value={userName} onChange={handleInputChange} type="text" placeholder="Your name here" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="userEmail" value={userEmail} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>message</Form.Label>
        <Form.Control as="textarea" rows={3} name="userMessage" value={userMessage} onChange={handleInputChange} />
      </Form.Group>
      {errorMessages && (
                <div>
                    <p className="error-text">{errorMessages}</p>
                </div>
            )}
      <Button variant="primary" type="submit"> Submit </Button>
    </Form>
  );
}

export default Contact;
// export default function Contact() {
//     return (
//         <div>
//             <h1>Contact</h1>
//             <p>
//                 How to contact me:
//             </p>
//             <Form />
//         </div>
//     );
// }