function createHome() {

    const heroblock = document.createElement(`div`);
    heroblock.className = `hero-block`;

        const heroHeadline = document.createElement(`h1`);
        heroHeadline.className = `hero-headline`;
        heroHeadline.textContent = `Your Best Pizza in Town`;

        const heroDescription = document.createElement(`p`);
        heroDescription.className = `hero-description`;
        heroDescription.textContent = `Enjoy a Delicious, Fresh and Affordable Pizza with your Family, Peers and Friends with Free Delivery.`;
    
    heroblock.append(heroHeadline,heroDescription);

    return heroblock;

}

function loadHome() {
    
    const mainContainer = document.querySelector(`.container.home`);
    mainContainer.textContent = ``;
    mainContainer.appendChild(createHome());

}

export default loadHome;