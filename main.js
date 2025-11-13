// main.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-preinscripcion");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // evita el envío tradicional
        alert("✅ Tu preinscripción fue enviada correctamente.");
        form.reset();
    });
});
