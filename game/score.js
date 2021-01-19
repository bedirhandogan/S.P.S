function AddScore(select) {
  
  if (select == "human") {
    
    let H_DATA = sessionStorage.getItem("Human");
    H_DATA++;
    sessionStorage.setItem("Human", H_DATA);
    human.innerHTML = sessionStorage.getItem("Human");
    
  } else if(select == "player") {
    
    let P_DATA = sessionStorage.getItem("Player");
    P_DATA++;
    sessionStorage.setItem("Player", P_DATA);
    player.innerHTML = sessionStorage.getItem("Player");
    
  } else {
  
  console.error("Error occurred in the score system.");
  
  } 
  
}