import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import myImage from '../assets/img/Group_4.png';
import Color from '../untils/color';
import untils from '../untils/untils';
import AuthApi from '../api/AuthApi';
import ManagerApi from '../api/ManagerApi';
import InputSecure from "./InputSecure";

const Register = ({navigation}) => {
    const [name,setName] = useState("");

    const [maSv,setMaSv] =useState("");
    const [errMessMasv, setErrMessMasv] = useState("");
    const [errMasv, setErrMasv] = useState(false);

    const [phone,setPhone] = useState("");
    const [errMessPhone, setErrMessPhone] = useState("");
    const [errPhone, setErrPhone] = useState(false);

    const [pass, setPass] = useState("");
    const [errMessPass, setErrMessPass] = useState("");
    const [errPass, setErrPass] = useState(false);

    const [cfPass, setCfPass] = useState("");
    const [errMessCfPass, setErrMessCfPass] = useState("");
    const [errCfPass, setErrCfPass] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const[sm,md]=untils.calculateScreenSizes()

    const handleRegister = async ()=>{
        if(!errMasv && !errPass && !errPhone && !errCfPass){
        const apiUrl = AuthApi.register
        const dataToSend = {
           "username": maSv,
           "password": pass,
           "sdt" : phone,
           "AccountName": name
        }
        ManagerApi.post(apiUrl,dataToSend)
        .then(response => {
            if (response.data.status === true) {
                setIsLoading(true)
                // navigation.navigate('Home')
            }
        })
        .catch(error => {
            console.error('Error sending POST request:', error);
        });
        }else {
            console.log("Khong hop le");
        }
    }

    return (
        <ScrollView className="flex-1 mx-4 my-4 flex">
            {/* Phần logo và tiêu đề */}
            <View className ='mx-auto my-auto underline'>
                <Image source={myImage} className='object-cover rounded-full'/>
                <Text className={` font-bold text-4xl ${Color.textBold}`}>Tạo tài khoản </Text>
                <Text className={`${Color.textBlur} text-base pb-2`}>Quy trình nhanh gọn, bảo mật</Text>
            </View>

            {/* Phần thông tin cá nhân */}
            <View className="mt-2">
            <Text className='font-bold text-base ${Color.textBold}'>Thông tin cá nhân: </Text>
                <TextInput 
                    placeholder='Họ và tên' 
                    className={`placeholder:text-slate-400 block bg-white w-full border border-slate-300  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800'  focus:ring-sky-500 focus:ring-1 sm:text-sm mb-4`}
                    onChangeText={(e)=> {
                        setName(e)
                    }}
                    value={name}
                />
                {/* <Text className='text-[#ed1818]'>{errMessMasv}</Text> */}
                <TextInput 
                    placeholder='Nhập mã sinh viên' 
                    className={`placeholder:text-slate-400 block bg-white w-full border ${errMasv? "border-[#ed1818]" : "border-slate-300"}  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800'  focus:ring-sky-500 focus:ring-1 sm:text-sm`}
                    onChangeText={(e)=> {
                        untils.validateMaSV(e,setErrMessMasv,setErrMasv);
                        setMaSv(e)
                    }}
                    value={maSv}
                />
                <Text className='text-[#ed1818]'>{errMessMasv}</Text>

                <TextInput 
                    placeholder='Số điện thoại' 
                    className={`placeholder:text-slate-400 block bg-white w-full border ${errPhone? "border-[#ed1818]" : "border-slate-300"}  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800'  focus:ring-sky-500 focus:ring-1 sm:text-sm`}
                    onChangeText={(e)=> {
                        untils.validatePhone(e,setErrPhone,setErrMessPhone)
                        setPhone(e)
                    }}
                    value={phone}
                />
                <Text className='text-[#ed1818]'>{errMessPhone}</Text>
            </View>

            {/* Phần mật khẩu */}
            <View>
                <Text className={'font-bold text-base ${Color.textBold}'}>Mật khẩu:</Text>
                <InputSecure placeholder={"Mật khẩu"} setErrMess={setErrMessPass} setErr={setErrPass} err={errPass} errMess={errMessPass} value={pass} setValue={setPass}/>
                <InputSecure placeholder={"Xác nhập lại mật khẩu"} setErrMess={setErrMessCfPass} setErr={setErrCfPass} err={errPass} errMess={errMessCfPass} value={cfPass} setValue={setCfPass}/>
            </View>

            {/* Nút đăng kí */}
            <TouchableOpacity 
            className={`bg-[#4e399e] p-2 rounded w-full`}
            onPress={handleRegister}
            >
                <Text className={`text-white text-lg font-semibold text-center`}>Đăng kí</Text>
            </TouchableOpacity>

            {/* Chú thích về tác giả */}
            <View>
                <Text className={`text-center ${Color.textBlur} text-xs mt-1 ${sm?"mt-1":""} ${md?"mt-28":""}`}>Vận Hành Bởi IOT-SOUP 2023</Text>
            </View>
       </ScrollView>
    )
}

export default Register;
