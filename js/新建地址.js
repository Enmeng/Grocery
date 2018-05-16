window.onload = function () { 
var sourceNode = document.getElementById("address1"); 
for (var i =2; i < 10; i++) { 
var clonedNode = sourceNode.cloneNode(true); 
clonedNode.setAttribute("id", "address" + i);  
sourceNode.parentNode.appendChild(clonedNode);
var judgement=i; 
var d = document.getElementById("address" + i);
d.style.backgroundColor ="#F2F2F2";
if(judgement%2==1){
     d.style.backgroundColor =  "#fff";
}
// else{
//      d.style.backgroundColor ="#F2F2F2";
// }
// if(i==1){
// 	document.getElementById('index1').innerHTML = i+2;
// }
// else{
// 	document.getElementById('index1').innerHTML = i+1;
// }
document.getElementById('index1').innerHTML = judgement+1;
// if(i=1){
// 	document.getElementById('index1').innerHTML = 2;
// }
if(i==9){
	document.getElementById('index1').innerHTML = 1;
}

} 

}



