import postsData from "../data/posts.js"
import PostCard from "./PostCard.jsx"
export default function PostLists(){
    return (
        <div className="container-posts">
            {
              postsData.map((p) => (
            <PostCard key={p.id} post={p}/>
              ))
            }
        </div>
    )
}