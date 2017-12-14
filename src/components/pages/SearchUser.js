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
    CardItem,
    Left,
    Icon,
    Item,
    Input,
    List,
    ListItem,
    Thumbnail,
    Right
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
        this.setState({onSearching: true, searchResult: []})
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
                    let photo = 'data:image/png;base64,' + user.photo;
                    return (
                        <ListItem key={user.id}>
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
                    <Item>
                        <Icon name="ios-people"/>
                        <Input placeholder="Search" onChangeText={(text) => this.updateText({text})}/>
                        <Icon name="ios-search" onPress={this.onStartSearch}/>
                    </Item>
                    <List>
                        {userList}
                    </List>
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
    }

});