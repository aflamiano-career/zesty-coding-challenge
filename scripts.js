const aboutTitle = document.querySelector('.js-about-title');
const aboutHeroImg = document.querySelector('.js-about-hero-image');
const aboutHeroContent = document.querySelector('.js-about-hero-content');
const aboutPageContent = document.querySelector('.js-about-page-content');

const getJson = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
// use title, hero_content, hero_image, page_content
const ABOUT_JSON = 'https://www.zesty.io/-/gql/about.json';

getJson(ABOUT_JSON).then(data => {
    aboutTitle.innerText = `${data[0].title}`;
    aboutHeroImg.innerHTML =
        `<img src="${data[0].hero_image}" alt="" class="img-fluid hero-image-item">`;
    aboutHeroContent.innerHTML = `${data[0].hero_content}`;
    aboutPageContent.innerHTML = `${data[0].page_content}`
});
