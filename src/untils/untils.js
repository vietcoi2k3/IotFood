function validateMaSV(value,setErrMessMasv, setErrMasv){
    if(value === "") {  
        setErrMessMasv("Đây là trường bắt buộc");
        setErrMasv(true);
    }
    else {  
        setErrMasv(false);  
        setErrMessMasv("");
    }
}

function isValidPass(value){
    return /[A-Z]/.test(value) && /[a-z]/.test(value);
}
function validatePass(value, setErrMessPass, setErrPass){
    if(value === ""){ 
        setErrMessPass("Đây là trường bắt buộc")
        setErrPass(true);
    }
    else if (value.length < 8){
        setErrMessPass("Mật khẩu phải có ít nhất 8 kí tự");
        setErrPass(true);
    }
    else if (!isValidPass(value)){        
        setErrMessPass('Mật khẩu chứa ít nhất 1 kí tự , 1 a-z, 1 A-Z');
        setErrPass(true);
    }else {  
        setErrMessPass("");
        setErrPass(false); 
    }
   
}

const untils = {
    validateMaSV,
    validatePass
}
export  default untils;