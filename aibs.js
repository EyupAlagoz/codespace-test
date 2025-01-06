// aibs.js

// Axios kütüphanesini import ediyoruz
const axios = require('axios');

// API'den veri çeken fonksiyon
async function fetchData(url) {
    try {
        // API'den veri almak için GET isteği gönderiyoruz
        const response = await axios.get(url);
        console.log('API Response:', response.data);
    } catch (error) {
        console.error('API Hatası:', error);
    }
}

// Basit bir işlevsellik
function sayHello(name) {
    console.log(`Hello, ${name}! Welcome to AIBS.`);
}

// Fonksiyonları test etmek için
sayHello('User');

// API'den veri almak için örnek URL (örneğin JSONPlaceholder API)
fetchData('https://jsonplaceholder.typicode.com/posts');

