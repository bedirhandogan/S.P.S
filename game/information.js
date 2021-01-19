const info = {
  
  developer : "Bedirhan Doğan", 
  project : "Stone, Paper and Scissors", 
  version : "1.0.0",
  date : "16/01/2021", 
  language : "(EN)"
  
};

console.group("%c Bedirhan Doğan", "color: greenyellow;");
console.log("%c" + "「1」DEVELOPER:     " + info.developer + "\n" + "「2」GAME:     " + info.project + "\n" + "「3」VERSION:     " + info.version + "\n" + "「4」BUILD DATE:     " + info.date + "\n" + "「5」LANGUAGE:     " + info.language, "color: yellow; font-size: 12px");

document.querySelector(".version").innerHTML += info.version;