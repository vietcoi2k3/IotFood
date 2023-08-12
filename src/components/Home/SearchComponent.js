import {View,ScrollView,Text,Image,TextInput,TouchableOpacity} from 'react-native'
import clock from "../../assets/img/clock.png"
import Color from '../../untils/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import untils from '../../untils/untils';
import { useEffect, useState} from 'react';
import ManagerApi from '../../api/ManagerApi';
import UserApi from '../../api/UserApi';
import Result from './ResultComponent';

const [sm, md] = untils.calculateScreenSizes()

function Search({navigation}) {
    const [nameTypes, setNameTypes] = useState([]);
    const [valueSearch, setValueSearch] = useState("");

    useEffect(() => {
        const getType = async () => {
          try {
            const response = await ManagerApi.get(UserApi.getAllType);
            const typesData = response.data.data.map(type => type.nameType);
            setNameTypes(typesData);
          } catch (error) {
            console.log("error: " + error);
          }
        };
      
        getType();
      }, [])

      const handleSearch = async()=>{
        try{
        const response = await ManagerApi.get(UserApi.getSearchFood,
            {
                params: {
                    searchString: "bún"
                }
            }
        )
        console.log(response.data);
        navigation.navigate("Result");
        }
        catch (error) {
            console.log(error);
        }
      }
      
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
                value={valueSearch}
                onChange={(e)=>setValueSearch(e)}
            />
            <TouchableOpacity
                className='absolute right-2 top-3.5'
                onPress ={handleSearch}
            >
                    <Icon name={ 'search'} size={24} color="gray" />
            </TouchableOpacity>
        </View>
        <Text className={`text-lg text-slate-950 font-semibold mt-2`}>Phân loại:</Text>
        <View className="flex flex-row flex-wrap gap-y-2 mt-2">
            {nameTypes.map((type,index)=>{
                return (<TouchableOpacity className="w-48 bg-neutral-200 rounded-3xl mt-4 mx-auto my-auto w-5/12 p-2" key={index}>
                            <Text className={`${Color.textBold} text-base font-bold text-center`}>{type}</Text>
                        </TouchableOpacity>)
            })}
               
        </View>
        <View className={`${sm ? 'mt-40' : ''} ${md ? 'mt-14' : ''}`}>
            <TouchableOpacity className="w-48 bg-neutral-200 px-4 py-3 rounded-3xl mt-4 bg-[#4e399e] mx-auto my-auto">
                <Text className="text-white text-xl font-bold text-center">Ăn gì cũng được</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>);
}

export default Search;