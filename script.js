// Verifica que el DOM esté cargado antes de inicializar el mapa
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar el mapa centrado en Lanzarote
    var map = L.map('map').setView([29.0469, -13.5899], 10);

    // Cargar y mostrar el mapa desde OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(map);

    // Agregar puntos de interés
    var puntosDeInteres = [
        { nombre: "Timanfaya", coordenadas: [29.0316, -13.7244] },
        { nombre: "Cueva de los Verdes", coordenadas: [29.1563, -13.4316] },
        { nombre: "Jardín de Cactus", coordenadas: [29.0883, -13.4802] },
    ];

    puntosDeInteres.forEach(function(punto) {
        L.marker(punto.coordenadas).addTo(map)
            .bindPopup(`<b>${punto.nombre}</b>`)
            .openPopup();
    });
});
