/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/components/login';
import Register from './src/components/Register';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component ={Login}  />
          <Stack.Screen name="Sign in" component ={Register}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}





export default App;