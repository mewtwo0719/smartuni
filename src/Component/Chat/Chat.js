import React, { useState, useEffect } from 'react';
import './Chat.css';
import MicNoneIcon from '@material-ui/icons/MicNone';
import Message from '../Message/Message';
import { IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectChatName, selectChatId } from '../../features/chatSlice';
import db from '../../firebase';
import firebase from 'firebase';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';


function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatId = useSelector(selectChatId);
  const chatName = useSelector(selectChatName);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (chatId) {
      db.collection('chats')
        .doc(chatId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot =>
          setMessages(
            snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = e => {
    e.preventDefault();

    db.collection('chats').doc(chatId).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    setInput('');
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <h4>
          To: <span className='chat__name'>{chatName}</span>
        </h4>
        <a href="/"><strong>X</strong></a>
      </div>
      <div className='chat__messages'>
        <FlipMove>
          {messages.map(({ id, data }) => (
            
            <div>{chatName==chatName ? <Message key={id} contents={data}  /> : "sss"} </div>
          ))}
        </FlipMove>
      </div>
      <div className='chat__input'>
        <form>
          <input
            value={input}
            placeholder='iMessage'
            type='text'
            onChange={e => {
              setInput(e.target.value);
            }}
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className='chat__mic' />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
