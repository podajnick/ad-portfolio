document.addEventListener("DOMContentLoaded", function() {
    const popup = document.querySelector("#popup");
    const closePopup = document.querySelector("#close-popup");

    popup.style.display = "block"; // Pokazuje pop-up po załadowaniu strony

    closePopup.addEventListener("click", function() {
        popup.style.display = "none"; // Zamyka pop-up po kliknięciu przycisku "Zamknij"
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.querySelector("#currentYear");
      if (yearElement) {
          const now = new Date();
          const currentYear = now.getFullYear();
          yearElement.textContent = currentYear;
      }
});

function skopiujLink() {
    const copyText = document.querySelector("#linkDoSkopiowania");

    navigator.clipboard.writeText(copyText.value).then(() => {
        alert("Link został skopiowany: " + copyText.value);
    }).catch(err => {
        /* Obsłuż błędy, jeśli API nie jest dostępne (np. w starszych przeglądarkach) */
        console.error('Nie udało się skopiować tekstu: ', err);
    });
}

function skopiujLinkTel() {
    const copyText = document.querySelector("#telKopiuj");

    navigator.clipboard.writeText(copyText.value).then(() => {
        alert("Skopiowano numer telefonu: " + copyText.value);
    }).catch(err => {
        /* Obsłuż błędy, jeśli API nie jest dostępne (np. w starszych przeglądarkach) */
        console.error('Nie udało się skopiować tekstu: ', err);
    });
}

function skopiujLinkMail() {
    const copyText = document.querySelector("#mailKopiuj");

    navigator.clipboard.writeText(copyText.value).then(() => {
        alert("Skopiowano adres mailowy: " + copyText.value);
    }).catch(err => {
        /* Obsłuż błędy, jeśli API nie jest dostępne (np. w starszych przeglądarkach) */
        console.error('Nie udało się skopiować tekstu: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-links a');
    
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
            
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
              
      if (targetElement) {
        const headerHeight = document.querySelector('.nawigacja').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
})

//top-button //top-button //top-button //top-button //top-button //top-button //top-button //top-button //top-button //top-button
//_______________________________________________________________________________________________________________________________

let topButton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.querySelector("#fulskrin").addEventListener("click", (event) => {
  document.querySelector(".slide.active").requestFullscreen();
});

//nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno
//_________________________________________________________________________________________________________________________________

let activeSlideNumber = 1;
let arrowLeft = document.querySelector("#prawo");
let arrowRight = document.querySelector("#lewo");

let dot1 = document.querySelector("#dot1")
let dot2 = document.querySelector("#dot2")
let dot3 = document.querySelector("#dot3")
let dot4 = document.querySelector("#dot4")
let dot5 = document.querySelector("#dot5")
let dot6 = document.querySelector("#dot6")

let slide1 = document.querySelector("#slide1")
let slide2 = document.querySelector("#slide2")
let slide3 = document.querySelector("#slide3")
let slide4 = document.querySelector("#slide4")
let slide5 = document.querySelector("#slide5")
let slide6 = document.querySelector("#slide6")

let hideActiveSlide = () => {
    let activeElement = document.querySelector(".slide.active");
    activeElement.classList.remove("active");
}

let showSlide = (slideNumber) => {
  hideActiveSlide();
  document.querySelector("#slide"+slideNumber).classList.add("active");

  // --- AKTYWNE PODŚWIETLENIE MINIATURY ---
  [dot1, dot2, dot3, dot4, dot5, dot6].forEach(dot => {
      dot.classList.remove("active-thumb");
  });
  document.querySelector("#dot" + slideNumber).classList.add("active-thumb");
}

let showNextSlide = () => {
  if(activeSlideNumber === 6) {
    activeSlideNumber = 1;
  } else {
      activeSlideNumber = activeSlideNumber + 1;
    }
  showSlide(activeSlideNumber);
}

let showPreviousSlide = () => {
  if(activeSlideNumber === 1) {
    activeSlideNumber = 6;
  } else {
      activeSlideNumber = activeSlideNumber - 1;
    }
  showSlide(activeSlideNumber);
}

let showSlide1 = () => {
  showSlide(1)
}
let showSlide2 = () => {
  showSlide(2)
}
let showSlide3 = () => {
  showSlide(3)
}
let showSlide4 = () => {
  showSlide(4)
}
let showSlide5 = () => {
  showSlide(5)
}
let showSlide6 = () => {
  showSlide(6)
}

dot1.addEventListener("click", showSlide1)
dot2.addEventListener("click", showSlide2)
dot3.addEventListener("click", showSlide3)
dot4.addEventListener("click", showSlide4)
dot5.addEventListener("click", showSlide5)
dot6.addEventListener("click", showSlide6)

arrowLeft.addEventListener("click", showNextSlide);
arrowRight.addEventListener("click", showPreviousSlide);

window.addEventListener("load", () => {
    showSlide(activeSlideNumber);
});