reload.onclick = function() {
  
  reload.className = "fas fa-redo reload loading";
  
  setTimeout(function() {
    
  reload.className = "fas fa-redo reload";
    
  }, 1000);
  
  sessionStorage.setItem("Human", 0);
  sessionStorage.setItem("Player", 0);
  human.innerHTML = "0";
  player.innerHTML = "0";
  h_frame.innerHTML = '<div class="stone h-1-position"> </div>';
  p_frame.innerHTML = '<div class="stone p-1-position"> </div>';
  
} 