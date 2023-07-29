import AsyncStorage from "@react-native-async-storage/async-storage";
import {View,Text} from "react-native"
import { Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';


function ProfileComponent() {
    const navigation = useNavigation();
    const handleLogOut =async ()=>{
        await AsyncStorage.removeItem('AccessToken')
        navigation.replace('Login')
    }
    return (
    <View>
        <Text>InfoComponent</Text>
        <Button className={`mx-xl my-2xl bg-[#000]`} onPress={handleLogOut}>Đăng xuất</Button>
    </View>  );
}

export default ProfileComponent;