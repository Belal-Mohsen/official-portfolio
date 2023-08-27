/*nav-bar*/
let burgerMenu = document.querySelector('#burger-menu');
let navbar = document.querySelector(".navbar")


burgerMenu.onclick = () =>{
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navElements = document.querySelectorAll('nav ul li a');

window.onscroll = () =>{
    navbar.classList.remove('active');
    sections.forEach(section =>{
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let heg = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + heg) {
            navElements.forEach(elem =>{
                elem.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Contact me form
(function () {
    'use strict'
    let forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

// const sections2 = document.querySelectorAll(".section");
// sections2.forEach(sec => {
// sec.addEventListener('mousemove', (e) =>{
//     const rect = sec.getBoundingClientRect();

//     const left = e.clientX - rect.left;
//     const top = e.clientY - rect.top;

//     sec.style.setProperty("--left", `${left}px`);
//     sec.style.setProperty("--top", `${top}px`);
// });
// });
