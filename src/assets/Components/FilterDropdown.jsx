export default function FilterDropdown ({onFilter}){
    return(
        <select onChange={(e) => onFilter(e.target.value)}>
                <option value="">-- Come filtrare? --</option>
                <option value="felice">Felice</option>
                <option value="rilassato">Rilassato</option>
                <option value="curioso">Curioso</option>
                <option value="città">Città</option>
                <option value="food">Food</option>
                <option value="cultura">Cultura</option>
                <option value="castelli">Castelli</option>
                <option value="mare">Mare</option>
                <option value="relax">Relax</option>
                <option value="avventura">Avventura</option>
                <option value="vino">Vino</option>
            </select>
    )
}