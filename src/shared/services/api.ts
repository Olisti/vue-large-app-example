import axios from 'axios';
import getMockData from '@shared/mock/mock';

// ApiService used to switch between mock and server data
export class ApiService {
    isMockData: boolean = true;

    async get(url: string, id?: number) {
        const response = this.isMockData ? getMockData(url, id) : await axios.get(url);
        return response;
    }

    post(url: string, data: any) {
        console.log('post');
    }

    put(url: string, data: any) {
        console.log('put');
    }

    delete(url: string, id: number) {
        console.log('delete');
    }
}
