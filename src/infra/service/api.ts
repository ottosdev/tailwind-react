import axios from 'axios';

const fake = '/api/products';
// const develop = '';

const apiClient = axios.create({
    baseURL: fake,
});

export const customGet = (path: string) => {
    return apiClient.get(path);
};

export const customPost = (path: string, data: any) => {
    return apiClient.post(path, data);
};

export const customPut = (path: string, data: any)=> {
    return apiClient.put(path, data);
};

export const customDel =(path: string) => {
    return apiClient.delete(path);
};


