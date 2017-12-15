import React, {Component} from 'react';
import {AppRegistry, View, Text, Button, TextInput} from 'react-native';

export default class DinamicText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: []            
        }
    }
    addTextInput = (key) => {
        let input = this.state.textInput;
        input.push(<TextInput key={key} onChangeText={(text)=>{
           console.log(text);
        }}/>);       
        this.setState({textInput: input});
    }

    viewData = () =>{
        this.state.textValue.map((data)=>{
            console.log(data);
        });
    }

    render() {
        return (
            <View>             
                <Button
                    title='+'
                    onPress={() => this.addTextInput(this.state.textInput.length)}/> 
                    {this
                    .state
                    .textInput
                    .map((value) => {
                        return value
                    })}
            </View>
        )
    }
}