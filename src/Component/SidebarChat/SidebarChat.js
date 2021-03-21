import React, { useState, useEffect } from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setChat } from '../../features/chatSlice';
import db from '../../firebase';

function SidebarChat({ id, chatName }) {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);
  useEffect(() => {
    db.collection('chats')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        setChatInfo(snapshot.docs.map(doc => doc.data()));
      });
  }, [id]);

  return (
    <>
      <div
        className='sidebarChat'
        onClick={() => dispatch(setChat({ chatId: id, chatName: chatName }))}
      >
        <Avatar src={chatInfo[0]?.photo} />
        <div className='sidebarChat__info'>
          <h3>{chatName}</h3>
          <p>{chatInfo[chatInfo.length-1]?.message}</p>
          <small>
            {
              new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()
            }
          </small>
        </div>
      </div>
    </>
  );
}

export default SidebarChat;
