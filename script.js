// toggle menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
            // active sections for animation
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // ANIMATION ON FOOTERSCROLL

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// OPEN MY CV
function openResume() {
    window.open('https://drive.google.com/drive/folders/16f_MarA8fBqAfY_GTx5jrHkFAfevxfix?usp=drive_link');
}

// OPEN HEX
function openHex() {
    window.open('https://drive.google.com/drive/folders/1cfDPr4MQdAX6mYTor35J-u_nwrJDgHtt?usp=drive_link');
}

// OPEN GEST

function openGest() {
    window.open('https://drive.google.com/drive/folders/1cyXbatPAHSbZOzYls5siLQvfzF-Gk9wG?usp=drive_link');
}

// OPEN AMF
function openAmf() {
    window.open('https://drive.google.com/drive/folders/1DbEF1zC0_Nkusbv-V0MWNascFziqYYiK?usp=drive_link');
}

// OPEN AMS
function openAms() {
    window.open('https://drive.google.com/drive/folders/1fEyGVvGReXDR0SyXJvn0sYOBint57h3L?usp=drive_link');
}

// OPEN 2D-PLOTTER
function openPlot() {
    window.open('https://drive.google.com/drive/folders/1jO2KlHiGWcVPI7ysTcRka5thXfp4k6w3?usp=drive_link');
}

// OPEN CAD
function openCad() {
    window.open('https://drive.google.com/drive/folders/15Zzk4UdqxQvk9XNdh51DEvuRfkP9uNFC?usp=drive_link');
}