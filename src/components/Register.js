import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import myImage from '../assets/img/Group_4.png';
import Color from '../untils/color';
import untils from '../untils/untils';

const Register = () => {
    return (
        <View className="flex-1 mx-4 my-4 flex">
            {/* Phần logo và tiêu đề */}
            <View className="mx-auto">
                <Image source={myImage} className="object-cover" />
                <Text className={`font-bold text-4xl ${Color.textBold}`}>Tạo tài khoản</Text>
                <Text>Quy trình nhanh gọn bảo mật</Text>
            </View>

            {/* Phần thông tin cá nhân */}
            <View>
                <Text className='font-bold text-base ${Color.textBold}'>Thông tin cá nhân:</Text>
                <TextInput className={`placeholder:text-slate-400 block bg-white w-full border rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800' focus:ring-sky-500 focus:ring-1 sm:text-sm`} placeholder="Họ và tên"></TextInput>
                <TextInput className={`placeholder:text-slate-400 block bg-white w-full border rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800' focus:ring-sky-500 focus:ring-1 sm:text-sm`} placeholder="Mã sinh viên"></TextInput>
                <TextInput className={`placeholder:text-slate-400 block bg-white w-full border rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800' focus:ring-sky-500 focus:ring-1 sm:text-sm`} placeholder="Số điện thoại"></TextInput>
            </View>

            {/* Phần mật khẩu */}
            <View>
                <Text className={'font-bold text-base ${Color.textBold}'}>Mật khẩu:</Text>
                <TextInput className={`placeholder:text-slate-400 block bg-white w-full border rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800' focus:ring-sky-500 focus:ring-1 sm:text-sm`} placeholder="Tối thiểu 7 kí tự"></TextInput>
                <TextInput className={`placeholder:text-slate-400 block bg-white w-full border rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800' focus:ring-sky-500 focus:ring-1 sm:text-sm`} placeholder="Xác nhận lại mật khẩu"></TextInput>
            </View>

            {/* Nút đăng kí */}
            <TouchableOpacity className={`bg-[#4e399e] p-2 rounded w-full`}>
                <Text className={`text-white text-lg font-semibold text-center`}>Đăng kí</Text>
            </TouchableOpacity>

            {/* Chú thích về tác giả */}
            <Text className={`text-center ${Color.textBlur} text-xs mt-2`}>Vận Hành Bởi IOT-SOUP 2023</Text>
       </View>
    )
}

export default Register;
