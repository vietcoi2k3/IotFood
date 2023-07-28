import {View,Text, Image,ScrollView,TextInput,TouchableOpacity} from 'react-native'
import clock from '../assets/img/clock.png'
import Color from '../untils/color'
import Icon from 'react-native-vector-icons/MaterialIcons';
import DishComponent from "./DishComponent"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();


const Home = ()=>{
    return(
        <ScrollView className='mx-4 my-4 flex-1'>
            <View className='mx-auto my-auto underline'>
                <Image source={clock} className='object-cover rounded-full mx-auto my-auto ' />
                <Text className={` font-bold text-3xl ${Color.textBold}`}>Giờ nghỉ trưa tới rồi!</Text>
            </View>
            <View className='relative mt-4'>
                <TextInput
                    placeholder={"Tìm kiếm"}
                    className={`placeholder:text-slate-950 block bg-neutral-200 w-full border  border-slate-300 rounded-3xl py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800'  focus:ring-sky-500 focus:ring-1 text-base`}
                />
                <TouchableOpacity
                    className='absolute right-2 top-3.5'
                >
                <Icon name={ 'search'} size={24} color="gray" />
                </TouchableOpacity>
            </View>
            <View className='mt-2'>
                <Text className={`text-lg text-slate-950 font-semibold`}>Dành cho bạn: </Text>
                <ScrollView className="h-52"  showsVerticalScrollIndicator>
                    <DishComponent/>
                    <DishComponent/>
                    <DishComponent/>
                    <DishComponent/>
                    <DishComponent/>
                    <DishComponent/>
                </ScrollView>
            </View>
            <View>
                <Text className={`text-lg text-slate-950 font-semibold`}>Bộ lọc: </Text>
                <View className="flex flex-row gap-2 items-center justify-between">
                    <TouchableOpacity className="bg-neutral-200 px-8 py-3 rounded-3xl">
                        <Text className={`text-center ${Color.textBold}`}>Xếp hạng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-neutral-200 px-8 py-3 rounded-3xl">
                        <Text className="text-center">Từng đặt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-neutral-200 px-8 py-3 rounded-3xl">
                        <Text className="text-center">Đề xuất</Text>
                    </TouchableOpacity>

                </View>
                <View className={"mt-6"}>
                    <TouchableOpacity className="w-48 bg-neutral-200 px-4 py-3 rounded-3xl mt-4 bg-[#4e399e] mx-auto my-auto">
                        <Text className="text-white text-xl font-bold text-center">Ăn gì cũng được</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </ScrollView>
    )
}

export default Home;