import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../components/HomeComponent';
import ProfileComponent from '../components/ProfileComponent';
import Notifications from '../components/NotificationsComponent';
import CartComponent from '../components/CartComponent'
import Icon from 'react-native-vector-icons/MaterialIcons';
import SuccessLoading from './SuccessLoading';
import {View} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

function MainScreen({isLoading}) {
  // if (isLoading) {
  //   return <SuccessLoading/>
  // }
    return ( 
        <Tab.Navigator
        initialRouteName="SuccessLoading"
        activeColor="#4e399e"
        barStyle={{backgroundColor: "rgb(229 ,229,229)",height: 48 }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
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