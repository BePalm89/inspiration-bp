import './SearchBar.css';

export const SearchBar = (liInput) => {
    
    const form = document.createElement('form');

    const divContainer = document.createElement('div');
    divContainer.className = "search-container";

    const searchIcon = document.createElement('img');
    searchIcon.src = "./icons/search.svg";

    const searchInput = document.createElement('input');
    searchInput.placeholder = "Search your inspiration..."

    form.appendChild(divContainer);
    divContainer.appendChild(searchIcon);
    divContainer.appendChild(searchInput);
    
    liInput.appendChild(form);
}