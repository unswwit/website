const changeAboutUsToArrowDown = () => {
  let aboutUsText = document.getElementById('aboutUsText');
  aboutUsText.innerHTML = 'About Us ▾';
};

const changeAboutUsToArrowRight = () => {
  let aboutUsText = document.getElementById('aboutUsText');
  aboutUsText.innerHTML = 'About Us ▸';
};

const changeMediaToArrowDown = () => {
  let mediaText = document.getElementById('mediaText');
  mediaText.innerHTML = 'Media ▾';
};

const changeMediaToArrowRight = () => {
  let mediaText = document.getElementById('mediaText');
  mediaText.innerHTML = 'Media ▸';
};

export { changeAboutUsToArrowDown, changeAboutUsToArrowRight, changeMediaToArrowDown, changeMediaToArrowRight };
