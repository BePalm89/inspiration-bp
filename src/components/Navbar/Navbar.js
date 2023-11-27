import { Logo } from '../Logo/Logo';
import { SearchBar } from '../SearchBar/SearchBar';
import { FiltersBar } from '../FiltersBar/FiltersBar';
import './Navbar.css';

export const Navbar = (divApp) => {
    
    const header = document.createElement('header');

    createNavbar(header);

    divApp.appendChild(header);
}

const createNavbar = (header) => {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const liLogo = document.createElement('li');
    const liInput = document.createElement('li');

    header.appendChild(nav);
    nav.appendChild(ul);
    ul.appendChild(liLogo);
    ul.appendChild(liInput);
    SearchBar(liInput);
    FiltersBar(header);
    liLogo.innerHTML = `${Logo()}`;
}