import player from '../assets/js/player';

it('Returns wining player', () => {
  const gamer = player('user1', 'X');
  expect(gamer.renderWinner()).toBe('user1 WINS!');
});