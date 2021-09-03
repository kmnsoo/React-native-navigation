//MainScreen.js
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MainScreen extends Component { 
    render() { 
        return ( 
        <View>
             <Text style={{fontSize:30}}>Main Screen!!</Text>
              <Button onPress={() => this.goMainScreen()} title='Detail Screen 으로 이동'/> 
              </View> 
              ); 
            }
            
    goMainScreen(){ 
        // DetailScreen으로 화면 이동 
        this.props.navigation.navigate('DETAIL');
     } 
    }

