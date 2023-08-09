import {View,ScrollView,Text,Image,TextInput,TouchableOpacity} from 'react-native'
import clock from "../../assets/img/clock.png"
import Color from '../../untils/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';

import untils from '../../untils/untils';
import DishComponent from '../Extra/DishComponent';

const [sm, md] = untils.calculateScreenSizes()

function Rating({navigation}) {
    return ( <ScrollView className='mx-4 my-4 flex-1'>
    <View className='mx-auto my-auto underline'>
        <Image source={clock} className='object-cover rounded-full mx-auto my-auto ' />
        <Text className={` font-bold text-3xl ${Color.textBold}`}>Bún 80 Linh Đàm</Text>
    </View>
    <View className="flex flex-row mt-4 justify-between">
    <View className="basis-1/4">
        <TouchableOpacity className="bg-neutral-200 py-4 px-2 rounded-3xl"
                          onPress={()=>navigation.goBack()}
        >
            <Text className={`${Color.textBold} text-center font-semibold`}>Quay về</Text>
        </TouchableOpacity>
    </View>
        <View className='relative  basis-2/3'>
            <TextInput
                placeholder={"Tìm kiếm trong quán"}
                className={`placeholder:text-slate-950 block bg-neutral-200 w-full border  border-slate-300 rounded-3xl py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800'  focus:ring-sky-500 focus:ring-1 text-base`}
            />
            <TouchableOpacity
                className='absolute right-2 top-3.5'>
                    <Icon name={ 'search'} size={24} color="gray" />
            </TouchableOpacity>
    </View >
    </View>

            
    <View className="flex flex-row gap-2 items-center justify-between mt-4">
        <TouchableOpacity className="bg-neutral-200 px-8 py-3 rounded-3xl">
                <Text className={`text-center`}>Món hot</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-neutral-200 px-8 py-3 rounded-3xl">
                <Text className="text-center">Ưu đãi</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#e45552] px-8 py-3 rounded-3xl">
                <Text className="text-center text-white">Đánh giá</Text>
        </TouchableOpacity>
    </View>

    <ScrollView className="h-52 mt-4 shadow-md shadow-purple-400">
        <View className="flex items-start bg-neutral-200 rounded-xl max-h-20 mb-2 px-4">
            <View className="flex flex-row justify-between">
            <Text className={`text-base text-slate-950 font-normal`}>Camapbeo</Text>
            <StarRating
                disabled={true} // Không cho người dùng thay đổi đánh giá
                maxStars={5} // Số sao tối đa
                rating={4.5} // Điểm đánh giá
                fullStarColor={'gold'} // Màu sao đầy
                emptyStarColor={'gray'} // Màu sao rỗng
                starSize={16}
            />
            </View>
            <Text className="text-sm">Nước chấm ngon, bún mềm, rau sống tơi. Tóm lại 10 điểm không có nhưng</Text>
        </View> 

        <View className="flex items-start bg-neutral-200 rounded-xl max-h-20 mb-2 px-4">
            <Text className={`text-base text-slate-950 font-normal`}>Camapbeo</Text>
            <StarRating
                disabled={true} // Không cho người dùng thay đổi đánh giá
                maxStars={5} // Số sao tối đa
                rating={4.5} // Điểm đánh giá
                fullStarColor={'gold'} // Màu sao đầy
                emptyStarColor={'gray'} // Màu sao rỗng
                starSize={16}
            />
            <Text>Nước chấm ngon, bún mềm, rau sống tơi. Tóm lại 10 điểm không có nhưng</Text>
        </View> 

        <View className="flex items-start bg-neutral-200 rounded-xl max-h-20 mb-2 px-4">
            <Text className={`text-base text-slate-950 font-normal`}>Camapbeo</Text>
            <StarRating
                disabled={true} // Không cho người dùng thay đổi đánh giá
                maxStars={5} // Số sao tối đa
                rating={4.5} // Điểm đánh giá
                fullStarColor={'gold'} // Màu sao đầy
                emptyStarColor={'gray'} // Màu sao rỗng
                starSize={16}
            />
            <Text>Nước chấm ngon, bún mềm, rau sống tơi. Tóm lại 10 điểm không có nhưng</Text>
        </View> 

        <View className="flex items-start bg-neutral-200 rounded-xl max-h-20 mb-2 px-4">
            <Text className={`text-base text-slate-950 font-normal`}>Camapbeo</Text>
            <StarRating
                disabled={true} // Không cho người dùng thay đổi đánh giá
                maxStars={5} // Số sao tối đa
                rating={4.5} // Điểm đánh giá
                fullStarColor={'gold'} // Màu sao đầy
                emptyStarColor={'gray'} // Màu sao rỗng
                starSize={16}
            />
            <Text>Nước chấm ngon, bún mềm, rau sống tơi. Tóm lại 10 điểm không có nhưng</Text>
        </View> 
    </ScrollView>
    <View className={"mt-2"}>
        <Text className={`${sm ? 'mt-8' : ''} ${md ? 'mt-6' : ''} text-slate-950 mx-auto`}>1.5km|4.5sao|25khach</Text>
    </View>
    
    <View className={`${sm ? 'mt-2' : ''} ${md ? 'mt-6' : ''}`}>
    <TouchableOpacity className="w-48 bg-[#6e6e6e]  py-3.5 rounded-3xl mt-4 mx-auto my-auto">
        <Text className="text-white text-xl font-bold text-center">Đặt đơn</Text>
    </TouchableOpacity>
    </View>
</ScrollView> );
}

export default Rating;