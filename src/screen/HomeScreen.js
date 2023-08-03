import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../components/SearchComponent';
import Home from '../components/HomeComponent';
import Result from '../components/ResultComponent';
import { useState,useEffect } from 'react';
import Restaurant from '../components/RestaurantComponent';

const HomeStack = createNativeStackNavigator();

function HomeScreen({route}) {
    // const [isLoading, setIsLoading] = useState(true);
    // const handleDataFromChild = (data)=>{
    //     console.log("1");
    //     console.log("data nhan"+ data)
    //     setIsLoading(data);
    // }
    // const { onDataReceived } = route.params; 
    // useEffect(() => {
    //     // Gọi hàm callback để truyền dữ liệu về TabNavigator (màn hình cha)
    //        onDataReceived(isLoading);
    //      }, [onDataReceived]);

    return ( 
      <HomeStack.Navigator initialRouteName="Home">
          <HomeStack.Screen name="Search" component ={Search} options={{ headerShown: false }}  />
          <HomeStack.Screen name="Result" component ={Result} options={{ headerShown: false }}  />
          <HomeStack.Screen name="Restaurant" component ={Restaurant} options={{ headerShown: false }}  />
          <HomeStack.Screen name="Home" component ={Home} options={{ headerShown: false }} />
      </HomeStack.Navigator>
     );
}

export default HomeScreen;