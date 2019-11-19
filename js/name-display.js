var displayName = localStorage.getItem('firstName')
var userName = document.createElement("P");
var textNode = document.createTextNode("Welcome " + displayName);

userName.appendChild(textNode);
document.getElementById("name").appendChild(userName);