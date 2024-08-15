let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header a');

window.onscroll = () => {
    sections.forEacheach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header a'
                [href*=' + id + ']).classList.add
                ('active'); 
            });
        };
    });
};