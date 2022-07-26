import s from './Posts.module.css'
import {Post} from "./Post/Post";

export const Posts = () => {
    return (
        <div className={s.profile__posts}>
            My Posts
            <Post/>
        </div>
    )
}