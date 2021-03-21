import React from 'react'
import Classes from './Classes'
import Posts from './Posts'
import Notifications from './Notifications'
import './Main.css'

function Main() {
    return (
        <div className='main'>
            <Classes/>
            <Posts/>
            <Notifications/>
        </div>
    )
}

export default Main
