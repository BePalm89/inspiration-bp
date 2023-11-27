import "./Card.css";

const createHTMLElement = (tag, className) => {
    const element = document.createElement(tag);
    if (className) {
      element.className = className;
    }
    return element;
};

export const Card = (photo) => {

    const { urlImg, userFirstName, userLastName, userProfileImg, description, altDescription } = photo;
  
    const cardDivContainer = createHTMLElement('div', 'card');

    const cardImg = createHTMLElement('img');
    cardImg.src = urlImg;
    cardImg.alt = altDescription;
  
    const hoverCard = createHTMLElement('div', 'hover');
  
    const iconHeartContainer = createHTMLElement('div', 'heart-container');
  
    const iconHeart = createHTMLElement('i', 'fa-regular fa-heart');
  
    const infoContainer = createHTMLElement('div', 'info-container');
  
    const avatarAndNameContainer = createHTMLElement('div', 'avatar-name-container');
  
    infoContainer.appendChild(avatarAndNameContainer);
  
    const avatarContainer = createHTMLElement('div', 'avatar-container');
  
    const avatarImg = createHTMLElement('img', 'avatar-img');
    avatarImg.src = userProfileImg;
  
    const author = createHTMLElement('p');
    author.innerHTML = `${userFirstName} ${userLastName}`;

    const descriptionElement = createHTMLElement('p', 'description');
    descriptionElement.innerHTML = description || altDescription;
  
    infoContainer.appendChild(descriptionElement);
  
    avatarContainer.appendChild(avatarImg);
  
    avatarAndNameContainer.appendChild(avatarContainer);
    avatarAndNameContainer.appendChild(author);
  
    iconHeartContainer.appendChild(iconHeart);
  
    hoverCard.appendChild(iconHeartContainer);
    hoverCard.appendChild(infoContainer);
  
    cardDivContainer.appendChild(cardImg);
    cardDivContainer.appendChild(hoverCard);

    return cardDivContainer;
}