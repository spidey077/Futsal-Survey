document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        location.reload();
    });
});