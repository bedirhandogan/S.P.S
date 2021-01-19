function StartGame(answer) {
  
  const select_stone = "stone";
  const select_paper = "paper";
  const select_scissors = "scissors";
  const rand = Math.floor(Math.random() * 3) + 1;
  
  if (answer == select_stone) {
    
    switch (rand) {
      case 1:
        
        p_frame.innerHTML = '<div class="stone p-1-position"> </div>';
        
        break;
      case 2:
        
        p_frame.innerHTML = '<div class="paper p-2-position"> </div>';
        AddScore("player");
        win.className = "win";
        door2.className = "door-2";
        
        setTimeout(function() {
         win.className = "win hide";
        }, 1500);
        
        setTimeout(function() {
         door2.className = "door-2 hide";
        }, 2500);
        
        break;
      case 3:
        
        p_frame.innerHTML = '<div class="scissors p-3-position"> </div>';
        AddScore("human");
        you_win.className = "you-win";
        door1.className = "door-1";
        
        setTimeout(function() {
         you_win.className = "you-win hide";
        }, 1500);
        
        setTimeout(function() {
         door1.className = "door-1 hide";
        }, 2500);
        
        break;
      default:
      
      console.error("Game query system gave error.")
      
    }
    
  } else if(answer == select_paper) {
    
    switch (rand) {
      case 1:
        
        p_frame.innerHTML = '<div class="stone p-1-position"> </div>';
        AddScore("human");
        you_win.className = "you-win";
        door1.className = "door-1";
        
        setTimeout(function() {
         you_win.className = "you-win hide";
        }, 1500);
        
        setTimeout(function() {
         door1.className = "door-1 hide";
        }, 2500);
        
        break;
      case 2:
        
        p_frame.innerHTML = '<div class="paper p-2-position"> </div>';
        
        break;
      case 3:
        
        p_frame.innerHTML = '<div class="scissors p-3-position"> </div>';
        AddScore("player");
        win.className = "win";
        door2.className = "door-2";
        
        setTimeout(function() {
         win.className = "win hide";
        }, 1500);
        
        setTimeout(function() {
         door2.className = "door-2 hide";
        }, 2500);
        
        break;
      default:
      
      console.error("Game query system gave error.")
      
    }
    
  } else if(answer == select_scissors) {
    
    switch (rand) {
      case 1:
        
        p_frame.innerHTML = '<div class="stone p-1-position"> </div>';
        AddScore("player");
        win.className = "win";
        door2.className = "door-2";
        
        setTimeout(function() {
         win.className = "win hide";
        }, 1500);
        
        setTimeout(function() {
         door2.className = "door-2 hide";
        }, 2500); 
        
        break;
      case 2:
        
        p_frame.innerHTML = '<div class="paper p-2-position"> </div>';
        AddScore("human");
        you_win.className = "you-win";
        door1.className = "door-1";
        
        setTimeout(function() {
         you_win.className = "you-win hide";
        }, 1500);
        
        setTimeout(function() {
         door1.className = "door-1 hide";
        }, 2500);
        
        break;
      case 3:
        
        p_frame.innerHTML = '<div class="scissors p-3-position"> </div>';
        
        break;
      default:
      
      console.error("Game query system gave error.")
      
    }
   
  } else {
    
   console.error("Error occurred in game system.");
    
  }
  
}

