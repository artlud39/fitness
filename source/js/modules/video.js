function findVideos() {
  let videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let button = video.querySelector('.video__button');

  video.addEventListener('click', () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL());
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL() {
  return 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1';
}

export {findVideos};
