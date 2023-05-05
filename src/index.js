import { registerImage } from './lazy';
import Video from "./assets/ShareX_lY3ci9NKjQ.mp4"
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
  newImage.className = 'mx-auto max-w-xs ';
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
  app.innerHTML = '';
};

const buttonAddImage = document.querySelector('.add__image');
const buttonClean = document.querySelector('.clean');
buttonClean.addEventListener('click', clean);
buttonAddImage.addEventListener('click', addImage);

// const video = document.querySelector('.video');
// const playButton = document.querySelector('.play');
// const playButtonIcon = playButton.querySelector('i');
// const stopButton = document.querySelector('.stop');
// const progressBar = document.querySelector('.progress');
// const timestamp = document.querySelector('.timestamp');

// video.src = Video
/* LISTEN for events */
// video.addEventListener('click', playPauseVideo);
// progressBar.addEventListener('change', setVideoProgress);
// playButton.addEventListener('click', playPauseVideo);
// stopButton.addEventListener('click', stopVideo);
// video.addEventListener('timeupdate', updateVideoProgress);


// /* Utility function */
// function playPauseVideo() {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }

//   playToPausedButton();
// }

// function playToPausedButton() {
//   if (video.paused) {
//     playButtonIcon.classList.remove('fa-pause');
//     playButtonIcon.classList.add('fa-play');
//   } else {
//     playButtonIcon.classList.remove('fa-play');
//     playButtonIcon.classList.add('fa-pause');
//   }
// }

// function stopVideo() {
//   video.pause();
//   video.currentTime = 0;
//   playToPausedButton();
//   progressBar.value = 0;
// }

// function setVideoProgress() {
//   video.currentTime = Number((progressBar.value * video.duration) / 100);
// }

// function updateVideoProgress() {
//   progressBar.value = Number((video.currentTime / video.duration) * 100);
//   let minutes = Math.floor(video.currentTime / 60);
//   let seconds = Math.floor(video.currentTime % 60);

//   if (minutes < 10) {
//     minutes = '0' + minutes;
//   }

//   if (seconds < 10) {
//     seconds = '0' + seconds;
//   }

//   timestamp.textContent = `${minutes}: ${seconds}`;
// }
