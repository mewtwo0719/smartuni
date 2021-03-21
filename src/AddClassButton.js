import React, {useState, useEffect} from 'react'
import {Button} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField';
import './AddClassButton.css'
import Class from './Class'
import db from './firebase';

function AddClassButton() {


    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
      db.collection('Predmeti').onSnapshot(snapshot => {
        setAllClasses(snapshot.docs.map(doc => doc.data()))
      })
    }, [])

    function filterClasses() {

        
        var classes = document.getElementsByClassName('notAdded');
        var lists = document.getElementsByClassName('class')
        var txtValue;
        console.log(classes[0].innerHTML)
        var filter = document.getElementById('searchBox').value
   
              
        for (var i = 0; i < lists.length; i++) {
            var predmet = classes[i];
            txtValue = predmet.innerHTML;
            if (txtValue.toUpperCase().includes(filter.toUpperCase())) {
              
              lists[i].classList.remove('hidden')
            } else {
                lists[i].classList.add('hidden')
            }
          }

        
      }


    const addClassClick = () => {
        
        const addClasses = document.getElementsByClassName('add_classes')[0];
        if(addClasses.classList.contains('hidden')){
            addClasses.classList.remove('hidden')
            document.getElementsByClassName('addClassButton__add')[0].classList.add('add_button_clicked')}
            else{
            document.getElementsByClassName('addClassButton__add')[0].classList.remove('add_button_clicked')
            addClasses.classList.add('hidden') 
        }

    }

    return (
        <div className='addClassButton'>
            <Button color='primary' className='addClassButton__add' onClick={addClassClick}
            variant='contained'
            
            startIcon={<AddIcon fontSize='large'/>}>
            Add Class
            </Button>


            <div className='add_classes'>

            <TextField id="searchBox" label="Search Classes" onKeyUp={filterClasses}/>
        

            {
          allClasses.map(res => (      
            <li className='class'><Class isAdded='notAdded' name={res.imePredmeta}/></li>
          ))
        }
            
                </div>

           { document.querySelector('body').onload = function() {
                   addClassClick()
               }}

        </div>
    )
}

export default AddClassButton
