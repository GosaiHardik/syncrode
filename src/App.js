import './App.css';
import React, { useEffect, useState } from 'react';
import CodeEditor from './CodeEditor';
import socketIOClient from 'socket.io-client';



function App() {

  const [code, setCode] = useState('');
  const socket = socketIOClient('http://localhost:3001');


  useEffect(() => {
    socket.on('code change', (newCode) => {
      setCode(newCode);
    })

    return () => socket.disconnect();
  })

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    socket.emit('code change', newCode);  
  }

  return (
    <>
      <h1 className='title'>Syncrode</h1>
      <CodeEditor code={code} onChange={handleCodeChange} />
    </>
  );
}

export default App;