import { useState, useEffect } from 'react';
import { validateEmail } from '../../utils/helpers';
//used 20-React/16-Stu_React-Forms as a reference
//may need to add an onmount useEffect to clear the form
const Form = () => {
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
        <div className="form-container">
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={userName}
                    name="userName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    />
                <input
                    value={userEmail}
                    name="userEmail"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    />
                <textarea
                    value={userMessage}
                    name="userMessage"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                    />
                <button type="submit">Submit</button>
            </form>
            {errorMessages && (
                <div>
                    <p className="error-text">{errorMessages}</p>
                </div>
            )}
        </div>
    );
}

export default Form;