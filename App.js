/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text , StyleSheet,Image,TextInput,ScrollView,Button, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/components/Login/LoginComponent';
import Register from './src/components/Register/RegisterComponent';
import Home from "./src/components/Home/HomeComponent"

import Color from './src/untils/color'
import MainScreen from './src/screen/MainScreen';
import SuccessLoading from './src/screen/SuccessLoading';
import Search from "./src/components/Home/SearchComponent";



const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component ={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component ={Register} options={{ headerShown: false }} />
          <Stack.Screen name="MainScreen" component ={MainScreen} options={{ headerShown: false }} />
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