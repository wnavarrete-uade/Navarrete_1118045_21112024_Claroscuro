$(document).ready(function () {
    // Cambiar a modo claro
    $("#btn-light").click(function () {
        $("body").removeClass("dark-mode").addClass("light-mode");
    });

    // Cambiar a modo oscuro
    $("#btn-dark").click(function () {
        $("body").removeClass("light-mode").addClass("dark-mode");
    });
});