const accordionContents = document.querySelectorAll(".accordion-content");

// [...accordionContents].forEach((accordionContent) => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            const accordionContent = e.currentTarget.parentElement.nextElementSibling;
            accordionContent.classList.toggle('show-text');
        })
    })
// })