stone.onclick = function() {
  
  h_frame.innerHTML = '<div class="stone h-1-position"> </div>';
  StartGame("stone");
  stone.className = "stone-btn hide";
  paper.className = "paper-btn hide";
  scissors.className = "scissors-btn hide";

  setTimeout(function() {
    stone.className = "stone-btn";
    paper.className = "paper-btn";
    scissors.className = "scissors-btn";
   }, 1500);
  
  if (sessionStorage.getItem("Match") == sessionStorage.getItem("Human")) {
    
    sessionStorage.setItem("Human", 0);
    sessionStorage.setItem("Player", 0);
    human.innerHTML = "0";
    player.innerHTML = "0";
    h_frame.innerHTML = '<div class="stone h-1-position"> </div>';
    p_frame.innerHTML = '<div class="stone p-1-position"> </div>';
    
    match_win.className = "match-win";
    reload.className = "fas fa-redo reload win-color-3";
    game.className = "game win-color";
    h_frame.className = "h-frame win-color";
    p_frame.className = "p-frame win-color";
    separator.className = "separator win-color-2";
    h_score.className = "h-score win-color";
    p_score.className = "p-score win-color";
    nick.className = "h-nick-name hide";
    nick_player.className = "p-nick-name hide";
    reload.className = "fas fa-redo reload hide";
    stone.className = "stone-btn hide";
    paper.className = "paper-btn hide";
    scissors.className = "scissors-btn hide";
    you_win.className = "you-win hide-2";
    win.className = "win hide-2";
    door1.className = "door-1 hide-2";
    door2.className = "door-2 hide-2";
    
    setTimeout(function() {
      stone.className = "stone-btn hide";
      paper.className = "paper-btn hide";
      scissors.className = "scissors-btn hide";
    }, 1500);
    
    setTimeout(function() {
    match_win.className = "match-win hide-2";
    reload.className = "fas fa-redo reload";
    game.className = "game";
    stone.className = "stone-btn";
    paper.className = "paper-btn";
    scissors.className = "scissors-btn";
    h_frame.className = "h-frame";
    p_frame.className = "p-frame";
    separator.className = "separator";
    h_score.className = "h-score";
    p_score.className = "p-score";
    nick.className = "h-nick-name";
    nick_player.className = "p-nick-name";
    you_win.className = "you-win hide";
    win.className = "win hide";
    door1.className = "door-1 hide";
    door2.className = "door-2 hide";
    }, 3000);
  
  } else if(sessionStorage.getItem("Match") == 0) {
    sessionStorage.setItem("Match", 5);
  } else if(sessionStorage.getItem("Match") == sessionStorage.getItem("Player")) {
    
    sessionStorage.setItem("Human", 0);
    sessionStorage.setItem("Player", 0);
    human.innerHTML = "0";
    player.innerHTML = "0";
    h_frame.innerHTML = '<div class="stone h-1-position"> </div>';
    p_frame.innerHTML = '<div class="stone p-1-position"> </div>';
    
    match_lost.className = "match-lost";
    reload.className = "fas fa-redo reload lost-color-3";
    game.className = "game lost-color";
    h_frame.className = "h-frame lost-color";
    p_frame.className = "p-frame lost-color";
    separator.className = "separator lost-color-2";
    h_score.className = "h-score lost-color";
    p_score.className = "p-score lost-color";
    nick.className = "h-nick-name hide";
    nick_player.className = "p-nick-name hide";
    reload.className = "fas fa-redo reload hide";
    stone.className = "stone-btn hide";
    paper.className = "paper-btn hide";
    scissors.className = "scissors-btn hide";
    you_win.className = "you-win hide-2";
    win.className = "win hide-2";
    door1.className = "door-1 hide-2";
    door2.className = "door-2 hide-2";
    
    setTimeout(function() {
      stone.className = "stone-btn hide";
      paper.className = "paper-btn hide";
      scissors.className = "scissors-btn hide";
    }, 1500);
    
    setTimeout(function() {
    match_lost.className = "match-lost hide-2";
    reload.className = "fas fa-redo reload";
    game.className = "game";
    stone.className = "stone-btn";
    paper.className = "paper-btn";
    scissors.className = "scissors-btn";
    h_frame.className = "h-frame";
    p_frame.className = "p-frame";
    separator.className = "separator";
    h_score.className = "h-score";
    p_score.className = "p-score";
    nick.className = "h-nick-name";
    nick_player.className = "p-nick-name";
    you_win.className = "you-win hide";
    win.className = "win hide";
    door1.className = "door-1 hide";
    door2.className = "door-2 hide";
    }, 3000);
    
  } 
  
} 


