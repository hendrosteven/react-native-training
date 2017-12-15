import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Container, Content, Spinner} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Home from './src/components/pages/Home';
import AddUser from './src/components/pages/AddUser';
import SearchUser from './src/components/pages/SearchUser';
import DetailUser from './src/components/pages/DetailUser';
import DinamicText from './src/components/pages/DinamicText';
import TakePicture from './src/components/pages/TakePicture';
import OneSignal from 'react-native-onesignal';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar="true">
          <Scene key="home" component={Home} title="Home" initial={true}/>
          <Scene key="addUser" component={AddUser} title="Add User"/>
          <Scene key="searchUser" component={SearchUser} title="Search User"/>
          <Scene key="detailUser" component={DetailUser} title="Detail User"/>
          <Scene key="dinamicText" component={DinamicText} title="Dinamic Text Input"/>
          <Scene key="takePicture" component={TakePicture} title="Take Picture"/>
        </Scene>
      </Router>
    );
  }

  componentWillMount() {
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('registered', this.onRegistered);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('registered', this.onRegistered);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onRegistered(notifData) {
    console.log("Device had been registered for push notifications!", notifData);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
}
