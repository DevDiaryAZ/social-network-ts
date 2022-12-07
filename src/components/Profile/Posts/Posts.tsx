import s from './Posts.module.css'
import {Post} from "./Post/Post";

export const Posts = () => {
    let posts = [
        {
            id: 1,
            postText: "Its my first post here!))",
            likeCount: 11
        },
        {
            id: 2,
            postText: "Hello everyone!",
            likeCount: 112
        },
    ]
    return (
        <div className={s.profile__posts}>
            My Posts
            {posts.map((post) => <Post id={post.id}
                                       postText={post.postText}
                                       likeCount={post.likeCount}/>
            )}

        </div>
    )
}