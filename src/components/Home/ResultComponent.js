import {View,ScrollView,Text,Image,TextInput,TouchableOpacity} from 'react-native'
import clock from "../../assets/img/clock.png"
import Color from '../../untils/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pho from "../../assets/img/Pho.png"

import untils from '../../untils/untils';
import DishComponent from '../Extra/DishComponent';

const [sm, md] = untils.calculateScreenSizes()
function Result({navigation}) {
    return (
        <ScrollView className='mx-4 my-4 flex-1'>
            <View className='mx-auto my-auto underline'>
                <Image source={clock} className='object-cover rounded-full mx-auto my-auto ' />
                <Text className={` font-bold text-3xl ${Color.textBold}`}>Tìm kiếm "bún"</Text>
            </View>
                <View className='relative mt-4'>
                <TextInput
                    placeholder={"Tìm kiếm"}
                    className={`placeholder:text-slate-950 block bg-neutral-200 w-full border  border-slate-300 rounded-3xl py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800'  focus:ring-sky-500 focus:ring-1 text-base`}
            />
                <TouchableOpacity
                    className='absolute right-2 top-3.5'>
                        <Icon name={ 'search'} size={24} color="gray" />
                </TouchableOpacity>
            </View >
                    
            <View className="flex flex-row gap-2 items-center justify-between mt-4">
                <TouchableOpacity className="bg-neutral-200 px-8 py-3 rounded-3xl">
                        <Text className={`text-center ${Color.textBold}`}>Gần đây</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-neutral-200 px-8 py-3 rounded-3xl">
                        <Text className="text-center">Quán mới</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-neutral-200 px-8 py-3 rounded-3xl">
                        <Text className="text-center">Giảm giá</Text>
                </TouchableOpacity>
            </View>
            <View className={"mt-2"}>
                <View className="flex flex-row justify-between">
                    <View> 
                        <Text className={`text-lg text-slate-950 font-semibold`}>Bún 80 Linh Đàm</Text>
                        <Text  className={`text-sm`}>1.5km|4.5sao</Text>
                    </View>
                    <TouchableOpacity className=" items-center" onPress={()=>navigation.navigate("Restaurant")}>
                        <Text className={`text-center text-slate-950 bg-neutral-200 px-2 py-2 rounded-lg`}>Xem</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="h-40 mt-2">
                    <DishComponent imageDish ={Pho} nameFood={"Pho tai bo"} price ={'30.000'} isResult = {true}/>
                    <DishComponent imageDish ={Pho} nameFood={"Pho tai bo"} price ={'30.000'} isResult = {true}/>
                </ScrollView>
            </View>
            
            <View className={`${sm ? 'mt-16' : ''} ${md ? 'mt-14' : ''}`}>
            <TouchableOpacity className="w-48 bg-neutral-200 px-4 py-3 rounded-3xl mt-4 bg-[#4e399e] mx-auto my-auto">
                <Text className="text-white text-xl font-bold text-center">Ăn gì cũng được</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      );
}

export default Result;