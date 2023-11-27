import './FilterBar.css';
import { FILTERS } from "../../data/filters";

export const FiltersBar = ( header ) => {

    const filtersList = document.createElement('ul');
    filtersList.className = "filter-container"

    for (const filter of FILTERS) {
        
        const filterItem = document.createElement('li');
        filterItem.innerHTML = filter.label;
        filtersList.appendChild(filterItem);
    }

    header.appendChild(filtersList);
}