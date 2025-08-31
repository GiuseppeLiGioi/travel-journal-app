import postsData from "../data/posts.js"
import PostCard from "./PostCard.jsx"
export default function PostLists({posts, expandAll}){
    return (
        <div className="container-posts">
            {
              posts.map((p) => (
            <PostCard key={p.id} post={p} expandAll={expandAll}/>
              ))
            }
        </div>
    )
}