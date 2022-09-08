import trophyIcon from '../assets/icons/trophy-icon.png';

export default class DynamicBoard {
  constructor() {
    this.messageOn = false;
  }

  renderEmptyMessage() {
    this.messageOn = true;
    const scoreDisplay = this.resetScoreDisplay();

    const message = document.createElement('span');
    message.innerText = 'No winners yet in the Leaderboard. ';
    message.className = 'empty-message italic text-white';

    const smileyFace = document.createElement('span');
    smileyFace.innerText = '😄 Go to Add score, or hit Refresh';
    smileyFace.className = 'text-white';

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
      scoreMsg.classList =
        'pl-2 rounded hover:scale-125 cursor-pointer even:bg-gray-300 even:text-black first:text-yellow-400 first:font-bold text-white whitespace-nowrap';
      scoreMsg.innerHTML = `<strong>${id}. </strong> 
      <span>${name} :</span?`;

      const pointsScored = document.createElement('span');
      pointsScored.classList = 'ml-2';
      pointsScored.textContent = points;

      scoreMsg.appendChild(pointsScored);

      if (id === 1) {
        const trophy = document.createElement('img');
        trophy.classList = 'w-10 h-10 animate-wiggle';
        trophy.src = trophyIcon;
        scoreMsg.classList.add('flex', 'items-center');
        scoreMsg.appendChild(trophy);
      }

      scoreBoard.appendChild(scoreMsg);
    });
  }
}
