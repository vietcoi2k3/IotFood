import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../components/Home/HomeComponent';
import ProfileComponent from '../components/Profile/ProfileComponent';
import Notifications from '../components/Notification/NotificationsComponent';
import CartComponent from '../components/Cart/CartComponent'
import Icon from 'react-native-vector-icons/MaterialIcons';
import SuccessLoading from './SuccessLoading';
import {View} from 'react-native';
import HomeScreen from './HomeScreen';
import { useState,useEffect } from 'react';

const Tab = createMaterialBottomTabNavigator();

function MainScreen({}) {
    
    return ( 
        <Tab.Navigator
        activeColor="#4e399e"
        barStyle={{backgroundColor: "rgb(229 ,229,229)",height: 48 }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
            tabBarStyle: { display: 'none' }
          }}
          // initialParams={{ onDataReceived: handleDataFromChild }}
        />
         <Tab.Screen
          name = 'Cart'
          component={CartComponent}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="shopping-cart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name = 'Notifications'
          component={Notifications}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="notifications" color={color} size={26} />
            ),
            tabBarStyle: { display: 'none' }
          }}
        />
        <Tab.Screen
          name = 'Profile'
          component={ProfileComponent}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
     );
}

export default MainScreen;