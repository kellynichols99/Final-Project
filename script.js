function addItem(){

var ul = document.getElementById("bltList");
var suggestions = document.getElementById("suggestions");
var li = document.createElement("li");
li.setAttribute("id", suggestions.value);
li.appendChild (document.createTextNode(suggestions.value));
ul.appendChild(li);
}