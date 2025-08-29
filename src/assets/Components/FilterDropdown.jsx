export default function FilterDropdown ({onFilter}){
    return(
        <select onChange={(e) => onFilter(e.target.value)}>
         <option value="">-- Come filtrare? --</option>
         <option value="val1">Testo</option>
         <option value="">Stato d'animo</option>
         <option value="">Tags</option>
        </select>
    )
}