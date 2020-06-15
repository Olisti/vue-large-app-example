import axios from 'axios';
import getMockData, { timeout } from '@shared/mock/mock';

// ApiService used to switch between mock and server data
export class ApiService {
    isMockData: boolean = true;

    async get(url: string) {
        return this.isMockData ? await getMockData(url) : await axios.get(url);
    }

    async post(url: string, data: any) {
        const response = this.isMockData ? await getMockData(url) : await axios.post(url);
        return this.isMockData ? data : response;
    }

    async put(url: string, data: any) {
        const response = this.isMockData ? await timeout() : await axios.put(url);
        return this.isMockData ? data : response;
    }

    async delete(url: string) {
        this.isMockData ? await timeout() : await axios.delete(url);
    }
}
