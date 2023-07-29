// api.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ManagerApi = axios.create({
  baseURL: "https://server-iot-food.onrender.com",
  timeout: 10000, // Thời gian tối đa để đợi phản hồi từ API (ms)
  headers: {
    'Content-Type': 'application/json',
  },
});
ManagerApi.interceptors.request.use(
  async (config) => {
    // Kiểm tra và gắn token vào header nếu có
    const token =await AsyncStorage.getItem("AccessToken"); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log(config.headers)
    console.log(config.url)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default ManagerApi;
