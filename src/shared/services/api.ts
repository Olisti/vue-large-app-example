import axios from 'axios';
import getMockData, { timeout } from '@shared/mock/mock';

export const isMockData: boolean = true;

// ApiService used only to switch between mock and server data
export class ApiService {
    async get(url: string) {
        return isMockData ? await getMockData(url, 'get') : await axios.get(url);
    }

    async post(url: string, data: any) {
        const response = isMockData ? await getMockData(url, 'post') : await axios.post(url);
        return response || data;
    }

    async put(url: string, data: any) {
        const response = isMockData ? await timeout() : await axios.put(url);
        return isMockData ? data : response;
    }

    async delete(url: string) {
        isMockData ? await timeout() : await axios.delete(url);
    }
}

export const apiService = new ApiService();
