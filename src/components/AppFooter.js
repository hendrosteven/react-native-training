import React, {Component} from 'react';
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';

export default class AppFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Add New User</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
