import React, {useState}  from 'react'
import './SendPost.css'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { TextField } from '@material-ui/core';
import {Avatar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TreeView from '@material-ui/lab/TreeView';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import SendIcon from "@material-ui/icons/Send"
import AttachFileIcon from '@material-ui/icons/Attachment'
import db from './firebase'
import firebase from 'firebase'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import {app} from './firebase'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));

  
function SendPost() {


    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([{username: 'Sako', message: 'zdravo!'}]);
    const [username, setUsername] = useState('');

    const [imageUrl, setImageUrl] = useState('')
    const [image, setImage ] = useState(null);
    const user = useSelector(selectUser);
    
    const onChange = (e) => {
      const file = e.target.files[0];
      const storageRef = app.storage().ref()
      const fileRef = storageRef.child(file.name)
      fileRef.put(file).then(() => {
        console.log("Uploaded a file")
      })
    }
  
    const sendPost = (event) => {
      event.preventDefault();
      console.log(input)
      setInput("")
      setMessages([...messages, {username: 'username', message: input}]) 
      console.log(messages)
    }

      const classes = useStyles();



      const handleSubmit = e =>{
        e.preventDefault();

   
        

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photo,
            username: user.displayName,
            image: '',
            id: user.uid,
        
        })

        setInput('')
        setImageUrl('')

    };

    return (
        <div className='send_post'> 
            <div className='send_post_top'>
            <Avatar src={user.photo}/>
            <div>
                <h3>{user.displayName}</h3>
                <div><p>Tehnologije za podrsku tehnickom pisanju</p> </div>
            </div>
            </div>
            <div className='send_post_middle'>
                <form>
                <TextField value={input}
                    onChange={(e) => setInput(e.target.value)} multiline id="standard-basic" label="Post Something!" className='txta'/>
                    </form>
            </div>
            <div className='send_post_bottom'>
            <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <input type="file" onChange={onChange}/>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
      </label>
    </div>
    <Button onClick={handleSubmit}
    disabled={!input} type='submit'
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon>send</SendIcon>}
      >
        Send
      </Button> 
                
            </div>

        </div>
    )
}

export default SendPost
