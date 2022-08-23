(()=>{"use strict";class e{constructor(e,s,t){this.name=s,this.points=t}}const s=new class{constructor(){this.messageOn=!1}renderEmptyMessage(){this.messageOn=!0;const e=this.resetScoreDisplay(),s=document.createElement("span");s.innerText="No winner yet in the Leaderboard. ",s.className="empty-message italic";const t=document.createElement("span");t.innerText="😄 Go to Add score",e.append(s,t)}resetScoreDisplay=()=>{const e=document.getElementById("score-display");return e.innerHTML="",e};render(e){const s=this.resetScoreDisplay();e.forEach((e=>{const{name:t,points:r}=e,n=document.createElement("h3");n.classList="ml-3 even:bg-gray-300",n.innerText=`${t} :`;const c=document.createElement("span");c.classList="ml-2",c.textContent=r,n.appendChild(c),s.appendChild(n)}))}},t=new class{constructor(){this.scores=JSON.parse(localStorage.getItem("scores"))||[]}addScore(e){this.scores.push(e),this.saveLeaderboard(),s.render(this.scores)}refresh(){this.scores=[],this.saveLeaderboard(),s.renderEmptyMessage()}getInput(){const s=this.scores.length+1,{value:t}=document.getElementById("name"),{value:r}=document.getElementById("score");t.trim().length>0&&r.length>0&&(this.addScore(new e(s,t,r)),document.getElementById("name").value="",document.getElementById("score").value="")}isScoreBoardEmpty(){0===this.scores.length&&s.renderEmptyMessage()}saveLeaderboard(){localStorage.setItem("scores",JSON.stringify(this.scores))}};t.isScoreBoardEmpty();const{messageOn:r}=s;r||s.render(t.scores),document.querySelector(".add-score").onclick=()=>t.getInput(),document.querySelector(".refresh-btn").onclick=()=>t.refresh()})();