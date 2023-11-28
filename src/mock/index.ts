import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// 创建一个 axios 实例
const instance = axios.create();

// 创建一个 MockAdapter 实例
const mock = new MockAdapter(instance);

// 模拟一个 GET 请求
mock.onGet('/api/user').reply(200, {
    users: [{ id: 1, name: 'John Smith' }]
});

// 模拟一个 POST 请求
mock.onPost('/api/login').reply(200, {
    token: '123456'
});

export default instance;