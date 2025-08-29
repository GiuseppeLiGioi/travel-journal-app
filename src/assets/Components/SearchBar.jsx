export default function SearchBar ({onSearch}){
    return(
     <input 
     type="text"
     placeholder="Inserisci il testo..." 
     onChange={(e) => onSearch(e.target.value)}/>
    )
}