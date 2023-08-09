import {View,Text,Image} from "react-native"
import Color from '../../untils/color'
import untils from '../../untils/untils';
import { memo } from "react";
const [sm, md] = untils.calculateScreenSizes()



function DishComponent({imageDish,nameFood,nameRestaurantFood ="",price, isResult = false}) {
    return ( <View className="flex flex-row items-center bg-neutral-200 rounded-xl max-h-20 mb-2 shadow-md shadow-purple-400 ">
        <View className="basis-1/3">
            <Image source = {{ uri: `data:image/jpeg;base64,${imageDish}` }} className="object-cover h-16 w-20 left-4 " resizeMode="cover"/>
        </View>
        <Text className = {`basis-1/3 text-[#292929] text-xl font-semibold`} >{nameFood}</Text>
        <View className = "basis-1/3">
            { isResult || <Text className={`${Color.textBlur} text-sm`}>{nameRestaurantFood}</Text>}
            <Text className = {`text-[#000] text-base`}>{price} VND</Text>
        </View>
    </View> );
    
}

export default memo(DishComponent);