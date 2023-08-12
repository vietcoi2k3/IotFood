import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../components/Home/SearchComponent';
import Home from '../components/Home/HomeComponent';
import Result from '../components/Home/ResultComponent';
import { useState,useEffect } from 'react';
import Restaurant from '../components/Home/RestaurantComponent';
// import Rating from '../components/Home/RatingComponent';

const HomeStack = createNativeStackNavigator();

function HomeScreen({route}) {
    return ( 
      <HomeStack.Navigator initialRouteName="Home">
          <HomeStack.Screen name="Search" component ={Search} options={{ headerShown: false }}  />
          <HomeStack.Screen name="Result" component ={Result} options={{ headerShown: false }}  />
          <HomeStack.Screen name="Restaurant" component ={Restaurant} options={{ headerShown: false }}  />
          {/* <HomeStack.Screen name="Rating" component ={Rating} options={{ headerShown: false }} /> */}
          <HomeStack.Screen name="Home" component ={Home} options={{ headerShown: false }} />
      </HomeStack.Navigator>
     );
}

export default HomeScreen;