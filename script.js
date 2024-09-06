let colorchange = false;

function themetoggle() {
    const navElement = document.querySelector('nav');
  const headerElement = document.querySelector('header');
  const h2Elements = document.querySelectorAll('h2');

  if (!colorchange) {
    navElement.style.backgroundColor = '#e46100';
    headerElement.style.backgroundColor = '#fc9e51';
    h2Elements.forEach(h2 => {
        h2.style.color = '#ff7200'});
    colorchange = true;
  } else {
    navElement.style.backgroundColor = '#004d00';
    headerElement.style.backgroundColor = '#009f00';
    h2Elements.forEach(h2 => {
        h2.style.color = '#006400'});
    colorchange = false;
  }
}
