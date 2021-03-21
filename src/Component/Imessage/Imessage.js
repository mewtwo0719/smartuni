import React from 'react';
import './Imessage.css';
import Sidebar from '../Sidebar/Sidebar.js';
import Chat from '../Chat/Chat.js';
function Imessage() {
  return (
    <div className='imessage'>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Imessage;
