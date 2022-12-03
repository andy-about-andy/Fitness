// Функция взята из интернета и доработана
// Источник - https://github.com/pepelsbey/playground/tree/main/12

// const gymVideo = document.getElementById('gym-video');


// const video = () => {
//   setupVideo(gymVideo);
// };

// const setupVideo = () => {
//   const link = document.getElementById('gym-link');
//   let url = link.src;
//   const button = document.getElementById('gym-button');

//   gymVideo.addEventListener('click', () => {
//     let iframe = createIframe();

//     link.remove();
//     button.remove();
//     gymVideo.appendChild(iframe);
//   });

//   link.removeAttribute('href');
//   gymVideo.classList.add('gym__content-video--enabled');
// };

// const createIframe = () => {
//   let iframe = document.createElement('iframe');
//   // let url = link.src;

//   iframe.setAttribute('allowfullscreen', '');
//   iframe.setAttribute('allow', 'autoplay');
//   iframe.setAttribute('src', url);
//   iframe.classList.add('gym__media');

//   return iframe;
// };

// // const generateURL = () => {
// //   let query = '?rel=0&showinfo=0&autoplay=1';

// //   return 'https://www.youtube.com/embed/';
// // };

// export default video;


function playVideo() {
  let videos = document.querySelectorAll('.gym__content-video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.gym__video-link');
  let media = video.querySelector('.gym__media');
  let button = video.querySelector('.gym__video-button');
  let id = parseMediaURL(media);

  video.addEventListener('click', () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('gym__content-video--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('gym__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

export default playVideo;
