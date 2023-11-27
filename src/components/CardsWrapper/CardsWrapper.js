import "./CardsWrapper.css";
import { Card } from "../Card/Card";

  
const creteCardsContainer = () => {
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    return cardsContainer;
}

export const generateCards = (data, cardsContainerElement) => {
    
    data.forEach((photo) => {
        const cardElement = Card(photo);
        cardsContainerElement.appendChild(cardElement);
    }); 

    return cardsContainerElement.innerHTML;
};


export const CardWrapper = (data) => {

    const mainElement = document.querySelector('main');

    const existingCardsContainer = document.querySelector('.cards-container');
    const existingLoadingElement = document.querySelector('.loading');
    if (existingCardsContainer && existingLoadingElement) {
        existingCardsContainer.remove();
        existingLoadingElement.remove();
    }

    const cardsContainerElement = creteCardsContainer();

    generateCards(data, cardsContainerElement);

    const loadingElement = document.createElement('div');
    loadingElement.className = 'loading';

    for(let i = 1; i <= 3; i++) {
        const ball = document.createElement('div');
        ball.className = `ball-${i}`
        loadingElement.appendChild(ball);
    }


    mainElement.appendChild(cardsContainerElement);
    mainElement.appendChild(loadingElement);

}


