
import DOM from './objectsDOM.js'

const player = (name, val) => {
  const renderPop = (message) => {
    const header = DOM().header
    const mainTitle = DOM().mainTitle
    mainTitle.style.color = '#ffff';
    header.classList.add('d-none');
    const pop = DOM().pop
    pop.classList.remove('d-none');
    document.body.style.background = '#f6f6f6';
    const { children } = pop;

    const popUp = children[0].children[0];

    popUp.innerHTML = message;
    children[0].children[1].addEventListener('click', () => {
      window.location.reload();
    });
  };

  const renderWinner = () => {
    const message = `${name} WINS!`;
    renderPop(message);
  };

  
  return {
    renderPop,
    renderWinner,
    name,
    val,
  };
};

export default player;