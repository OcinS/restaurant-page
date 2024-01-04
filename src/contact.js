function createContactTitle() {

    const contactTitle = document.createElement(`h1`);
    contactTitle.className = `contact-title`;
    contactTitle.textContent = `Contact Us`;

    return contactTitle;

}

function createContactInformation() {

    const contactInformation = document.createElement(`div`);
    contactInformation.className = `contact-information`;

        const contactSection1 = document.createElement(`div`);
        contactSection1.className = `contact-section`;

            const contactSectionIcon1 = document.createElement(`span`);
            contactSectionIcon1.className = `mdi mdi-phone`;

            const contactSectionParagraph1 = document.createElement(`p`);
            contactSectionParagraph1.textContent = `+63967-826-9515`;

        contactSection1.append(contactSectionIcon1,contactSectionParagraph1)

        const contactSection2 = document.createElement(`div`);
        contactSection2.className = `contact-section`;

            const contactSectionIcon2 = document.createElement(`span`);
            contactSectionIcon2.className = `mdi mdi-map-marker`;

            const contactSectionParagraph2 = document.createElement(`p`);
            contactSectionParagraph2.textContent = `Guiuan Eastern Samar`;

        contactSection2.append(contactSectionIcon2,contactSectionParagraph2)

        const form = document.createElement(`form`);
        form.id = `contact-form`;
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });

            const formHeader = document.createElement(`div`);
            formHeader.className = `form-header`;

                const formHeaderh3 = document.createElement(`h3`);
                formHeaderh3.textContent = `Send us a Message`;

            formHeader.appendChild(formHeaderh3);

            const formSection1 = document.createElement(`div`);
            formSection1.className = `form-section`;

                const label1 = document.createElement(`label`);
                label1.setAttribute(`for`, `full-name`);
                label1.textContent = `Full Name:`;

                const input1 = document.createElement(`input`);
                input1.type = `text`;
                input1.name = `full-name`;
                input1.id = `full-name`;
                input1.placeholder = `Kobe Jordan`

            formSection1.append(label1,input1);

            const formSection2 = document.createElement(`div`);
            formSection2.className = `form-section`;

                const label2 = document.createElement(`label`);
                label2.setAttribute(`for`, `email`);
                label2.textContent = `Email Address:`;

                const input2 = document.createElement(`input`);
                input2.type = `email`;
                input2.name = `email`;
                input2.id = `email`;
                input2.placeholder = `kobejordan@sample.com`

            formSection2.append(label2,input2);

            const formSection3 = document.createElement(`div`);
            formSection3.className = `form-section`;

                const label3 = document.createElement(`label`);
                label3.setAttribute(`for`, `message`);
                label3.textContent = `Message:`;

                const textarea = document.createElement(`textarea`);
                textarea.name = `message`;
                textarea.id = `message`;
                textarea.cols = `30`;
                textarea.rows = `10`;
                textarea.placeholder = `Insert your message here`;

            formSection3.append(label3,textarea);

            const formSection4 = document.createElement(`div`);
            formSection4.className = `form-section`;

                const formBtn = document.createElement(`button`);
                formBtn.className = `contact-btn`;
                formBtn.type = `submit`;
                formBtn.textContent = `Send Message`;

            formSection4.appendChild(formBtn);

        form.append(formHeader,formSection1,formSection2,formSection3,formSection4);

    contactInformation.append(contactSection1,contactSection2,form);

    return contactInformation;

}

function loadContact() {
    
    const mainContainer = document.querySelector(`.container.home`);
    mainContainer.textContent = ``;
    mainContainer.append(createContactTitle(), createContactInformation());

}

export default loadContact;