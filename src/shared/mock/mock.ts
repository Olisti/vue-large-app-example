import users from './users.json';

export default function getMockData(url: string, id?: number) {
    console.log('getMockData');
    if (url === 'users' && !id) return users;
}
