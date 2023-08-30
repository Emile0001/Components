// Get all elements with class "accordion__panel"
let accordion__panels = document.getElementsByClassName("accordion__panel");

// Loop through each accordion panel and add an event listener
for (let i = 0; i < accordion__panels.length; i++) {
    accordion__panels[i].addEventListener("click", function () {
        // Get the corresponding panel__wrapper for the clicked accordion panel
        let panel__wrapper = this.nextElementSibling;

        // Toggle the class name when the panel is clicked
        if (panel__wrapper.classList.contains("panel__wrapper--open")) {
            panel__wrapper.classList.remove("panel__wrapper--open");
            panel__wrapper.classList.add("panel__wrapper--closed");
        } else {
            panel__wrapper.classList.remove("panel__wrapper--closed");
            panel__wrapper.classList.add("panel__wrapper--open");
        }
    });
}
