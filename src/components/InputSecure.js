import {View,TextInput,TouchableOpacity,Text} from "react-native"
import {useState} from "react"
import Icon from 'react-native-vector-icons/MaterialIcons';
import untils from "../untils/untils";

const InputSecure = ({placeholder,setErrMess,setErr,err,errMess,value,setValue,errForm,isLogin,...props})=>{
    const [hidePassword,setHidePassword] = useState(false)
    return(
        <View className="relative">
        <TextInput
            secureTextEntry={hidePassword}
            placeholder={placeholder}
            className={`placeholder:text-slate-400 block bg-white w-full border ${isLogin? `${errForm ? "border-[#ed1818]" : "border-slate-300"}` : `${err ? "border-[#ed1818]" : "border-slate-300"}`}  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:'border-fuchsia-800'  focus:ring-sky-500 focus:ring-1 sm:text-sm`}
            onChangeText={(e) => {
                untils.validatePass(e, setErrMess, setErr)
                setValue(e)
            }}
            value={value}
        />
       <TouchableOpacity
            className='absolute right-2 top-3.5'
            onPress={() => setHidePassword(!hidePassword)}
        >
            <Icon name={hidePassword ? 'visibility-off' : 'visibility'} size={16} color="gray" />
        </TouchableOpacity>
        {isLogin ?<Text className='text-[#ed1818]'>{errForm ? errMess : ""}</Text> : <Text className='text-[#ed1818]'>{errMess}</Text>}
        </View>
    )
}
export default InputSecure