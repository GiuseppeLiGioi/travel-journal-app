import { useState } from "react";
export default function PostCard({ post }) {
    const [btnOpen, setBtnOpen] = useState(false)

    function renderStars(value) {
        const maxstars = 5;
        let stars = "";
        for (let i = 1; i <= maxstars; i++) {
            stars += i <= value ? "★" : "☆";
        }
        return stars;
    }
    return (
        <div className={`container-single-post ${btnOpen ? "open" : ""}`}>
            <img className="img-postList" src={post.img} alt={post.titolo} />
            <h2 className="title-postList">{post.titolo}</h2>
            <p className="p-postList">{post.descrizione}</p>
            <button onClick={() => setBtnOpen(!btnOpen)}>
                {btnOpen ? "Chiudi" : "Estendi"}
            </button>
            {btnOpen && (
                <div className="details">
                    <h2 className="title-details">DETTAGLI</h2>
                    <h2 className="place-details"><strong className="strong-place-details">Luogo:</strong> {post.luogo}</h2>
                    <p className="p-details p-details-stars"><strong className="strong-p-details">Effort Economico:</strong> {renderStars(post.effortEconomico)}</p>
                    <p className="p-details"><strong className="strong-p-details">Spesa:</strong> {post.spesa} €</p>
                    <p className="p-details"><strong className="strong-p-details">Stato d'animo:</strong> {post.mood}</p>
                    <p className="p-details">
                        <strong className="strong-p-details">Tags:</strong>{" "}
                        {post.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}{index < post.tags.length - 1 ? " " : ""}
                            </span>
                        ))}
                    </p>
                </div>
            )}
        </div>
    )
}