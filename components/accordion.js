const accordionAnchor = document.querySelector('.js-accordion-anchor');

const getJson = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
// use title, subtitle, image
const FAQ_JSON = 'https://www.zesty.io/-/gql/platform_section.json';

getJson(FAQ_JSON).then(data => {
    for (i=0;i<5;i++) {
        const newAccordionItem = document.createElement('div');
        newAccordionItem.classList.add('accordion-item');
        newAccordionItem.innerHTML =
                `<h2 class="accordion-header" id="panelsStayOpen-heading${i}">
                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapse${i}"
                        aria-expanded="false" aria-controls="panelsStayOpen-collapse${i}">
                    Question: ${data[i].title}
                 </button>
                 </h2>
                 <div id="panelsStayOpen-collapse${i}" class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-heading${i}">
                 <div class="accordion-body">
                    <strong>Answer: </strong>${data[i].text_content}
                 </div>`
        accordionAnchor.append(newAccordionItem);
    }
});




