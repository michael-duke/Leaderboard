export default class DynamicBoard {
  constructor() {
    this.messageOn = false;
  }

  renderEmptyMessage() {
    this.messageOn = true;
    const scoreDisplay = this.resetScoreDisplay();

    const message = document.createElement('span');
    message.innerText = 'No winners yet in the Leaderboard. ';
    message.className = 'empty-message italic';

    const smileyFace = document.createElement('span');
    smileyFace.innerText = '😄 Go to Add score, or hit Refresh';

    scoreDisplay.append(message, smileyFace);
  }

  resetScoreDisplay = () => {
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.innerHTML = '';
    return scoreDisplay;
  };

  render(scores) {
    const scoreBoard = this.resetScoreDisplay();
    scores.forEach((score) => {
      const { id, name, points } = score;

      const scoreMsg = document.createElement('h3');
      scoreMsg.classList = 'pl-3 even:bg-gray-300';
      scoreMsg.innerHTML = `<strong>${id}. </strong> ${name} :`;

      const pointsScored = document.createElement('span');
      pointsScored.classList = 'ml-2';
      pointsScored.textContent = points;
      scoreMsg.appendChild(pointsScored);

      scoreBoard.appendChild(scoreMsg);
    });
  }
}
