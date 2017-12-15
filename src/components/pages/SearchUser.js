import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {
    Container,
    Content,
    Text,
    Card,
    Header,
    Body,
    Button,
    Title,
    CardItem,
    Left,
    Icon,
    Item,
    Input,
    List,
    ListItem,
    Thumbnail,
    Right, Spinner
} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class AddUser extends Component {

    constructor() {
        super();
        this.state = {
            text: '',
            searchResult: [],
            onSearching: false
        }
    }

    updateText(e) {
        this.setState({text: e.text})
    }

    onStartSearch = () => {
        this.setState({onSearching: true, searchResult: [], isFound:true})
        fetch('https://contact-svr.herokuapp.com/contact/search', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({searchKey: this.state.text})
            })
            .then(response => response.json())
            .then(responseJson => {
               
                this.setState({searchResult: responseJson, onSearching: false})
            })
            .catch(error => {
                console.error(error);
            });;
    }

    render() {
        let userList;
        if (this.state.searchResult) {
            userList = this
                .state
                .searchResult
                .map(user => {
                    if(user.photo){
                        photo = 'data:image/png;base64,' + user.photo;
                    }else{
                        photo = 'https://www.ntw.nhs.uk/content/uploads/2016/07/male-fallback.jpg';
                    }
                    return (
                        <ListItem key={user.id} style={styles.listStyle}>
                            <Thumbnail
                                square
                                size={100}
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

        return (
            <Container>
                <Header searchBar rounded>
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
                        <Text style={styles.titleText}>Search Users</Text>
                    </Body>
                </Header>
                <Content>
                    <Item style={{paddingHorizontal:10}}>
                        <Icon name="ios-people"/>
                        <Input placeholder="Search" onChangeText={(text) => this.updateText({text})}/>
                        <Icon name="ios-search" onPress={this.onStartSearch}/>
                    </Item>
                    <List>
                        {userList}
                    </List>                    
                    {
                        this.state.onSearching 
                        ? <View>
                            <Spinner color='red'/>
                          </View>
                        : <View></View>
                    }
                    {
                        this.state.searchResult.length<=0 
                        ? <View style={{paddingHorizontal:20}}><Text>No record found</Text></View>
                        : <View></View>
                    }
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    listStyle:{
        width:'100%',
        marginLeft: 0,
        marginRight: 0,
        paddingHorizontal: 10
    }

});