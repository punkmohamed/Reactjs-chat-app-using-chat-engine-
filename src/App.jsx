import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="0d274801-b11f-47aa-a474-92e04926f2a5"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
