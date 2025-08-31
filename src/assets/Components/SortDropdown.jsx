export default function SortDropdown ({onSort}){
      return(
        <select onChange={(e) => onSort(e.target.value)} className="select-filter">
         <option value="">-- Come ordinare? --</option>
         <option value="val1">Spesa economica crescente</option>
         <option value="val2">Spesa economica decrescente</option>
         <option value="val3">Effort crescente</option>
         <option value="val4">Effort decrescente</option>
        </select>
    )
}