document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "accordion__panel"
    let accordionPanels = document.querySelectorAll(".accordion__panel");

    // Loop through each accordion panel and add an event listener
    accordionPanels.forEach(function (panel) {
        panel.addEventListener("click", function () {
            // Toggle the "panel__wrapper--closed" and "panel__wrapper--open" classes
            let panelWrapper = this.querySelector(".panel__wrapper");
            panelWrapper.classList.toggle("panel__wrapper--closed");
            panelWrapper.classList.toggle("panel__wrapper--open");
        });
    });
});
