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
    for (i=0;i<data.length;i++) {
        // carousel indicators
        carouselIndicatorAnchor.innerHTML += `<button type="button"
                data-bs-target="#carouselCaptions"
                data-bs-slide-to="${i}"
                aria-label="Slide ${i+ parseInt(1)}"></button>`
    
        // carousel images
        const newCarouselImg = document.createElement('div');
        newCarouselImg.classList.add('carousel-item');
        newCarouselImg.innerHTML = 
            `<img src="${data[i].image}" class="d-block w-100"\>
             <div class="carousel-caption d-none d-sm-block">
             <h5>${data[i].title}</h5>
             <p>${data[i].subtitle}</p>
             </div>`
        carouselImgAnchor.append(newCarouselImg);
    }

    const fistCarouselIndicator = document.querySelector('.js-carousel-indicator-anchor button')
    const firstCarouselImg = document.querySelector('.carousel-item');
    fistCarouselIndicator.classList.add('active');
    firstCarouselImg.classList.add('active');
});




