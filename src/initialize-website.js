import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

// Function to create elements under the Header section
function createHeader() {

    const header = document.createElement(`header`);

        const containerHeader = document.createElement(`div`);
        containerHeader.className = `container header`;

            const logo = document.createElement(`img`);
            logo.id = `logo`;
            logo.src = `./images/pizzathena-logo.png`;
            logo.alt = `Pizzathena Logo`;

            const navBar = document.createElement(`nav`);
            navBar.id = `navbar`;
            
                const ul = document.createElement(`ul`);

                const homeNav = document.createElement(`li`);
                homeNav.textContent = `Home`;
                homeNav.addEventListener("click", (e) => {
                    if (e.target.classList.contains("active")) return;
                    setActiveButton(homeNav);
                    loadHome();
                });

                const menuNav = document.createElement(`li`);
                menuNav.textContent = `Menu`;
                menuNav.addEventListener("click", (e) => {
                    if (e.target.classList.contains("active")) return;
                    setActiveButton(menuNav);
                    loadMenu();
                });

                const contactNav = document.createElement(`li`);
                contactNav.textContent = `Contact`;
                contactNav.addEventListener("click", (e) => {
                    if (e.target.classList.contains("active")) return;
                    setActiveButton(contactNav);
                    loadContact();
                });

                ul.append(homeNav,menuNav,contactNav);

            navBar.appendChild(ul);

        containerHeader.append(logo, navBar);

    header.appendChild(containerHeader);
    
    return header;
}


// This function will add a classname to Nav Menu (Used in createHeader function)
function setActiveButton(navItem) {
    const navItems = document.querySelectorAll(`li`);
  
    navItems.forEach((navItem) => {
      if (navItem !== this) {
        navItem.classList.remove("active");
      }
    });
  
    navItem.classList.add("active");
}


function createMain() {
    
    const main = document.createElement(`main`);

        const mainContainer = document.createElement(`div`);
        mainContainer.className = `container home`;

    main.appendChild(mainContainer);

    return main;
}

function createFooter() {
    const footer = document.createElement(`footer`);

        const footerContainer = document.createElement(`div`);
        footerContainer.className = `container footer`;

            const footerParagraph = document.createElement(`p`);
            footerParagraph.className = `footer-text`;
            footerParagraph.textContent = `Coded by: Nico Sison`;

            const footerLinkedinLink = document.createElement(`a`);
            footerLinkedinLink.href = `https://www.linkedin.com/in/nico-sison/`;
            footerLinkedinLink.target = `_blank`;

                const linkedinIcon = document.createElement(`span`);
                linkedinIcon.className = `mdi mdi-linkedin`;

            footerLinkedinLink.appendChild(linkedinIcon);

            const footerGithubLink = document.createElement(`a`);
            footerGithubLink.href = `https://github.com/OcinS`;
            footerGithubLink.target = `_blank`;

                const githubIcon = document.createElement(`span`);
                githubIcon.className = `mdi mdi-github`;

            footerGithubLink.appendChild(githubIcon);
        
        footerContainer.append(footerParagraph,footerLinkedinLink,footerGithubLink);

    footer.appendChild(footerContainer);

    return footer;
}

function initializeWebsite() {
    const content = document.querySelector(`#content`);

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(`li`));
    loadHome();
}

export default initializeWebsite;