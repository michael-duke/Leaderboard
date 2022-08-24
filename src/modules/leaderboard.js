import CreateScore from './create-Score';
import DynamicBoard from './dynamic-Board';

const dynamicBoard = new DynamicBoard();

export class LeaderBoard {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('scores')) || [];
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mkGSPgbjWHFivfwICGOV/';
  }

  addScore(score) {
    this.addToAPI(this.url, score);
  }

  refresh = async () => {
    this.scores = await this.refreshFromAPI();
    this.sortScores();
    this.saveLeaderboard();
    dynamicBoard.render(this.scores);
  };

  addToAPI = async (url, { name: user, points: score }) => {
    await fetch(`${url}scores/`, {
      method: 'POST',
      body: JSON.stringify({ user, score }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  };

  refreshFromAPI = async () => {
    const scores = await fetch(`${this.url}scores/`)
      .then((response) => response.json())
      .then(({ result }) => result.map(({ score: points, user: name }) => ({
        name,
        points,
      })));

    return scores;
  }

  sortScores() {
    this.scores = this.scores
      .map(({ name, points }, index) => {
        const id = index + 1;
        points = +points;
        return { id, name, points };
      })
      .sort((a, b) => b.points - a.points)
      .map((score, index) => {
        score.id = index + 1;
        return score;
      });
  }

  getInput() {
    const { value: name } = document.getElementById('name');
    const { value: points } = document.getElementById('score');

    if (name.trim().length > 0 && points.length > 0) {
      this.addScore(new CreateScore(name, points));
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
