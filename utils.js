import { CardWrapper, generateCards } from "./src/components/CardsWrapper/CardsWrapper";
import { Navbar } from "./src/components/Navbar/Navbar";
import { createApi } from 'unsplash-js';

let PHOTOS = [];
let currentPage = 2;


const api = createApi({
  accessKey : import.meta.env.VITE_UNSPLASH_API_KEY,
})

const toggleIcon = (icon) => {
    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid');
};

const addEventListenerToHeartIcons = (heartIconsElement) => {
    for (const icon of heartIconsElement) {
        icon.addEventListener('mouseover', () => toggleIcon(icon));
        icon.addEventListener('mouseleave', () => toggleIcon(icon));
      }
}

const infiniteScrolling = async (wrapperElement, query = 'all') => {

    window.addEventListener('scroll', async()=>{
        const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
        
        if(scrollTop + clientHeight > scrollHeight - 5){
            try {

                const response = await api.search.getPhotos({query: query, page: currentPage, perPage: 10});
                const newPhotos = response.response.results.map(result => {
                    return {
                        id: result.id,
                        urlImg: result.urls.small,
                        altDescription: result.description,
                        description: result.alt_description,
                        userFirstName: result.user.first_name,
                        userLastName: result.user.last_name,
                        userProfileImg: result.user.profile_image.small
                    }
                });
                
                currentPage += 1;
                PHOTOS = [...newPhotos];
                generateCards(PHOTOS, wrapperElement);
            } catch(error) {
                console.error('Error fetching more photos:', error);
            }
        }
    });
}

export const generateTemplateApplication = (divApp) => {
    
    Navbar(divApp);

    const mainElement = document.createElement('main');
    divApp.appendChild(mainElement);
    
}

export const fetchPhotos = async (query = 'all') => {
    try {
        const response = await api.search.getPhotos({ query: query });
        PHOTOS = response.response.results.map(result => {
            return {
                id: result.id,
                urlImg: result.urls.small,
                altDescription: result.description,
                description: result.alt_description,
                userFirstName: result.user.first_name,
                userLastName: result.user.last_name,
                userProfileImg: result.user.profile_image.small
            }
        });


        CardWrapper(PHOTOS);
        
        const heartIconsElements = document.querySelectorAll('.hover i');

        addEventListenerToHeartIcons(heartIconsElements);

        const wrapperElement = document.querySelector('.cards-container');

        infiniteScrolling(wrapperElement, query);
        
        if(!PHOTOS.length) {
            
            document.querySelector('.loading').remove();

            const divNotFoundImg = document.createElement('div');
            divNotFoundImg.classList = 'not-found-container';

            const notFoundImg = document.createElement('img');
            notFoundImg.src = '/images/not-found.png';
            notFoundImg.alt = 'not-found';
            notFoundImg.className = 'not-found';

            divNotFoundImg.appendChild(notFoundImg);

            const mainElement = document.querySelector('main');
            mainElement.appendChild(divNotFoundImg);
        }
    
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
}

const handleFetchPhotosByInput = (event) => {

    event.preventDefault();

    const inputValue = document.querySelector('input').value;
    fetchPhotos(inputValue);
    
}

export const fetchPhotosByInput = (formElement) => {
    formElement.addEventListener('submit', handleFetchPhotosByInput)
}

const handleFetchPhotosByCategories = (categoryLabel) => {
    fetchPhotos(categoryLabel);
}

export const fetchPhotoByCategories = (categories) => {
    for (const cateogry of categories) {
        cateogry.addEventListener('click', () => handleFetchPhotosByCategories(cateogry.innerHTML))
    }
}

export const fetchPhotosByIconSearch = (searchIconElement) => {
    searchIconElement.addEventListener('click', handleFetchPhotosByInput);
}
