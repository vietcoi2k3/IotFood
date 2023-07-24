// api.js
import axios from 'axios';


const ManagerApi = axios.create({
  baseURL: "https://server-iot-food.onrender.com",
  timeout: 10000, // Thời gian tối đa để đợi phản hồi từ API (ms)
  headers: {
    'Content-Type': 'application/json',
  },
});



export default ManagerApi;
