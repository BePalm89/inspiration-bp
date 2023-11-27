import './style.css'
import { generateTemplateApplication, fetchPhotos, fetchPhotosByInput, fetchPhotoByCategories, fetchPhotosByIconSearch } from './utils';

const divApp = document.querySelector("#app");

generateTemplateApplication(divApp);

fetchPhotos();

const formElement = document.querySelector('form');

fetchPhotosByInput(formElement);

const searchIconElement = document.querySelector('form img');

fetchPhotosByIconSearch(searchIconElement);

const categoriesElement = document.querySelectorAll('.filter-container li');

fetchPhotoByCategories(categoriesElement);