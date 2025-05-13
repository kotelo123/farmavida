const productos = [
  { id: 1, nombre: "Paracetamol", precio: 1000 },
  { id: 2, nombre: "Ibuprofeno", precio: 1500 },
  { id: 3, nombre: "Vitamina C", precio: 2000 },
  { id: 4, nombre: "Mascarilla", precio: 500 },
  { id: 5, nombre: "Alcohol gel", precio: 1200 },
  { id: 6, nombre: "Termómetro", precio: 5000 },
  { id: 7, nombre: "Antigripal", precio: 2500 },
  { id: 8, nombre: "Guantes", precio: 800 },
  { id: 9, nombre: "Jabón antibacterial", precio: 900 },
  { id: 10, nombre: "Loratadina", precio: 1300 }
];

const contenedor = document.getElementById("productos");

productos.forEach(producto => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>Precio: $${producto.precio}</p>
    <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
  `;
  contenedor.appendChild(div);
});


