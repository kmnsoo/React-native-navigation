//MainScreen.js

import React, { Component } from 'react'; 
import { View, Text, Button, TextInput } from 'react-native'; 

export default class MainScreen extends Component { 
    
    state={ 
        textInputValue:null
     } 
     state = {
        count: 0
      }
    
      onPress = () => {
        this.setState({
          count: this.state.count + 1
        })
      }
    render() { 
        return ( 
        <View>
             <Text style={{fontSize:30}}>Main Screen</Text>
              <TextInput style={{ backgroundColor: '#aaaaaa', borderRadius: 5, padding:5, margin:5 }} 
              onChangeText={(value) => this.setState({textInputValue: value})}/> 
              <Button onPress={() => this.goMainScreen()} title='Go Detail Screen'/> 
              </View>
               );
            } 
            
    goMainScreen(){
         this.props.navigation.navigate('DETAIL', {textInputValue:this.state.textInputValue}); 
        }
     }

