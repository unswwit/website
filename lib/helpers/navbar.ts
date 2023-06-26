// @ts-nocheck comment
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

const changeSponsorsToArrowDown = () => {
  let sponsorsText = document.getElementById('sponsorsText');
  sponsorsText.innerHTML = 'Sponsors ▾';
};

const changeSponsorsToArrowRight = () => {
  let sponsorsText = document.getElementById('sponsorsText');
  sponsorsText.innerHTML = 'Sponsors ▸';
};

const changeEventsToArrowDown = () => {
  let eventsText = document.getElementById('eventsText');
  eventsText.innerHTML = 'Events ▾';
};

const changeEventsToArrowRight = () => {
  let mediaText = document.getElementById('eventsText');
  mediaText.innerHTML = 'Events ▸';
};

export {
  changeAboutUsToArrowDown,
  changeAboutUsToArrowRight,
  changeMediaToArrowDown,
  changeMediaToArrowRight,
  changeSponsorsToArrowDown,
  changeSponsorsToArrowRight,
  changeEventsToArrowDown,
  changeEventsToArrowRight
};
