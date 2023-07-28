import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../components/HomeComponent';
import ProfileComponent from '../components/ProfileComponent';
import Notifications from '../components/NotificationsComponent';
import CartComponent from '../components/CartComponent'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();

function MainScreen() {
    return ( 
        <Tab.Navigator
        // initialRouteName="Feed"
        activeColor="#4e399e"
        barStyle={{backgroundColor: "rgb(229 ,229,229)",height: 48 }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ()=>null,
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
         <Tab.Screen
          name = 'Cart'
          component={CartComponent}
          options={{
            tabBarLabel: ()=>null,
            tabBarIcon: ({ color }) => (
              <Icon name="shopping-cart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name = 'Notifications'
          component={Notifications}
          options={{
            tabBarLabel: ()=>null,
            tabBarIcon: ({ color }) => (
              <Icon name="notifications" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name = 'Profile'
          component={ProfileComponent}
          options={{
            tabBarLabel: ()=>null,
            tabBarIcon: ({ color }) => (
              <Icon name="person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
     );
}

export default MainScreen;