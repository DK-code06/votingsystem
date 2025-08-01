const candidates = {
  Alice: 0,
  Bob: 0,
  Charlie: 0
};


function voteForCandidate(name) {
  if (candidates[name] !== undefined) {
    candidates[name]++;
    document.getElementById("winner").innerText = "Winner: " + getWinner();
  }
}


function getWinner() {
  return Object.entries(candidates).reduce((a, b) => a[1] >= b[1] ? a : b)[0];
}