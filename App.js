import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Products} from './Components/Products'
import {ProductDetails} from './Components/Productdetails'
import {Posts} from './Components/Posts'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

let StackNavigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name={'Products list'} component={Products} /> 
        <StackNavigator.Screen name={'Posts list'} component={Posts} />
        <StackNavigator.Screen name={'Product details'} component={ProductDetails} /> 
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
