import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase'
import './Post.css'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Post(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  var cross = document.getElementsByClassName('deleteIcon');

  for(var i = 0; i < cross.length; i++){
    cross[i].addEventListener('click', (e) => {
      e.stopPropagation()
      let id = e.target.getAttribute('data-id')
      db.collection('posts').doc(id).delete()
    })
  } 



  return (
    <Card data-id = {props.id} className={`${classes.root} post`}>
      <CardHeader
        avatar={
          <Avatar src={props.profilePic} aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <DeleteForeverIcon data-id ={props.id} className='deleteIcon'/>
          </IconButton>
        }
        title={props.username}
        subheader= {new Date(props.timestamp?.toDate()).toLocaleString()}
      />


      {
        props.image == '' ? console.log('a')
      : <CardMedia
      className={classes.media}
      image={props.image}
      title="Paella dish"/>
      }
      



      <CardContent>
        <Typography  component="p">
          {props.message}
        </Typography>
      </CardContent>


    </Card>
  );
}


export default Post