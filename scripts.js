// ---SCRIPT FOR HERO CARRUSEL--- //

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");

  const images = [
    "media/fondo1.jpg",
    "media/fondo2.jpg",
    "media/imagen7.jpg"
  ];

  let currentIndex = 0;
  const gradient = "linear-gradient(#2b2b2bb3, #2b2b2bb3)";

  hero.style.backgroundImage = `${gradient}, url(${images[0]})`;

  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;

    const img = new Image();
    img.src = images[currentIndex];

    img.onload = () => {
      hero.style.backgroundImage = `${gradient}, url(${img.src})`;
    };
  }

  setInterval(changeBackground, 5000);
});

///////////////////////////////////////////////////////////////////////////////////

// ---SCRIPT FOR HERO TEXT ANIMATION--- //

	document.addEventListener("DOMContentLoaded", function () {
    const textANI1 = document.querySelectorAll(".text-animate1");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    textANI1.forEach(text => observer.observe(text));
});

///////////////////////////////////////////////////////////////////////////////////

// ---SCRIPT FOR SECTION 1 IMAGE--- //

	document.addEventListener("DOMContentLoaded", function () {
    const imageANI1 = document.querySelectorAll(".image-animated1");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    imageANI1.forEach(text => observer.observe(text));
});

///////////////////////////////////////////////////////////////////////////////////

// ---SCRIPT FOR SOBRE NOSOTROS 3 ICONOS--- //

	document.addEventListener("DOMContentLoaded", function () {
    const imageANI2 = document.querySelectorAll(".image-animated2");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    imageANI2.forEach(text => observer.observe(text));
});

///////////////////////////////////////////////////////////////////////////////////

const overlay3 = document.getElementById("overlay3");

if (overlay3) {
    document.querySelectorAll("#tarjeta1").forEach(item => {
        item.addEventListener("click", () => {
            overlay3.classList.add("active");
        });
    });

    overlay3.addEventListener("click", (e) => {
        if (e.target.id === "overlay3") {
            overlay3.classList.remove("active");
        }
    });
}

///////////////////////////////////////////////////////////////////////////////////

const overlay4 = document.getElementById("overlay4");

if (overlay4) {
    document.querySelectorAll("#tarjeta2").forEach(item => {
        item.addEventListener("click", () => {
            overlay4.classList.add("active");
        });
    });

    overlay4.addEventListener("click", (e) => {
        if (e.target.id === "overlay4") {
            overlay4.classList.remove("active");
        }
    });
}

///////////////////////////////////////////////////////////////////////////////////

const overlay5 = document.getElementById("overlay5");

if (overlay5) {
    document.querySelectorAll("#tarjeta3").forEach(item => {
        item.addEventListener("click", () => {
            overlay5.classList.add("active");
        });
    });

    overlay5.addEventListener("click", (e) => {
        if (e.target.id === "overlay5") {
            overlay5.classList.remove("active");
        }
    });
}

///////////////////////////////////////////////////////////////////////////////////

// ---SCRIPT PARA EVENTOS--- //

document.addEventListener("DOMContentLoaded", function () {

    const bloques = document.querySelectorAll(".eventos3-bloque");

    console.log("Bloques encontrados:", bloques.length);

    bloques.forEach(function (bloque) {

        bloque.addEventListener("click", function () {

            console.log("CLICK DETECTADO"); 

            const contenido = this.nextElementSibling;

            if (!contenido) {
                console.log("No hay contenido hermano");
                return;
            }

            if (!contenido.classList.contains("eventos3-expandido")) {
                console.log("El siguiente elemento NO es el expandido");
                return;
            }

            this.classList.toggle("active");

            if (contenido.style.maxHeight && contenido.style.maxHeight !== "0px") {
                contenido.style.maxHeight = "0px";
            } else {
                contenido.style.maxHeight = contenido.scrollHeight + "px";
            }
        });
    });
});

///////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".slider").forEach(slider => {

    const slides = slider.querySelector(".slides");
    const slideItems = slider.querySelectorAll(".slide");
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");

    let index = 0;
    const visibleSlides = 3;
    const totalSlides = slideItems.length;

    function getMaxIndex() {
        return totalSlides - visibleSlides;
    }

    function updateSlider() {
        const slideWidth = slideItems[0].offsetWidth;
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    next.addEventListener("click", () => {
        if (index < getMaxIndex()) {
            index++;
        } else {
            index = 0;
        }
        updateSlider();
    });

    prev.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = getMaxIndex();
        }
        updateSlider();
    });

    window.addEventListener("resize", updateSlider);

});

///////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("navbar-toggle");
    const links = document.getElementById("navbar-links");
    const icon = toggle.querySelector("i");

    if (toggle && links) {
        toggle.addEventListener("click", () => {
            links.classList.toggle("active");

            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        });
    }
    links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        links.classList.remove("active");
    });
});
});