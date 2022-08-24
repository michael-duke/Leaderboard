import './style.css';
import 'tw-elements';

import { LeaderBoard, dynamicBoard } from './modules/leaderboard';

const leaderboard = new LeaderBoard();
leaderboard.isScoreBoardEmpty();

const { messageOn } = dynamicBoard;
if (!messageOn) dynamicBoard.render(leaderboard.scores);

const addBtn = document.querySelector('.add-score');
addBtn.onclick = () => leaderboard.getInput();

const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.onclick = () => leaderboard.refresh();
