import {View,Image,Text} from "react-native"
import successImg from '../assets/img/success.png';
import untils from '../untils/untils';
import Color from '../untils/color';

function SuccessLoading() {
    const[sm,md]=untils.calculateScreenSizes()
    return (<View className='mx-4 my-4 flex-1'>
                <View className='mx-auto my-auto underline'>
                    <Image source={successImg} className='object-cover rounded-full mx-auto my-auto' />
                    <Text className={` font-bold text-4xl ${Color.textBold} text-center`}>Đăng nhập {'\n'}thành công!</Text>
                </View>
                <Text className={`text-lg ${Color.textBold} text-center`}>Vui lòng đợi...</Text>
                <Text className={`text-center ${Color.textBlur} text-xs mt-1 ${sm?"mt-8":""} ${md?"mt-28":""}`}>Vận Hành Bởi IOT-SOUP 2023</Text>
            </View> );
}

export default SuccessLoading;