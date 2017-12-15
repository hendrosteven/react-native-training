import React, {Component} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {
    Container,
    Button,
    Header,
    Body,
    Left,
    Right,
    Icon,
    Content,
    List,
    ListItem
} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class DetailUser extends Component {
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
                        <Text style={styles.titleText}>Detail User</Text>
                    </Body>
                </Header>
                <Content>
                    <Image
                        style={{
                        width: '100%',
                        height: 200
                    }}
                        source={{
                        uri: 'data:image/png;base64,' + this.props.user.photo
                    }}/>
                    <View
                        style={{
                        marginHorizontal: 10
                    }}>
                        <Text
                            style={{
                            fontWeight: 'bold',
                            fontSize: 18
                        }}>Full Name :
                        </Text>
                        <Text
                            style={{                    
                            fontSize: 18
                        }}>{this.props.user.fullName}</Text>
                        
                        <Text
                            style={{
                            fontWeight: 'bold',
                            fontSize: 18
                        }}>Phone :
                        </Text>
                        <Text
                            style={{                    
                            fontSize: 18
                        }}>{this.props.user.phone}</Text>
                        
                        <Text
                            style={{
                            fontWeight: 'bold',
                            fontSize: 18
                        }}>Email :
                        </Text>
                        <Text
                            style={{                    
                            fontSize: 18
                        }}>{this.props.user.email}</Text>
                        
                        <Text
                            style={{
                            fontWeight: 'bold',
                            fontSize: 18
                        }}>Address :
                        </Text>
                        <Text
                            style={{                    
                            fontSize: 18
                        }}>{this.props.user.address}</Text>
                    </View>
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