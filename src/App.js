import './App.css';
import React, { useEffect, useState } from 'react';
import CodeEditor from './CodeEditor';
import socketIOClient from 'socket.io-client';



function App() {

  const [passcode, setPasscode] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handlePasscodeChange = (event) => {
    setPasscode(event.target.value);
  };

  const handlePasscodeSubmit = () => {
    // Check the passcode here, for example:
    if (passcode === '8642') {
      setAuthenticated(true);
    } else {
      alert('Incorrect passcode. Please try again.');
    }
  };

  const [code, setCode] = useState('');
  const socket = socketIOClient('https://syncrode.brewingbinary.com');


  useEffect(() => {
    socket.connect();
    socket.on('code change', (newCode) => {
      setCode(newCode);
    })

    return () => {

      setTimeout(() => {
        console.log('Disconnecting from socket...');
        socket.disconnect();
      }, 1000);

    }
  })

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    socket.emit('code change', newCode);
  }

  if (!authenticated) {
    return (
      <div className='login'>
        <div>
          <input type="password" placeholder='Enter Passcode' value={passcode} onChange={handlePasscodeChange} />
          <button onClick={handlePasscodeSubmit}>Submit</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className='title'>Syncrode</h1>
      <CodeEditor code={code} onChange={handleCodeChange} />
    </>
  );
}

export default App;