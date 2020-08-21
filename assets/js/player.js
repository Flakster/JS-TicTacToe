/* eslint-disable import/extensions */
import DOM from './objectsDOM.js';
/* eslint-enable import/extensions */
const player = (name, val) => {
  const renderPop = (message) => {
    const {
      header,
      pop,
      mainTitle,

    } = DOM();
    const {
      children,
    } = pop;

    mainTitle.style.color = '#ffff';
    header.classList.add('d-none');

    pop.classList.remove('d-none');
    document.body.style.background = '#f6f6f6';


    const popUp = children[0].children[0];

    popUp.innerHTML = message;
    children[0].children[1].addEventListener('click', () => {
      window.location.reload();
    });
  };

  const renderWinner = () => {
    const message = `${name} WINS!`;
    return message;
  };


  return {
    renderPop,
    renderWinner,
    name,
    val,
  };
};

export default player;