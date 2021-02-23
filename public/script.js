const bodySelector = document.querySelector('body');

const bodyBgHandler = () => {
  if (
    window.location.href === 'http://localhost:3000/landingpage' ||
    window.location.href === 'https://cloud-bookstore.com/landingpage' ||
    window.location.href === 'http://cloud-bookstore.com/landingpage' ||
    window.location.href === 'https://www.cloud-bookstore.com/landingpage' ||
    window.location.href === 'http://www.cloud-bookstore.com/landingpage'
  ) {
    bodySelector.setAttribute('class', 'blackBg');
  }
};

bodyBgHandler();
