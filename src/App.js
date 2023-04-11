import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

// const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            // projectID={projectID}
            projectID="53a2e6c6-fe8c-4e25-8240-c205ac0ae372"
            userName={localStorage.getItem('username')}
            // userName="Itachi_Uchiha"
            userSecret={localStorage.getItem('password')}
            // userSecret="Tatakae@139"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

// infinite scroll, logout, more customizations...

export default App;