import { instance } from "./api";

export class PostService {
    static getAllPosts() {
        return instance.get('/posts')
    }
    static getPostById(id) {
        return instance.get(`/posts/${id}`)
    }
    static createPost(obj) {
        return instance.post('/posts', obj)
    }
}