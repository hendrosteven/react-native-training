import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Container, Content, Spinner} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Home from './src/components/pages/Home';
import AddUser from './src/components/pages/AddUser';
import SearchUser from './src/components/pages/SearchUser';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar="true">
          <Scene key="home" component={Home} title="Home" initial={true}/>
          <Scene key="addUser" component={AddUser} title="Add User"/>
          <Scene key="searchUser" component={SearchUser} title="Searcj User"/>
        </Scene>
      </Router>
    );
  }
}

