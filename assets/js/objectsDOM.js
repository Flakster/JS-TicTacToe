const DOM = () => {
  const containers = document.getElementsByClassName('container');
  const screen = document.getElementsByClassName('container-fluid')[0];
  const header = document.getElementsByTagName('h5')[0];
  const mainTitle = document.getElementsByTagName('h1')[0];
  const pop = document.getElementsByClassName('position-absolute')[0];
  const slots = document.getElementsByClassName('slot');


  const modifyElementsDOM = (name1) => {
    containers[1].classList.add('d-none');
    screen.classList.add('d-none');
    containers[1].classList.remove('d-flex');
    containers[0].classList.remove('d-none');
    header.innerHTML = `${name1} Turn`;
    header.classList.remove('d-none');
  };

  return {
    slots,
    pop,
    mainTitle,
    modifyElementsDOM,
    containers,
    screen,
    header,
  };
};

export default DOM;
