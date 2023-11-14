(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#alazeaNav').classyNav();
    }

    // :: 3.0 Search Active Code
    $('#searchIcon').on('click', function () {
        $('.search-form').toggleClass('active');
    });
    $('.closeIcon').on('click', function () {
        $('.search-form').removeClass('active');
    });

    // :: 4.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-post-slides');
        var testiSlides = $('.testimonials-slides');
        var portfolioSlides = $('.portfolio-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            center: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000
        });

        testiSlides.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 700,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        portfolioSlides.owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 700,
            center: true
        });
    }

    // :: 5.0 Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.alazea-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-filter').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.alazea-portfolio').isotope({
                itemSelector: '.single_portfolio_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_portfolio_item'
                }
            });
        });
    }

    // :: 6.0 magnificPopup Active Code
    if ($.fn.magnificPopup) {
        $('.portfolio-img, .product-img').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image'
        });
        $('.video-icon').magnificPopup({
            type: 'iframe'
        });
    }

    // :: 7.0 Barfiller Active Code
    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#70c745',
            animateOnResize: true
        });
        $('#bar2').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#70c745',
            animateOnResize: true
        });
        $('#bar3').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#70c745',
            animateOnResize: true
        });
        $('#bar4').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#70c745',
            animateOnResize: true
        });
    }

    // :: 8.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 9.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 10.0 Sticky Active Code
    if ($.fn.sticky) {
        $(".alazea-main-menu").sticky({
            topSpacing: 0
        });
    }

    // :: 11.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // :: 12.0 Price Range Active Code
    $('.slider-range-price').each(function () {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_result = jQuery(this).data('label-result');
        var t = $(this);
        $(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function (event, ui) {
                var result = label_result + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                console.log(t);
                t.closest('.slider-range').find('.range-price').html(result);
            }
        });
    })

    // :: 13.0 prevent default a click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    
    // Obtener todas las etiquetas de anclaje <a> dentro del nav
const links = document.querySelectorAll('.classynav ul li a');

// Agregar un controlador de eventos para cada enlace
links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Función para el desplazamiento suave
function smoothScroll(e) {
  e.preventDefault();

  // Obtener el destino del enlace utilizando su atributo href
  const targetId = this.getAttribute('href');

  // Obtener el elemento destino basado en su ID
  const targetElement = document.querySelector(targetId);

  // Calcular la posición de desplazamiento
  const targetPosition = targetElement.offsetTop;

  // Obtener la posición actual de desplazamiento
  const startPosition = window.pageYOffset;

  // Calcular la distancia y la duración del desplazamiento
  const distance = targetPosition - startPosition;
  const duration = 1000; // Duración en milisegundos

  let start = null;

  // Función de animación
  function animation(currentTime) {
    if (start === null) {
      start = currentTime;
    }

    const timeElapsed = currentTime - start;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  // Función de aceleración para suavizar el desplazamiento
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  // Iniciar la animación del desplazamiento suave
  requestAnimationFrame(animation);
}

// Seleccionar el elemento que se va a observar
const Obs1 = ({
    id: document.querySelector("#LaEmpresa"),
    secA: document.querySelector("#sec1"),
    secB:  document.querySelector("#sec2")
});

const Obs2 = ({
    id: document.querySelector("#Infra"),
    secA: document.querySelector("#sec3"),
    secB:  document.querySelector("#sec4")
});





function openSection (AObservar, section1, section2){
// Opciones de configuración del observador
    const opciones = {
    root: null, // El viewport del navegador se usa como la región de visualización
    rootMargin: '0px', // Margen adicional alrededor del viewport
    threshold: 0.7 // Umbral de intersección al 50%
  };

  function elementoObservadoCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // El elemento está siendo observado
        
        
        section2.classList.add("step-1");
        setTimeout(function() {section1.classList.add("step-unique")}, 100);
        setTimeout(function() {section2.classList.add("step-2")}, 300);
        setTimeout(function() {section2.classList.add("step-3")}, 1200);
        
      }   
    });
  }
  
  const observer = new IntersectionObserver(elementoObservadoCallback, opciones);
  observer.observe(AObservar);
}

