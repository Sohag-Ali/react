import { use } from "react"
import Post from "./post2";

export default function Posts({postPromise}){
    const posts = use(postPromise);
    console.log(posts);
    return(
        <div className="card">
            <h2>All Post are Here : {posts.length} </h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}