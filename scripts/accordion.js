// Get all elements with class "accordion__panel"
let accordion__panels = document.getElementsByClassName("accordion__panel");

// Loop through each accordion panel and add an event listener
for (let i = 0; i < accordion__panels.length; i++) {
    accordion__panels[i].addEventListener("click", function () {
        document
            .getElementsByClassName("panel__wrapper--closed")
            .classList.toggle("panel__wrapper--closed");
    });
}