openSection(Obs1.id, Obs1.secA, Obs1.secB);
openSection(Obs2.id, Obs2.secA, Obs2.secB);

// let prevScrollPos = window.scrollY;
// const navbar = document.getElementById('navbar');
// const threshold = 100; // Puedes ajustar este valor según cuánto desea que el usuario haga scroll antes de que el fondo cambie de transparente a un color sólido.

// window.onscroll = function() {
//     const currentScrollPos = window.scrollY;
    
//     prevScrollPos = currentScrollPos;

//     // Cambia la opacidad de la barra de navegación al principio de la página
//     if (currentScrollPos < threshold) {
//         navbar.style.background= 'rgba(0, 0, 0, 0)';
//     } else {
//         navbar.style.background = 'linear-gradient(133deg,#49494952, #117052d1 27% , #21795c, #6b6b6b87 85%)'; // Reemplaza 'color-aqui' con el color deseado (por ejemplo, 'rgb(0, 0, 0)' o '#000')
//     }
// }

const sectionPlano= document.querySelector('#Plano');
const contPlano= document.querySelector('#contPlano');
const titlePlano= document.querySelector("#titlePlano");
const Plano= document.querySelector('#PlanoIMG');
const arrowPlano= document.querySelector('#arrow');

titlePlano.addEventListener("click", function(){
    if(contPlano.classList.contains("active")){
        
        Plano.style.opacity=0;
        setTimeout(function() 
        {
        arrowPlano.classList.remove("arrowctive");
        contPlano.classList.remove("active");
        sectionPlano.classList.remove("sectionActive");
        titlePlano.classList.add("m0");
        }, 700);
        
    }
    else{
        contPlano.classList.add("active");
        sectionPlano.classList.add("sectionActive");
        setTimeout(function() {Plano.style.opacity=1; }, 800);
        titlePlano.classList.remove("m0");
        arrowPlano.classList.add("arrowctive");
        
    }
});

const swiper = new Swiper('.swiper', {
    autoplay: true,
    loop: true,
    slidesPerView:3 ,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        300: {
            slidesPerView:1
        },
        700: {
            slidesPerView:2
        },
        1000: {
            slidesPerView:3
        },

      }
  });


  var navbar = document.getElementById('navbar');
  var navbarTop = document.querySelector('.bgnav');
  var navbarDown = document.querySelector('.bgnavactive');

  window.addEventListener('scroll', function () {
    
    if (window.scrollY > 50) {
        navbarTop.style.opacity = 0;
        navbarDown.style.opacity = 1; // Mostrar el fondo final
    } else {
        navbarTop.style.opacity = 1;
        navbarDown.style.opacity = 0; // Ocultar el fondo final

    }
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.itemNav');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });

  let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    if (isMobile){
        
    const Quads = document.querySelectorAll(".despVentas");
    let activeIndex = 0;

    function updateLights() {
        Quads.forEach((light, index) => {
            if (index === activeIndex) {
                light.classList.add('ventasActive');
            } else {
                light.classList.remove('ventasActive');
            }
        });

        activeIndex = (activeIndex + 1) % Quads.length;
        
    }

    const infos = document.querySelectorAll(".contFlex");
    let activo = 0;

    function updateInfos() {
        infos.forEach((light, index) => {
            if (index === activo) {
                light.classList.add('step-3');
            } else {
                light.classList.remove('step-3');
            }
        });

        activo = (activo + 1) % infos.length;
        
    }

    // Configura el intervalo para cambiar las luces cada 1000 ms (1 segundo)
    setInterval(updateInfos, 5000);
    setInterval(updateLights, 5000);
    }

    const navMobile= document.getElementById("mobileNav");
    const closers= document.querySelectorAll(".clNav");
    const opener= document.getElementById("opener");

    opener.addEventListener("click", function(){
        navMobile.classList.add("openNav");
    });

    closers.forEach(function(elem) {
        elem.addEventListener("click", function() {
            navMobile.classList.remove("openNav");
        });
    });
    
})(jQuery);

