import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import myImage from '../assets/img/Group_4.png';
import Color from '../untils/color';
import untils from '../untils/untils';

const Register = () => {
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

    return (
        <ScrollView className="flex-1 mx-4 my-4 flex">
            {/* Phần logo và tiêu đề */}
            <View className ='mx-auto my-auto underline'>
                <Image source={myImage} className='object-cover rounded-full'/>
                <Text className={` font-bold text-4xl ${Color.textBold}`}>Tạo tài khoản </Text>
                <Text className={`${Color.textBlur} text-base pb-2`}>Quy trình nhanh gọn, bảo mật</Text>
            </View>

            {/* Phần thông tin cá nhân */}
            <View>
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
                <TextInput  
                    placeholder='Mật khẩu' 
                    className={`placeholder:text-slate-400 block bg-white w-full border ${errPass? "border-[#ed1818]" : "border-slate-300"}  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800'  focus:ring-sky-500 focus:ring-1 sm:text-sm`}
                    onChangeText={(e)=> {
                        untils.validatePass(e,setErrMessPass,setErrPass)
                        setPass(e)
                    }}
                    value={pass}
                />
                <Text className='text-[#ed1818]'>{errMessPass}</Text>
                <TextInput  
                    placeholder='Xác nhận lại mật khẩu' 
                    className={`placeholder:text-slate-400 block bg-white w-full border ${errCfPass? "border-[#ed1818]" : "border-slate-300"}  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800'  focus:ring-sky-500 focus:ring-1 sm:text-sm`}
                    onChangeText={(e)=> {
                        untils.validateCfPass(e,pass,setErrCfPass,setErrMessCfPass)
                        setCfPass(e)
                    }}
                    value={cfPass}
                />
                <Text className='text-[#ed1818]'>{errMessCfPass}</Text>
            </View>

            {/* Nút đăng kí */}
            <TouchableOpacity className={`bg-[#4e399e] p-2 rounded w-full`}>
                <Text className={`text-white text-lg font-semibold text-center`}>Đăng kí</Text>
            </TouchableOpacity>

            {/* Chú thích về tác giả */}
            <Text className={`text-center ${Color.textBlur} text-xs mt-1`}>Vận Hành Bởi IOT-SOUP 2023</Text>
       </ScrollView>
    )
}

export default Register;
