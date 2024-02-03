var num1 = Math.floor(Math.random()*6) + 1;
var str1 = "images/dice" + num1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", str1);

var num2 = Math.floor(Math.random()*6) + 1;
var str2 = "images/dice"+ num2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", str2);

if(num1 < num2){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins🚩";
} else if(num1 > num2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
document.querySelector("h1").style.fontSize = "6rem";
