import React, {useState, useEffect} from 'react'
import Class from './Class'
import AddClassButton from './AddClassButton'
import './Classes.css'
import db from './firebase';
import firebase from 'firebase'


function Classes() {

    const [addedClasses, setAddedClasses] = useState([]);

    useEffect(() => {
      db.collection('addedClasses').where('student', '==', 'salko@gmail.com').onSnapshot(snapshot => {
        setAddedClasses(snapshot.docs.map(doc => doc.data()))
      })
    }, [])

    return (
        <div className='classes'>
            <AddClassButton/>
            <div className='attendingClasses'>
           
            {
          addedClasses.map(res => (
            <Class name={res.classA} isAdded='added'/>
            
          ))
        }
            </div>
        </div>
    )
}

export default Classes
