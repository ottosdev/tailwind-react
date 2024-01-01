import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_FAKE,
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


