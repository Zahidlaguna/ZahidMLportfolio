document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content-section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8;

            if (sectionTop < triggerPoint) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});

function sendEmail() {
    window.location.href = "mailto:Zahid728@yahoo.com?subject=Hello&body=Hi, I wanted to reach out...";
}
