import { Header } from "../components/Header"
import { useEffect, useState } from "react"
import { UserService } from "../api/users.service"
import { PostService } from "../api/posts.service"
import { UsersTable } from "../components/UsersTable"

export const Lor = () => {
    const [state, setState] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        UserService.getUsers().then((json) => setState(json.data));
        PostService.getAllPosts().then((json) => setPosts(json.data));
    }, [])
    // console.log(posts);
    return <>
        <Header />
        <UsersTable users={state} />
    </>
}