import React from 'react'
import {Button} from '@material-ui/core'
import './Class.css'


function Class(props) {

    var styleButton = props.isAdded === 'added' ? 'contained' : 'outlined'



    return (
        <div>
            <Button className='not_added' variant={styleButton} color="primary">
                <p className={props.isAdded}>{props.name}</p>
            </Button>
        </div>
    )
}

export default Class