paper.onclick = function() {
  
  h_frame.innerHTML = '<div class="paper h-2-position"> </div>';
  StartGame("paper");
  stone.className = "stone-btn hide";
  paper.className = "paper-btn hide";
  scissors.className = "scissors-btn hide";
  
  setTimeout(function() {
    stone.className = "stone-btn";
    paper.className = "paper-btn";
    scissors.className = "scissors-btn";
   }, 1500);
  
  if (sessionStorage.getItem("Match") == sessionStorage.getItem("Human")) {
    
    sessionStorage.setItem("Human", 0);
    sessionStorage.setItem("Player", 0);
    human.innerHTML = "0";
    player.innerHTML = "0";
    h_frame.innerHTML = '<div class="stone h-1-position"> </div>';
    p_frame.innerHTML = '<div class="stone p-1-position"> </div>';
    
    match_win.className = "match-win";
    reload.className = "fas fa-redo reload win-color-3";
    game.className = "game win-color";
    h_frame.className = "h-frame win-color";
    p_frame.className = "p-frame win-color";
    separator.className = "separator win-color-2";
    h_score.className = "h-score win-color";
    p_score.className = "p-score win-color";
    nick.className = "h-nick-name hide";
    nick_player.className = "p-nick-name hide";
    reload.className = "fas fa-redo reload hide";
    stone.className = "stone-btn hide";
    paper.className = "paper-btn hide";
    scissors.className = "scissors-btn hide";
    you_win.className = "you-win hide-2";
    win.className = "win hide-2";
    door1.className = "door-1 hide-2";
    door2.className = "door-2 hide-2";
    
    setTimeout(function() {
      stone.className = "stone-btn hide";
      paper.className = "paper-btn hide";
      scissors.className = "scissors-btn hide";
    }, 1500);
    
    setTimeout(function() {
    match_win.className = "match-win hide-2";
    reload.className = "fas fa-redo reload";
    game.className = "game";
    stone.className = "stone-btn";
    paper.className = "paper-btn";
    scissors.className = "scissors-btn";
    h_frame.className = "h-frame";
    p_frame.className = "p-frame";
    separator.className = "separator";
    h_score.className = "h-score";
    p_score.className = "p-score";
    nick.className = "h-nick-name";
    nick_player.className = "p-nick-name";
    you_win.className = "you-win hide";
    win.className = "win hide";
    door1.className = "door-1 hide";
    door2.className = "door-2 hide";
    }, 3000);
  
  } else if(sessionStorage.getItem("Match") == 0) {
    sessionStorage.setItem("Match", 5);
  } else if(sessionStorage.getItem("Match") == sessionStorage.getItem("Player")) {
    
    sessionStorage.setItem("Human", 0);
    sessionStorage.setItem("Player", 0);
    human.innerHTML = "0";
    player.innerHTML = "0";
    h_frame.innerHTML = '<div class="stone h-1-position"> </div>';
    p_frame.innerHTML = '<div class="stone p-1-position"> </div>';
    
    match_lost.className = "match-lost";
    reload.className = "fas fa-redo reload lost-color-3";
    game.className = "game lost-color";
    h_frame.className = "h-frame lost-color";
    p_frame.className = "p-frame lost-color";
    separator.className = "separator lost-color-2";
    h_score.className = "h-score lost-color";
    p_score.className = "p-score lost-color";
    nick.className = "h-nick-name hide";
    nick_player.className = "p-nick-name hide";
    reload.className = "fas fa-redo reload hide";
    stone.className = "stone-btn hide";
    paper.className = "paper-btn hide";
    scissors.className = "scissors-btn hide";
    you_win.className = "you-win hide-2";
    win.className = "win hide-2";
    door1.className = "door-1 hide-2";
    door2.className = "door-2 hide-2";
    
    setTimeout(function() {
      stone.className = "stone-btn hide";
      paper.className = "paper-btn hide";
      scissors.className = "scissors-btn hide";
    }, 1500);
    
    setTimeout(function() {
    match_lost.className = "match-lost hide-2";
    reload.className = "fas fa-redo reload";
    game.className = "game";
    stone.className = "stone-btn";
    paper.className = "paper-btn";
    scissors.className = "scissors-btn";
    h_frame.className = "h-frame";
    p_frame.className = "p-frame";
    separator.className = "separator";
    h_score.className = "h-score";
    p_score.className = "p-score";
    nick.className = "h-nick-name";
    nick_player.className = "p-nick-name";
    you_win.className = "you-win hide";
    win.className = "win hide";
    door1.className = "door-1 hide";
    door2.className = "door-2 hide";
    }, 3000);
    
  } 
 
} 

