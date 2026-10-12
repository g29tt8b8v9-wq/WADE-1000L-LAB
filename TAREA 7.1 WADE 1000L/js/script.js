/*
==========================================================
DATA JOURNEY
JavaScript principal

Funciones:
1. Carrusel personalizado.
2. Interacción hover en proyectos.
3. Detalles de proyectos.
4. Validación del formulario.
==========================================================
*/


document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // 1. CARRUSEL DE IMÁGENES
    // =====================================================

    const slides =
        document.querySelectorAll(".carousel-slide");

    const dots =
        document.querySelectorAll(".carousel-dot");

    const previousButton =
        document.getElementById("previousSlide");

    const nextButton =
        document.getElementById("nextSlide");

    let currentSlide = 0;


    function showSlide(index) {

        if (slides.length === 0) {
            return;
        }

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });


        if (index >= slides.length) {
            currentSlide = 0;
        }

        else if (index < 0) {
            currentSlide = slides.length - 1;
        }

        else {
            currentSlide = index;
        }


        slides[currentSlide]
            .classList.add("active");

        if (dots[currentSlide]) {
            dots[currentSlide]
                .classList.add("active");
        }
    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                showSlide(currentSlide + 1);

            }
        );
    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            function () {

                showSlide(currentSlide - 1);

            }
        );
    }


    dots.forEach(function (dot, index) {

        dot.addEventListener(
            "click",
            function () {

                showSlide(index);

            }
        );

    });


    // Cambio automático cada cinco segundos.

    if (slides.length > 0) {

        setInterval(function () {

            showSlide(currentSlide + 1);

        }, 5000);

    }


    // =====================================================
    // 2. INTERACCIÓN CON TARJETAS
    // =====================================================

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.classList.add(
                    "project-highlight"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.classList.remove(
                    "project-highlight"
                );

            }
        );

    });


    // =====================================================
    // 3. DETALLES DE PROYECTOS
    // =====================================================

    const detailButtons =
        document.querySelectorAll(".quick-detail");

    const modalElement =
        document.getElementById("projectModal");


    if (modalElement) {

        const modal =
            new bootstrap.Modal(modalElement);


        detailButtons.forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const title =
                        button.dataset.title;

                    const description =
                        button.dataset.description;


                    document.getElementById(
                        "modalTitle"
                    ).textContent = title;


                    document.getElementById(
                        "modalDescription"
                    ).textContent = description;


                    modal.show();

                }
            );

        });

    }


    // =====================================================
    // 4. VALIDACIÓN DEL FORMULARIO
    // =====================================================

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        const nameInput =
            document.getElementById("name");

        const emailInput =
            document.getElementById("email");

        const subjectInput =
            document.getElementById("subject");

        const messageInput =
            document.getElementById("message");


        // Validación del nombre

        nameInput.addEventListener(
            "input",
            function () {

                validateText(
                    nameInput,
                    "nameFeedback",
                    2,
                    "El nombre debe contener al menos 2 caracteres."
                );

            }
        );


        // Validación del email

        emailInput.addEventListener(
            "input",
            validateEmail
        );


        // Validación del asunto

        subjectInput.addEventListener(
            "input",
            function () {

                validateText(
                    subjectInput,
                    "subjectFeedback",
                    3,
                    "Escribe un asunto válido."
                );

            }
        );


        // Validación del mensaje

        messageInput.addEventListener(
            "input",
            function () {

                validateText(
                    messageInput,
                    "messageFeedback",
                    10,
                    "El mensaje debe contener al menos 10 caracteres."
                );

            }
        );


        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const nameValid =
                    nameInput.value.trim().length >= 2;

                const emailValid =
                    isValidEmail(emailInput.value);

                const subjectValid =
                    subjectInput.value.trim().length >= 3;

                const messageValid =
                    messageInput.value.trim().length >= 10;


                if (
                    nameValid &&
                    emailValid &&
                    subjectValid &&
                    messageValid
                ) {

                    document.getElementById(
                        "formSuccess"
                    ).classList.remove("d-none");

                }

                else {

                    alert(
                        "Por favor, verifica los campos del formulario."
                    );

                }

            }
        );

    }


    // =====================================================
    // FUNCIONES DE VALIDACIÓN
    // =====================================================

    function validateText(
        input,
        feedbackId,
        minimum,
        errorMessage
    ) {

        const feedback =
            document.getElementById(feedbackId);


        if (input.value.trim().length >= minimum) {

            input.classList.remove(
                "input-invalid"
            );

            input.classList.add(
                "input-valid"
            );

            feedback.textContent =
                "Información válida.";

            feedback.style.color =
                "#1261a0";

        }

        else {

            input.classList.remove(
                "input-valid"
            );

            input.classList.add(
                "input-invalid"
            );

            feedback.textContent =
                errorMessage;

            feedback.style.color =
                "#0a3a5c";

        }

    }


    function isValidEmail(email) {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);

    }


    function validateEmail() {

        const emailInput =
            document.getElementById("email");

        const feedback =
            document.getElementById(
                "emailFeedback"
            );


        if (isValidEmail(emailInput.value)) {

            emailInput.classList.remove(
                "input-invalid"
            );

            emailInput.classList.add(
                "input-valid"
            );

            feedback.textContent =
                "Correo electrónico válido.";

            feedback.style.color =
                "#1261a0";

        }

        else {

            emailInput.classList.remove(
                "input-valid"
            );

            emailInput.classList.add(
                "input-invalid"
            );

            feedback.textContent =
                "Introduce un correo electrónico válido.";

            feedback.style.color =
                "#0a3a5c";

        }

    }

    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.getElementById("site-nav");

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", function () {
            const isOpen = siteNav.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    const yearNodes = document.querySelectorAll("[data-year]");
    yearNodes.forEach(function (node) {
        node.textContent = new Date().getFullYear();
    });

});
