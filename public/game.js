export default function createGame() {
  
  const screen = document.getElementById('screen');
  const context = screen.getContext('2d');

  const game = {
    players: {
      player1: { x: 1, y: 1 },
      player2: { x: 9, y: 9 },
    },
    fruits: {
      fruit1: { x: 3, y: 1 },
    },
  };

  document.addEventListener('keydown', handleKeydown);

  function handleKeydown(event) {
    console.log(event.key);
  }

  renderScreen();

  function renderScreen() {
    context.fillStyle = 'white';
    context.clearReact();

    for (const playerId in game.players) {
      const player = game.players[playerId];
      context.fillStyle = 'black';
      context.fillRect(player.x, player.y, 1, 1);
    }
    for (const fruitId in game.fruits) {
      const fruit = game.fruits[fruitId];
      context.fillStyle = 'green';
      context.fillRect(fruit.x, fruit.y, 1, 1);
    }
    requestAnimationFrame(renderScreen);
  }
}
