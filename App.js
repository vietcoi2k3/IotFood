/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text , StyleSheet,Image,TextInput,ScrollView,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/components/Login';
import Register from './src/components/Register';

import Color from './src/untils/color'



const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component ={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component ={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

const style = StyleSheet.create({
    text:{
      color:Color.red,
    }
})



export default App;