document.addEventListener("DOMContentLoaded", function () {

    const status = document.getElementById("status");

    status.addEventListener("click", function () {

        status.textContent = "✅ Portfolio is running successfully!";

    });

});