
const isIntersecting = (entries) => {
  return entries.isIntersecting // true si esta dentro de la pantalla
}
const accion = (entry) => {
  console.log("holis");
  let container = entry.target.firstChild
  let img = container.firstChild;
  console.log("img", img);
  let url = img.dataset.src;
  img.src = url
  
  observar.unobserve(container)
}
const observar = new IntersectionObserver(entries => {
  entries
    .filter(isIntersecting)
    .forEach(accion)
});

export const registerImage = (image) => {
  observar.observe(image)
};
