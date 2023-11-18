import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const player = new VimeoPlayer(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });


const timeSave = function (data) {
  let seconds = data.seconds;
  const key = 'videoplayer-current-time';
  const value = seconds;
  saveToLS(key, value);
};

player.on('timeupdate', timeSave);
