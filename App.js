import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Container, Content, Spinner} from 'native-base';
import UserList from './src/components/UserList';
import AppHeader from './src/components/AppHeader';
import AppFooter from './src/components/AppFooter';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch("https://reqres.in/api/users?page=3", {method: "GET"})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          isLoading: false,
           users: responseData.data
        })
    }).done();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Container>
          <AppHeader/>
          <Content>
            <View style={styles.center}>
              <Spinner color='red'/>
            </View>
          </Content>
          <AppFooter/>
        </Container>
      );
    }
    return (
      <Container>
        <AppHeader/>
        <Content>
          <UserList users={this.state.users}/>
        </Content>
        <AppFooter/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  center: {    
    flex: 1,
    marginTop:200,
    justifyContent: 'center',
    alignItems:'center'
  }
})