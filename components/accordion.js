const accordionAnchor = document.querySelector('.js-accordion-anchor');

const getJson = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
// use title, subtitle, image
const FAQ_JSON = 'https://www.zesty.io/-/gql/platform_section.json';

const FAQ_LIMIT = 5;
getJson(FAQ_JSON).then(data => {
    for (i=0;i<FAQ_LIMIT;i++) {
        const newAccordionItem = document.createElement('div');
        newAccordionItem.classList.add('accordion-item');
        newAccordionItem.innerHTML =
            `<h2 class="accordion-header" id="panelsStayOpen-heading${i}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse${i}"
                    aria-expanded="false" aria-controls="panelsStayOpen-collapse${i}">
                </button>
            </h2>
            <div id="panelsStayOpen-collapse${i}" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-heading${i}">
                <div class="accordion-body">
                </div>
            </div>`
        accordionAnchor.append(newAccordionItem);
    }

    const newAccordionItemButtons = [...document.querySelectorAll('.accordion-button')];
    newAccordionItemButtons.forEach((button, index) => {
        button.innerText = `Question: ${data[index].title}`;
    });
    const newAccordionItemBodies = [...document.querySelectorAll('.accordion-body')];
    newAccordionItemBodies.forEach((itemBody, index) => {
        itemBody.innerHTML = `<strong>Answer:</strong> ${data[index].text_content}`;
    });
});