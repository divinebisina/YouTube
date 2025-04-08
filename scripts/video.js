import { videoData } from './info/data.js';

let realHTML = '';

videoData.forEach((data) => {
  realHTML += `
    <div class="holder">
      <div class="thumbnail-div">
        <img class="thumbnail" src="${data.thumbnail}">
        <p class="video-time">
          ${data.duration}
        </p>
      </div>
      <div class="video-details">
        <div>
          <img class="profile-pic" src="${data.profile}">
        </div>
        <div>
          <p class="video-title">
            ${data.title}
          </p>
          <p class="others f">
            ${data.author}
          </p>
          <p class="others">
            ${data.last.view} views · ${data.last.time} ago
          </p>
        </div>
      </div>
    </div>
  `;
})

document.querySelector('.js-video-grid')
  .innerHTML = realHTML;