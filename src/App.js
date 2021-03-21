import React, { useEffect, useState } from 'react';
import './App.css';
import Imessage from './Component/Imessage/Imessage';
import {createStore, combineReducers} from 'redux';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Login from './Component/Login/Login';
import { auth } from './firebase';
import Map from './Component/Map/map'
import Chat from './Component/Imessage/Imessage'
import Header from './Header'
import Main from './Main'
import { Button } from '@material-ui/core';
import userReducer from './features/userSlice'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
  <div className='app'>{user ? <div><Header/>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Main}>
          </Route>
          <Route path="/map" component={Map}>
           
          </Route>
          <Route path="/chat" component={Chat}>
           
          </Route>
        </Switch>
        
      </BrowserRouter>
    </div> : <Login />}
  
  </div>
  )
}

export default App;
