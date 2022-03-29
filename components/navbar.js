const jsNavigation = document.querySelector('.js-navigation');
jsNavigation.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Zesty.IO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="faqs.html">FAQs</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>`;

const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    if(link.href.includes(`${currentPage}`)) {
        link.classList.add('active');
    }
})