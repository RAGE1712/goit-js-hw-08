import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './helpers'
const iframe = document.querySelector("iframe");
const player = new VimeoPlayer(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

function timeSave(data) {
    let seconds = data.seconds;
    const key = 'videoplayer-current-time';
    const value = seconds;
    save(key, value);
}

player.on('timeupdate', throttle(timeSave, 1000));

player
  .setCurrentTime(load('videoplayer-current-time'))
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
        break;
        default:
        break;
    }
  });