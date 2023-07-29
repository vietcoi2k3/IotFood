import { View, Text, StyleSheet, Image, TextInput, ScrollView, Button, TouchableOpacity, Dimensions } from 'react-native';
import 'react-native-gesture-handler'
import myImage from '../assets/img/Group_4.png'
import Color from '../untils/color'
import untils from '../untils/untils'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthApi from '../api/AuthApi';
import ManagerApi from '../api/ManagerApi';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
    //    useEffect(()=>{
    //     if(AsyncStorage.getItem("AccessToken")){
    //         navigation.replace('Home')
    //     }
    //    },[])
    const [maSv, setMaSv] = useState("");
    const [pass, setPass] = useState("");
    const [errMessMasv, setErrMessMasv] = useState("");
    const [errMessPass, setErrMessPass] = useState("");
    const [errMasv, setErrMasv] = useState(false);
    const [errPass, setErrPass] = useState(false);
    const [sm, md] = untils.calculateScreenSizes()
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        const urlApi = AuthApi.login
        setIsLoading(true)
        const dataToSend = {
            "username": maSv,
            "password": pass,
        }
        const response = ManagerApi.post(urlApi, dataToSend)
       
            .then(response => {
                if (response.data.status === true) {
                    AsyncStorage.setItem("AccessToken", response.data.data)
                    setIsLoading(true)
                    navigation.replace('Home')
                }
            })
            .catch(error => {
                console.error('Error sending POST request:', error);
            });
    }
    //loading page
    if (isLoading) {
        return (
            <View>
                <Text>Đang load</Text>
            </View>
        )
    }
    return (
        <ScrollView className='mx-4 my-4 flex-1'>
            <View className='mx-auto my-auto underline'>
                <Image source={myImage} className='object-cover rounded-full' />
                <Text className={` font-bold text-4xl ${Color.textBold}`}>Chào Mừng!</Text>
                <Text className={`${Color.textBlur} text-base pb-4`}>Vui lòng đăng nhập & đăng kí</Text>
            </View>
            <View className='mb-8'>
                <Text className='font-bold text-base ${Color.textBold}'>Mã sinh viên: </Text>
                <TextInput
                    placeholder='Nhập mã sinh viên'
                    className={`placeholder:text-slate-400 block bg-white w-full border ${errMasv ? "border-[#ed1818]" : "border-slate-300"}  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800'  focus:ring-sky-500 focus:ring-1 sm:text-sm`}
                    onChangeText={(e) => {
                        untils.validateMaSV(e, setErrMessMasv, setErrMasv);
                        setMaSv(e)
                    }}
                    value={maSv}
                />
                <Text className='text-[#ed1818]'>{errMessMasv}</Text>
                <Text className='font-bold text-base ${Color.textBold}'>Mật khẩu: </Text>
                <TextInput
                    placeholder='Nhập mật khẩu'
                    className={`placeholder:text-slate-400 block bg-white w-full border ${errPass ? "border-[#ed1818]" : "border-slate-300"}  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800'  focus:ring-sky-500 focus:ring-1 sm:text-sm`}
                    onChangeText={(e) => {
                        untils.validatePass(e, setErrMessPass, setErrPass)
                        setPass(e)
                    }}
                    value={pass}
                />
                <Text className='text-[#ed1818]'>{errMessPass}</Text>
            </View>

            <View className={`flex items-center justify-center `}>
                <TouchableOpacity
                    className={`bg-[#e45552] p-2 rounded w-full`}
                    onPress={handleLogin}
                >
                    <Text className={`text-white text-lg font-semibold text-center`}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>


            <View className={`flex items-center ${sm ? 'mt-28' : ''} ${md ? 'mt-56' : ''}`}>
                <TouchableOpacity
                    className={`bg-[#4e399e] p-2 rounded w-full`}
                    onPress={() => {
                        navigation.navigate('Register')
                    }}
                >
                    <Text className={`text-white text-lg font-semibold text-center`}>Tạo tài khoản mới</Text>
                </TouchableOpacity>
                <Text className={`text-center ${Color.textBlur} text-xs mt-1`}>Vận hành bởi IOT-SOUP 2023</Text>
            </View>

        </ScrollView>
    )
};




export default Login;
