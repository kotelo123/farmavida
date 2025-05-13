const productos = [
  { id: 1, nombre: "Paracetamol", precio: 1000, imagen: "img/paracetamol.jpg" },
  { id: 2, nombre: "antiacido", precio: 1500, imagen: "img/antiacido.jpg" },
  { id: 3, nombre: "bloqueador_solar", precio: 2000, imagen: "img/bloqueador_solar.jpg" },
  { id: 4, nombre: "Mascarillas", precio: 500, imagen: "img/mascarillas.jpg" },
  { id: 5, nombre: "multivitaminico", precio: 1200, imagen: "img/multivitaminico.jpg" },
  { id: 6, nombre: "Termómetro", precio: 5000, imagen: "img/termometro.jpg" },
  { id: 7, nombre: "Antigripal", precio: 2500, imagen: "img/antigripal.jpg" },
  { id: 8, nombre: "preservativos", precio: 800, imagen: "img/preservativos.jpg" },
  { id: 9, nombre: "Jabón_antibacterial", precio: 900, imagen: "img/jabon_antibacterial.jpg" },
  { id: 10, nombre: "test_de_embarazo", precio: 1300, imagen: "img/test_de_embarazo.jpg" }
]

const contenedor = document.getElementById("productos");

productos.forEach(producto => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100%; height:150px; object-fit:cover;" />
    <h3>${producto.nombre}</h3>
    <p>Precio: $${producto.precio}</p>
    <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
  `;
  contenedor.appendChild(div);
});