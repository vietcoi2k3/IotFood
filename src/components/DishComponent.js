import {View,Text,Image} from "react-native"
import noodle from "../assets/img/Pho.png"
import Color from '../untils/color'

function DishComponent() {
    return ( <View className="flex flex-row items-center bg-neutral-200 rounded-xl max-h-20 mb-2 shadow-md shadow-purple-400 ">
        <View className="basis-1/3">
            <Image source = {noodle} className="object-cover h-16 w-20 left-4 " resizeMode="cover"/>
        </View>
        <Text className = {`basis-1/3 text-[#292929] text-xl font-semibold`} >Phở tái gầu</Text>
        <View className = "basis-1/3">
            <Text className={`${Color.textBlur} text-sm`}>Quán Chú Tiểu</Text>
            <Text className = {`text-[#000] text-base`}>30.000 VND</Text>
        </View>
    </View> );
}

export default DishComponent;