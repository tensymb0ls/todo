import { instance } from "./api";

export class UserService {
    static getUsers() {
        return instance.get('/users');
    }
    static getUserById(id) {
        return instance.get(`/users/${id}`);
    }
}