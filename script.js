/* =========================
   SEARCH FUNCTIONALITY
========================= */

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const searchValue =
        searchInput.value.trim().toLowerCase();

    if (searchValue === "") {
        alert("Please enter something to search.");
        return;
    }

    const sections = document.querySelectorAll("section");

    let found = false;

    sections.forEach(function (section) {

        const text =
            section.innerText.toLowerCase();

        if (
            !found &&
            text.includes(searchValue)
        ) {
            section.scrollIntoView({
                behavior: "smooth"
            });

            found = true;
        }

    });

    if (!found) {
        alert(
            "No matching content found for: " +
            searchValue
        );
    }

});


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("backToTop");

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   NAVBAR AUTO CLOSE
   ON MOBILE
========================= */

const navLinks =
    document.querySelectorAll(
        ".navbar-nav .nav-link"
    );

const navbarCollapse =
    document.getElementById("mainNavbar");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (
            window.innerWidth < 992 &&
            navbarCollapse.classList.contains("show")
        ) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(
                    navbarCollapse
                );

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});