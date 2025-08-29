import SearchBar from "./SearchBar"
import FilterDropdown from "./FilterDropdown"
import SortDropdown from "./SortDropdown"

export default function Header({ onSearch, onFilter, onSort }) {
    return (
        <div className="container-header">
            <div className="container-menu-voices">
                <FilterDropdown onFilter={onFilter} />
                <SortDropdown onSort={onSort} />
            </div>
            <div className="container-searchbar">
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}