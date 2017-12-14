import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
    Container,
    Content,
    Text,
    Card,
    Header,
    Body,
    Button,
    Title,
    CardItem,Item,Label,Input,
    Left, Icon, Footer,FooterTab
} from 'native-base';
import {Actions} from 'react-native-router-flux';


export default class AddUser extends Component {

    constructor(){
        super();
        this.state = {
            fullName: '',
            phone: '',
            email: '',
            address: ''
        }
    }

    onSaveUser = () => {
        console.log(this.state);
        fetch('https://contact-svr.herokuapp.com/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                    fullName: this.state.fullName,
                    phone: this.state.phone,
                    email: this.state.email,
                    address: this.state.address,
                    photo: ''
                })
            })
            .then(response => response.json())
            .then(responseJson => {
               console.log(responseJson);
            })
            .catch(error => {
                console.error(error);
            });;
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon
                            onPress=
                            {() => {Actions.pop(); }}
                            name="arrow-back"
                            style={{
                            color: 'white'
                        }}/>
                    </Left>
                    <Body>
                        <Text style={styles.titleText}>Add Users</Text>
                    </Body>
                </Header>
                <Content padder>
                    <Item floatingLabel>
                        <Label>Full Name</Label>
                        <Input onChangeText={(text) => this.setState({fullName:text})}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Phone</Label>
                        <Input onChangeText={(text) => this.setState({phone: text})}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input onChangeText={(text) => this.setState({email:text})}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Address</Label>
                        <Input onChangeText={(text) => this.setState({address:text})}/>
                    </Item>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full onPress={this.onSaveUser}>
                            <Text>Save User</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
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