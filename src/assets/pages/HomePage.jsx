import { useState } from "react"
import postsData from "../data/posts.js"

export default function HomePage (){
const [posts] = useState(postsData)
    return (
        <h2>Sono HomePage!</h2>
    )
}