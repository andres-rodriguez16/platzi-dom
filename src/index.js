import { registerImage } from './lazy';

let min = 1;
let max = 122;

const app = document.querySelector('.app');

const random = () => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createImage = () => {
  let containerImage = document.createElement('div');
  containerImage.className = 'p-4';

  let fondoGris = document.createElement('div');
  fondoGris.style.background = '#e5e7eb';
  fondoGris.style.minHeight = '100px';
  fondoGris.style.display = 'inline-block';
  fondoGris.style.borderRadius = '8px';
  
  let newImage = document.createElement('img');
  newImage.className = 'mx-auto max-w-xs';
  newImage.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
  fondoGris.appendChild(newImage);
  containerImage.appendChild(fondoGris);
  return containerImage;
};

const addImage = () => {
  const newImage = createImage();
  app.appendChild(newImage);
  registerImage(newImage);
};
const clean = () => {
  app.innerHTML = ""
}  

const video = document.createElement("video")
video.src = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
video.controls = true;

app.appendChild(video)

const buttonAddImage = document.querySelector('.add__image');
const buttonClean = document.querySelector(".clean")
buttonClean.addEventListener("click", clean )
buttonAddImage.addEventListener('click', addImage);
