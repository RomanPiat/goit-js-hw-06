const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
 ];

const imageElementList = document.querySelector('.gallery');

const imageElements = images
  .map(image => `<li><img class="picture" src=${image.url} height = '200' alt='${image.alt}'></img></li>`)
  .join('');
imageElementList.insertAdjacentHTML('beforeend', imageElements);

const designList = document.querySelector('.picture');
imageElementList.style.listStyleType = 'none';
imageElementList.style.display = 'flex';
imageElementList.style.gap = '20px';

