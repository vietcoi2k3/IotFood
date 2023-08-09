import AsyncStorage from "@react-native-async-storage/async-storage";
import {View,Text,Image,TouchableOpacity} from "react-native"
import { Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import Info from "../../assets/img/Info.png";
import ImageInfo from "../../assets/img/ImageInfo.png"
import Color from "../../untils/color";
import Icon from 'react-native-vector-icons/MaterialIcons';
import untils from "../../untils/untils";
import UserApi from '../../api/UserApi'
import React,{useEffect,useState} from "react"
import AuthApi from '../../api/AuthApi';
import ManagerApi from '../../api/ManagerApi';


const [sm, md] = untils.calculateScreenSizes()

function ProfileComponent() {
    const navigation = useNavigation();
    const handleLogOut =async ()=>{
        await AsyncStorage.removeItem('AccessToken')
        navigation.replace('Login')
    }
    const [dataInfo, setDataInfo] = useState([{}])
    useEffect(()=>{
        const getInfo=async ()=>{
          console.log("********************************")
          const response = await ManagerApi.get(UserApi.getUserInfoApi)
          .then(response =>{
              setDataInfo(response.data.data)
            console.log(response.data);
          })
          .catch(err =>{
              console.log("error:"+err)
          })
        }
        getInfo()
      },[])
    return (
        <View className='mx-4 my-4 flex-1'>
            <View className='mx-auto my-auto underline'>
                <Image source={Info} className='object-cover rounded-full mx-auto my-auto ' />
                <Text className={` font-bold text-3xl ${Color.textBold}`}>Cá nhân</Text>
            </View>
            <View className = 'flex flex-row items-center justify-between bg-neutral-200 rounded-xl max-h-20 mb-2'>
                <View className="mx-6 my-6">
                    <Image source={ImageInfo} className="h-14 w-16"/>
                </View>
                <View className="mr-2">
                    <Text className="text-lg text-slate-950 font-semibold">{dataInfo.accountName}</Text>
                    <Text>{`${dataInfo.username} | ${dataInfo.std} `}</Text>
                </View>
                <View className ='mr-4'>
                    <Icon name ='edit' size={28} color="gray"/>
                </View>
            </View>
            <Text className={`text-lg text-slate-950 font-semibold`}>Cài đặt</Text>
            <View>
                <View className="bg-neutral-200 rounded-xl min-h-20 mb-2 px-3 py-3 ">
                    <Text className={`text-base text-slate-950 font-semibold `}>Thông báo: đang bật</Text>
                    <Text>Bấm để tắt(không khuyến khích)</Text>
                </View>
                <View className="bg-neutral-200 rounded-xl min-h-20 mb-2 px-3 py-3 ">
                    <Text className={`text-base text-slate-950 font-semibold `}>Nền tối tự động: đang bật</Text>
                    <Text>Bấm để tắt</Text>
                </View>
                <View className="bg-neutral-200 rounded-xl min-h-20 mb-2 px-3 py-3 ">
                    <Text className={`text-base text-slate-950 font-semibold `}>Lịch sử đặt đơn của bạn: đang bật</Text>
                    <Text>Bấm để tra cứu</Text>
                </View>
                <View className="bg-neutral-200 rounded-xl min-h-20 mb-2 px-3 py-3 ">
                    <Text className={`text-base text-slate-950 font-semibold `}>Câu hỏi thường gặp về TLU: đang bật</Text>
                    <Text>Bấm để xem chi tiết</Text>
                </View>
            </View>
            <View className={`flex items-center ${sm ? 'mt-2' : ''} ${md ? 'mt-56' : ''}`}>
                <TouchableOpacity
                    className={`bg-[#4e399e] p-2 rounded-xl w-full`}
                    onPress={handleLogOut}
                >
                    <Text className={`text-white text-lg font-semibold text-center`}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>  );
}

export default ProfileComponent;