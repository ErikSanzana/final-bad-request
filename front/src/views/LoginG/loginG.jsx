
import React from 'react';
import './login.css';
import { LoginButton } from '../../components/LoginB.jsx';
import { LogoutButton } from '../../components/Logout.jsx';
import{User} from '../../components/User.jsx'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
          <User/>
          <LoginButton/>
          <LogoutButton/>
      </header>
    </div>
  );
}

export default App;
