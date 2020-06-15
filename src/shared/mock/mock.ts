import users from './users.json';
import user from './users.json';

// mock data generated by mockaroo.com
export default async function getMockData(url: string, id?: number) {
    await timeout();
    if (url === 'users' && !id) return users;
    else if (url.startsWith('users/')) return user;
}

const delay = 200;
export function timeout(ms?: number) {
    return new Promise(resolve => setTimeout(resolve, ms || delay));
}
