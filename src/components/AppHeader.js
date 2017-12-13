import React, {Component} from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {
  Container,
  Button,
  Header,
  Body,
  Left,
  Right,
  Icon
} from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Image
            style={{
            width: 35,
            height: 35
          }}
            source={{
            uri: 'https://lh3.googleusercontent.com/CbNSAdgtQnP3Gs8qgXQ37v7q1Uq5Ln4FMDL3k34eu9Fwvvl3hJ6B3Tft-wtW0UKUVg=w300'
          }}/>
        </Left>
        <Body>
          <Text style={styles.titleText}>Contact Apps</Text>
        </Body>
        <Right>
          <Icon name="search" style={{
            color: 'white'
          }}></Icon>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }

});