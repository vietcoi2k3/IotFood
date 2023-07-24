import { Dimensions } from "react-native";

function isValidMasv(value){
        const pattern = /^A\d{5}$/;
        return pattern.test(value);
 };

function validateMaSV(value, setErrMessMasv, setErrMasv) {
    if (value === "") {
        setErrMessMasv("Đây là trường bắt buộc");
        setErrMasv(true);
    }
    else if (!isValidMasv(value)){
        setErrMessMasv("Bắt đầu bằng chữ A , có 6 kí tự, 5 kí tự cuối là số");
        setErrMasv(true);
    }
    else {
        setErrMasv(false);
        setErrMessMasv("");
    }
}

function isValidPass(value) {
    return /[A-Z]/.test(value) && /[a-z]/.test(value);
}
function validatePass(value, setErrMessPass, setErrPass) {
    if (value === "") {
        setErrMessPass("Đây là trường bắt buộc")
        setErrPass(true);
    }
    else if (value.length < 8) {
        setErrMessPass("Mật khẩu phải có ít nhất 8 kí tự");
        setErrPass(true);
    }
    else if (!isValidPass(value)) {
        setErrMessPass('Mật khẩu chứa ít nhất 1 kí tự , 1 a-z, 1 A-Z');
        setErrPass(true);
    } else {
        setErrMessPass("");
        setErrPass(false);
    }
}
function isValidPhone(value){
   return /^\d{10}$/.test(value);
}
function validatePhone(value,setErrPhone,setErrMessPhone){
    if(!isValidPhone(value)){
        setErrMessPhone('Số điện thoại phải gồm 10 số');
        setErrPhone(true);
    }else{
        setErrMessPhone('');
        setErrPhone(false);
    }
}

function validateCfPass(value,pass,setErrCfPass,setErrMessCfPass){
    if(value !== pass){
        setErrMessCfPass("Mật khẩu không khớp. Vui lòng nhập lại!");
        setErrCfPass(true);
    }else{
        setErrMessCfPass('');
        setErrCfPass(false);
    }
}
function calculateScreenSizes() {
    const height = Dimensions.get('window').height;
    const sm = height > 700 && height < 800;
    const md = height > 800 && height < 900;
    
    return [sm, md];
}

const untils = {
    validateMaSV,
    validatePass,
    validatePhone,
    validateCfPass,
    calculateScreenSizes
}
export default untils;