import { Header } from "../components/Header"
import { useEffect, useState } from "react"
import { UserService } from "../api/users.service"
import { PostService } from "../api/posts.service"

export const Lor = () => {
    const [state, setState] = useState();
    const [posts, setPosts] = useState();
    useEffect(() => {
        const tmp = UserService.getUsers().then((json) => setState(json.data));
        setState(tmp);
        const posts = PostService.getAllPosts().then((json) => setPosts(json.data));
    }, [])
    console.log(posts);
    return <main>
        <Header />
        LOR</main>
}