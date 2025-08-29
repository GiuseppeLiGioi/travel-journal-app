export default function SortDropdown ({onSort}){
      return(
        <select onChange={(e) => onSort(e.target.value)}>
         <option value="">-- Come ordinare? --</option>
         <option value="val1">Spesa economica</option>
         <option value="">Data</option>
        </select>
    )
}