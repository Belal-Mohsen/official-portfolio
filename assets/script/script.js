// mode button
let lightMode = localStorage.getItem("lightMode");
const lightModeToggle = document.querySelector("#mode-btn");

const enableLightMode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightMode", "enabled");
}
const disableLightMode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightMode", null);
}

if(lightMode === "enabled"){
  enableLightMode();
  document.getElementById('mode-img').src='assets/icons/dark.svg';
}

lightModeToggle.addEventListener("click", () =>{
  lightMode = localStorage.getItem("lightMode");
  if(lightMode !== "enabled"){
    enableLightMode();
    document.getElementById('mode-img').src='assets/icons/dark.svg';
  }else{
    disableLightMode();
    document.getElementById('mode-img').src='assets/icons/light.svg';
  }
});


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

