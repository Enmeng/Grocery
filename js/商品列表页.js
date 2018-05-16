window.onload = function () { 
var sourceNode = document.getElementById("part1"); 
for (var i = 1; i < 50; i++) { 
var clonedNode = sourceNode.cloneNode(true); 
clonedNode.setAttribute("id", "part" + i);  
sourceNode.parentNode.appendChild(clonedNode); 
} 
}
