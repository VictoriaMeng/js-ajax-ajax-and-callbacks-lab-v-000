$(document).ready(function (){
});

function searchRepositories() {
  const req = new XMLHttpRequest();
  const searchTerms = document.getElementById("searchTerms");
  req.addEventListener("load", showRepositories);
  req.open("GET", `https://api.github.com/search/repositories/?q=${searchTerms}/`);
  req.send();
}

function showRepositories() {
  
}
