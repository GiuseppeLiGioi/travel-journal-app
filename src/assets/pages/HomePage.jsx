import { useState, useEffect } from "react";
import postsData from "../data/posts.js";
import Header from "../Components/Header.jsx";
import PostLists from "../Components/PostLists.jsx";
import Map from "../Components/Map.jsx";

export default function HomePage() {
    const [allPosts] = useState(postsData);   
    const [posts, setPosts] = useState(postsData);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");
    const [expandAll, setExpandAll] = useState(false)

    useEffect(() => {
        let filteredPosts = [...allPosts]; 

        if (search) {
            filteredPosts = filteredPosts.filter(p =>
                p.titolo.toLowerCase().includes(search.toLowerCase().trim())
            );
        }

        if (filter) {
            filteredPosts = filteredPosts.filter(p =>
                p.mood.toLowerCase() === filter.toLowerCase() ||
                p.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
            );
        }

        filteredPosts = filteredPosts.sort((a, b) => {
            if (sort === "val1") {
                return a.spesa - b.spesa;
            } else if (sort === "val2") {
                return b.spesa - a.spesa;
            } else if (sort === "val3") {
                return a.effortEconomico - b.effortEconomico;
            } else if (sort === "val4") {
                return b.effortEconomico - a.effortEconomico;
            }
            return 0;
        });

        setPosts(filteredPosts);

    }, [search, filter, sort, allPosts]);

    return (
        <>
            <Header
                onSearch={setSearch}
                onFilter={setFilter}
                onSort={setSort}
            />
            <button className="home-expand-btn" onClick={() => setExpandAll(!expandAll)}>{expandAll ? "Riduci tutti" : "Estendi tutti"}</button>
            <PostLists posts={posts} expandAll={expandAll}/>
            
            <Map/>
            
        </>
    );
}
