import CreateScore from './create-Score';
import DynamicBoard from './dynamic-Board';

const dynamicBoard = new DynamicBoard();

export class LeaderBoard {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('scores')) || [];
  }

  addScore(score) {
    this.scores.push(score);
    this.sortScores();
    this.saveLeaderboard();
    dynamicBoard.render(this.scores);
  }

  refresh() {
    this.scores = [];
    this.saveLeaderboard();
    dynamicBoard.renderEmptyMessage();
  }

  sortScores() {
    this.scores = this.scores
      .sort((a, b) => b.points - a.points)
      .map((score, index) => {
        score.id = index + 1;
        return score;
      });
  }

  getInput() {
    const id = this.scores.length + 1;
    const { value: name } = document.getElementById('name');
    const { value: points } = document.getElementById('score');

    if (name.trim().length > 0 && points.length > 0) {
      this.addScore(new CreateScore(id, name, points));
      document.getElementById('name').value = '';
      document.getElementById('score').value = '';
    }
  }

  isScoreBoardEmpty() {
    if (this.scores.length === 0) dynamicBoard.renderEmptyMessage();
  }

  saveLeaderboard() {
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }
}

export { dynamicBoard };
