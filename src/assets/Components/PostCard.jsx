import { useState } from "react";
export default function PostCard({post}){
     const [btnOpen, setBtnOpen] = useState(false)
    return(
        <div className={`container-single-post ${btnOpen ? "open" : ""}`}>
      <img className="img-postList" src={post.img} alt={post.titolo} />
      <h2 className="title-postList">{post.titolo}</h2>
      <p className="p-postList">{post.descrizione}</p>
      <button onClick={() => setBtnOpen(!btnOpen)}>
        {btnOpen ? "Chiudi" : "Estendi"}
      </button>
      {btnOpen && (
        <div className="details">
          <h4 className="place-details"><strong className="strong-place-details">Luogo:</strong> {post.luogo}</h4>
          <p className="p-details"><strong className="strong-p-details">Effort Economico:</strong> {post.effortEconomico}</p>
          <p className="p-details"><strong className="strong-p-details">Spesa:</strong> {post.spesa} €</p>
          <p className="p-details"><strong className="strong-p-details">Stato d'animo:</strong> {post.mood}</p>
        </div>
      )}
    </div>
    )
}