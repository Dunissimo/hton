import axios from 'axios';

// Создаем экземпляр Axios с базовым URL
export const api = axios.create({
    baseURL: 'https://api.danbel.ru:30/h1-hack-api/v1.0',
});