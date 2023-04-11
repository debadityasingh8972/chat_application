import { useState } from 'react';
import axios from 'axios';

const projectID = "53a2e6c6-fe8c-4e25-8240-c205ac0ae372";

const Modal = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
        
        try {
            // username | password => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            
            // works out -> logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            
            window.location.reload();
            setError('');
        } catch (err) {
            // error -> try with new username...
            setError('Oops! incorrect credentials.');
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h2 className="error">{error}</h2>
            </div>
        </div>

    );
};

export default Modal;