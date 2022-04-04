const carouselImgAnchor = document.querySelector('.js-carousel-img-anchor');
const carouselIndicatorAnchor = document.querySelector('.js-carousel-indicator-anchor');

const getJson = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
// use title, subtitle, image
const HOME_JSON = 'https://www.zesty.io/-/gql/features.json';

getJson(HOME_JSON).then(data => {
    data.forEach((data, index) => {
        carouselIndicatorAnchor.innerHTML += `<button type="button"
                data-bs-target="#carouselCaptions"
                data-bs-slide-to="${index}"
                aria-label="Slide ${index + 1}"></button>`
        carouselIndicatorAnchor.classList.add('pb-5');
    
        const carouselItem = document.createElement('div');
        const carouselItemImg = document.createElement('img');
        const carouselItemCaption = document.createElement('div');
        
        carouselItem.classList.add('carousel-item');

        carouselItemImg.classList.add('d-block', 'w-100');
        carouselItemImg.setAttribute('src', data.image);

        carouselItemCaption.classList.add('carousel-caption', 'd-none', 'd-sm-block', 'pb-5');
        carouselItemCaption.innerHTML = '<h2></h2><p class="fs-4"></p>';

        carouselItem.append(carouselItemImg);
        carouselItem.append(carouselItemCaption);
        carouselImgAnchor.append(carouselItem);
    });

    const carouselItemCaptionHeaders = [...document.querySelectorAll('.carousel-caption > h2')];
    carouselItemCaptionHeaders.forEach((header, index) => {
        header.innerText = data[index].title;
    });
    const carouselItemCaptionSubtitles = [...document.querySelectorAll('.carousel-caption > p')];
    carouselItemCaptionSubtitles.forEach((subtitle, index) => {
        subtitle.innerText = data[index].subtitle;
    });

    const fistCarouselIndicator = document.querySelector('.js-carousel-indicator-anchor button')
    const firstCarouselImg = document.querySelector('.carousel-item');
    fistCarouselIndicator.classList.toggle('active');
    firstCarouselImg.classList.toggle('active'); 
});




