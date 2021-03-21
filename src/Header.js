import React, {useState} from 'react'
import './Header.css'
import MapIcon from '@material-ui/icons/Map'
import ClassIcon from '@material-ui/icons/Class'
import ForumIcon from '@material-ui/icons/Forum'
import MessageIcon from '@material-ui/icons/Message';
import AttachFileIcon from '@material-ui/icons/AttachFile'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Avatar} from '@material-ui/core'
import {IconButton} from '@material-ui/core'
import { auth } from './firebase';
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
function Header() {
    const user = useSelector(selectUser);
    const logOut = () => {
        firebase.auth().signOut();
      };
    return (
        <div className='header'>
            <div className='logo'></div>

            <div className='menu'>
                <div className='menu__option active'> <ClassIcon fontSize='large'/> </div>
                <div className='menu__option'> <ForumIcon fontSize='large'/> </div>
                <div className='menu__option'> <AttachFileIcon fontSize='large'/> </div>
                <a href="/chat"> <div className='menu__option'> <MessageIcon fontSize='large'/> </div> </a>

                <a href="/map"> <div className='menu__option'> <MapIcon fontSize='large'/></div> </a> 
            </div>


            <div className='profile' onClick={logOut}>
                <Avatar src={user.photo} fontSize='large' />
                <h3>{user.displayName}</h3>
                <IconButton><ExpandMoreIcon fontSize='large'/></IconButton>

            </div>
        
        </div>
    )
}

export default Header
