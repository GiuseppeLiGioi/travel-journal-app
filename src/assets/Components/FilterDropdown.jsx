export default function FilterDropdown ({onFilter}){
    return(
        <select onChange={(e) => onFilter(e.target.value)}>
         <option value="">-- Come filtrare? --</option>
         <option value="Felice">Felice</option>
         <option value="Rilassato">Rilassato</option>
         <option value="Curioso">Curioso</option>

         <option value="Citta-Food">Citta-Food</option>
         <option value="Cultura-Castelli">Cultura-Castelli</option>
         <option value="Mare-Relax">Mare-Relax</option>
         <option value="Avventura-vino">Avventura-vino</option>
        </select>
    )
}