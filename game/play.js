play.onclick = function() {
  
  sessionStorage.setItem("PlayerName", PlayerName.value);
  
  sessionStorage.setItem("Match", MatchCount.value);
  
  lobby.className = "lobby hide";
  game.className = "game";
  
  if (PlayerName.value.length == "0") {
    
    nick.innerHTML = "Human";
    
  } else {
    
    nick.innerHTML = PlayerName.value;
    
  }
 
}
