let carrito = [];

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total");
  lista.innerHTML = "";
  let suma = 0;

  carrito.forEach((producto, index) => {
    suma += producto.precio;
    const li = document.createElement("li");
    li.textContent = ${producto.nombre} - $${producto.precio};
    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.onclick = () => {
      carrito.splice(index, 1);
      actualizarCarrito();
    };
    li.appendChild(btn);
    lista.appendChild(li);
  });

  total.textContent = suma;
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}