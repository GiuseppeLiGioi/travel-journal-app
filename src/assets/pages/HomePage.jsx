import { useState } from "react"
import postsData from "../data/posts.js"
import Header from "../Components/Header.jsx"
import PostLists from "../Components/PostLists.jsx"

export default function HomePage() {
    const [posts, setPosts] = useState(postsData)
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("")
    return (
        <>

            <Header
                onSearch={setSearch}
                onFilter={setFilter}
                onSort={setSort}
            />
            <PostLists />
        </>


    )
}