scissors.onclick = function() {
 
  h_frame.innerHTML = '<div class="scissors h-3-position"> </div>';
  StartGame("scissors");
  stone.className = "stone-btn hide";
  paper.className = "paper-btn hide";
  scissors.className = "scissors-btn hide";
  
  setTimeout(function() {
    stone.className = "stone-btn";
    paper.className = "paper-btn";
    scissors.className = "scissors-btn";
   }, 1500);
  
  if (sessionStorage.getItem("Match") == sessionStorage.getItem("Human")) {
    
    sessionStorage.setItem("Human", 0);
    sessionStorage.setItem("Player", 0);
    human.innerHTML = "0";
    player.innerHTML = "0";
    h_frame.innerHTML = '<div class="stone h-1-position"> </div>';
    p_frame.innerHTML = '<div class="stone p-1-position"> </div>';
    
    match_win.className = "match-win";
    reload.className = "fas fa-redo reload win-color-3";
    game.className = "game win-color";
    h_frame.className = "h-frame win-color";
    p_frame.className = "p-frame win-color";
    separator.className = "separator win-color-2";
    h_score.className = "h-score win-color";
    p_score.className = "p-score win-color";
    nick.className = "h-nick-name hide";
    nick_player.className = "p-nick-name hide";
    reload.className = "fas fa-redo reload hide";
    stone.className = "stone-btn hide";
    paper.className = "paper-btn hide";
    scissors.className = "scissors-btn hide";
    you_win.className = "you-win hide-2";
    win.className = "win hide-2";
    door1.className = "door-1 hide-2";
    door2.className = "door-2 hide-2";
    
    setTimeout(function() {
      stone.className = "stone-btn hide";
      paper.className = "paper-btn hide";
      scissors.className = "scissors-btn hide";
    }, 1500);
    
    setTimeout(function() {
    match_win.className = "match-win hide-2";
    reload.className = "fas fa-redo reload";
    game.className = "game";
    stone.className = "stone-btn";
    paper.className = "paper-btn";
    scissors.className = "scissors-btn";
    h_frame.className = "h-frame";
    p_frame.className = "p-frame";
    separator.className = "separator";
    h_score.className = "h-score";
    p_score.className = "p-score";
    nick.className = "h-nick-name";
    nick_player.className = "p-nick-name";
    you_win.className = "you-win hide";
    win.className = "win hide";
    door1.className = "door-1 hide";
    door2.className = "door-2 hide";
    }, 3000);
  
  } else if(sessionStorage.getItem("Match") == 0) {
    sessionStorage.setItem("Match", 5);
  } else if(sessionStorage.getItem("Match") == sessionStorage.getItem("Player")) {
    
    sessionStorage.setItem("Human", 0);
    sessionStorage.setItem("Player", 0);
    human.innerHTML = "0";
    player.innerHTML = "0";
    h_frame.innerHTML = '<div class="stone h-1-position"> </div>';
    p_frame.innerHTML = '<div class="stone p-1-position"> </div>';
    
    match_lost.className = "match-lost";
    reload.className = "fas fa-redo reload lost-color-3";
    game.className = "game lost-color";
    h_frame.className = "h-frame lost-color";
    p_frame.className = "p-frame lost-color";
    separator.className = "separator lost-color-2";
    h_score.className = "h-score lost-color";
    p_score.className = "p-score lost-color";
    nick.className = "h-nick-name hide";
    nick_player.className = "p-nick-name hide";
    reload.className = "fas fa-redo reload hide";
    stone.className = "stone-btn hide";
    paper.className = "paper-btn hide";
    scissors.className = "scissors-btn hide";
    you_win.className = "you-win hide-2";
    win.className = "win hide-2";
    door1.className = "door-1 hide-2";
    door2.className = "door-2 hide-2";
    
    setTimeout(function() {
      stone.className = "stone-btn hide";
      paper.className = "paper-btn hide";
      scissors.className = "scissors-btn hide";
    }, 1500);
    
    setTimeout(function() {
    match_lost.className = "match-lost hide-2";
    reload.className = "fas fa-redo reload";
    game.className = "game";
    stone.className = "stone-btn";
    paper.className = "paper-btn";
    scissors.className = "scissors-btn";
    h_frame.className = "h-frame";
    p_frame.className = "p-frame";
    separator.className = "separator";
    h_score.className = "h-score";
    p_score.className = "p-score";
    nick.className = "h-nick-name";
    nick_player.className = "p-nick-name";
    you_win.className = "you-win hide";
    win.className = "win hide";
    door1.className = "door-1 hide";
    door2.className = "door-2 hide";
    }, 3000);
    
  } 
 
} 