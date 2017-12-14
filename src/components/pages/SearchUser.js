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
    Input
} from 'native-base';
import {Actions} from 'react-native-router-flux';
export default class AddUser extends Component {
    render() {
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
                        <Text style={styles.titleText}>Contact Apps</Text>
                    </Body>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Item>
                                    <Icon name="ios-search"/>
                                    <Input placeholder="Search"/>
                                    <Icon name="ios-people"/>
                                </Item>
                                <Button full>
                                    <Text>Search</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                   
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