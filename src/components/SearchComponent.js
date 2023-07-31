import {View,ScrollView,Text,Image,TextInput,TouchableOpacity} from 'react-native'
import clock from '../assets/img/clock.png'
import Color from '../untils/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import untils from '../untils/untils';

const [sm, md] = untils.calculateScreenSizes()
const typeFood = ['Phở, bún, miến', 'Bánh mì', 'Đồ ăn vặt', 'Trà sữa, cà phê', 'Đồ cuốn','Bánh ngọt']
function Search() {
    return (    
    <ScrollView className='mx-4 my-4 flex-1'>
        <View className='mx-auto my-auto underline'>
            <Image source={clock} className='object-cover rounded-full mx-auto my-auto ' />
            <Text className={` font-bold text-3xl ${Color.textBold}`}>Hôm nay bạn ăn gì!</Text>
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
        </View>
        <Text className={`text-lg text-slate-950 font-semibold`}>Phân loại:</Text>
        <View className="flex flex-row gap-2 whitespace-pre-wrap">
            {typeFood.map((type,index)=>{
                return (<TouchableOpacity className="w-48 bg-neutral-200 px-2 py-3 rounded-3xl mt-4 mx-auto my-auto " key={index}>
                            <Text className={`${Color.textBold} text-base font-bold text-center`}>{type}</Text>
                        </TouchableOpacity>)
            })}
               
        </View>
        <View className={`${sm ? 'mt-48' : ''} ${md ? 'mt-14' : ''}`}>
            <TouchableOpacity className="w-48 bg-neutral-200 px-4 py-3 rounded-3xl mt-4 bg-[#4e399e] mx-auto my-auto">
                <Text className="text-white text-xl font-bold text-center">Ăn gì cũng được</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>);
}

export default Search;