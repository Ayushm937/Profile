// Responser Code along with the light and dark blend mode.
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

 // typing text animation script
     var typed = new Typed(".typing", {
        strings: ["Technical Knowledge", "Web Development", "Data Entry","Managements"],
        typeSpeed: 30,
        backSpeed: 20,
        loop: true
    });
    
// Tab contents

    const tabContents = document.getElementsByClassName("tab-content");
    const tabLinks = document.getElementsByClassName("tab-link");

    function opentab(tabname) {
        for (tabLink of tabLinks) {
            tabLink.classList.remove("active-link");
        }
        for (tabContent of tabContents) {
            tabContent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-tab");
    }
    $(document).ready(function() {
        $(".owl-carousel").owlCarousel();
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })