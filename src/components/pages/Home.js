import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Container,
    Spinner,
    Content,
    Icon,
    Text,
    Right,
    Card,
    Header,
    Body,
    Button,
    Title,
    CardItem,
    List,
    ListItem,
    Thumbnail,
    Footer,
    FooterTab
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

export default class Home extends Component {

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
        fetch("https://contact-svr.herokuapp.com/contact", 
        {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({isLoading: false, users: responseData})
        }).done();
    }

    render() {
        let userList;
        if (this.state.users) {
            userList = this
                .state
                .users
                .map(user => {
                    let photo = '';
                    if(user.photo){
                        photo = 'data:image/png;base64,' + user.photo;
                    }else{
                        photo = 'https://www.ntw.nhs.uk/content/uploads/2016/07/male-fallback.jpg';
                    }
                    return (
                        <ListItem onPress={()=>{
                            Actions.detailUser({user});
                        }}
                            key={user.id} style={styles.listStyle}>
                            <Thumbnail
                                square
                                size={80}
                                source={{
                                uri: photo
                            }}/>
                            <Body>
                                <Text>{user.fullName}</Text>
                                <Text note>{user.address}</Text>
                            </Body>
                            <Right>
                                <Icon name="ios-arrow-forward"/>
                            </Right>
                        </ListItem>
                    );
                });
        }

        if (this.state.isLoading) {
            return (
                <Container>
                    <AppHeader/>
                    <Content>
                        <View style={styles.center}>
                            <Spinner color='red'/>
                        </View>
                    </Content>
                </Container>
            );
        } else {
            return (
                <Container>
                    <AppHeader
                        searchUserHandler={() => {
                        Actions.searchUser();
                    }}/>
                    <Content>
                        <List>
                            {userList}
                        </List>
                    </Content>
                    <AppFooter
                        addUserHandler={() => {
                        Actions.addUser();
                    }}/>
                </Container>
            );
        }
    }

}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listStyle:{
        width:'100%',
        marginLeft: 0,
        marginRight: 0,
        paddingHorizontal: 10
    }
})