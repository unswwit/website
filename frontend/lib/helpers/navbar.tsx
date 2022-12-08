let aboutUsText = document.getElementById('aboutUsText');
let mediaText = document.getElementById('mediaText');

const changeAboutUsToArrowDown = () => {
  aboutUsText.innerHTML = 'About Us ▾';
};

const changeAboutUsToArrowRight = () => {
  aboutUsText.innerHTML = 'About Us ▸';
};

const changeMediaToArrowDown = () => {
  mediaText.innerHTML = 'Media ▾';
};

const changeMediaToArrowRight = () => {
  mediaText.innerHTML = 'Media ▸';
};

export { changeAboutUsToArrowDown, changeAboutUsToArrowRight, changeMediaToArrowDown, changeMediaToArrowRight };
