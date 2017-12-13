import React, {Component} from 'react';
import {
    List,
    Text,
    ListItem,
    Left,
    Thumbnail,
    Body,
    Right,
    Icon
} from 'native-base';

export default class UserList extends Component {

    constructor() {
        super();
    }
    render() {
        let userList;
        if (this.props.users) {
            userList = this
                .props
                .users
                .map(user => {
                    return (
                        <ListItem key={user.id}>
                            <Thumbnail
                                square
                                size={80}
                                source={{
                                uri: user.avatar
                            }}/>
                            <Body>
                                <Text>{user.first_name} {user.last_name}</Text>
                                <Text note>Other text here, just for example</Text>
                            </Body>
                            <Right>
                                <Icon name="ios-arrow-forward"/>
                            </Right>
                        </ListItem>
                    );
                });
        }
        return (
            <List>
                {userList}
            </List>
        );
    }
}
