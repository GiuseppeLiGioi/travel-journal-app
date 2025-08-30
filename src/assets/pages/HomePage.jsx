import { useState, useEffect } from "react";
import postsData from "../data/posts.js";
import Header from "../Components/Header.jsx";
import PostLists from "../Components/PostLists.jsx";

export default function HomePage() {
    const [posts, setPosts] = useState(postsData);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        let filteredPosts = [...posts];

        if (search) {
            filteredPosts = filteredPosts.filter(p =>
                p.titolo.toLowerCase().includes(search.toLowerCase().trim())
            );
        }
          console.log("Filtro applicato:", filter);

        if (filter) {
            filteredPosts = filteredPosts.filter(p =>
               p.mood.toLowerCase().trim().includes(filter.toLowerCase().trim()) || p.tags.includes(filter.toLowerCase().trim())
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

    }, [search, filter, sort]);

    return (
        <>
            <Header
                onSearch={setSearch}
                onFilter={setFilter}
                onSort={setSort}
            />
            <PostLists posts={posts} />
        </>
    );
}
