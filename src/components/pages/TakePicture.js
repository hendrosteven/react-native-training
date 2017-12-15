import React, {Component} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Camera from 'react-native-camera';

export default class TakePicture extends Component {

    takePicture(){      
        this
            .camera
            .capture()
            .then((data) => {               
                Actions.pop({refresh: {data}});
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                    this.camera = cam;
                }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text
                        style={styles.capture}
                        onPress={this
                        .takePicture
                        .bind(this)}>[CAPTURE]</Text>
                </Camera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});