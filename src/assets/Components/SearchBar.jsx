export default function SearchBar ({onSearch}){
    return(
     <input 
     type="text"
     placeholder="Inserisci il testo..." 
     className="searchbar"
     onChange={(e) => onSearch(e.target.value)}/>
    )
}