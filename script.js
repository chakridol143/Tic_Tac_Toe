function restart()
{
    window.location ="index.html"
}
let game = true
function CheckWin()
{
    let w = document.getElementById("winner")
    let c0 = document.getElementById("cell0").innerHTML
    let c1 = document.getElementById("cell1").innerHTML
    let c3 = document.getElementById("cell3").innerHTML
    let c2 = document.getElementById("cell2").innerHTML
    let c4 = document.getElementById("cell4").innerHTML
    let c5 = document.getElementById("cell5").innerHTML
    let c6 = document.getElementById("cell6").innerHTML
    let c7 = document.getElementById("cell7").innerHTML
    let c8 = document.getElementById("cell8").innerHTML
    if((c0==cp&&c1==cp&&c2==cp)||(c5==cp&&c4==cp&&c3==cp)||(c6==cp&&c7==cp&&c8==cp)
        ||(c0==cp&&c3==cp&&c6==cp)||(c7==cp&&c4==cp&&c1==cp)||(c8==cp&&c5==cp&&c2==cp)
      ||(c6==cp&&c4==cp&&c2==cp)||(c0==cp&&c4==cp&&c8==cp)||(c0==cp&&c8==cp&&c4==cp)){
    w.innerHTML = cp + " is the winner"
game = false}
}
let cp="O"
function cell0(){
    let d = document.getElementById("cell0")
    if(game==true){
if(cp=="O")
{
    d.innerHTML = "O"
    CheckWin()
    cp = "X"
}
else{
    d.innerHTML ="X"
    CheckWin()
    cp = "O"
}}
}
function cell1(){
    let d = document.getElementById("cell1")
    if(game==true){
        if(cp=="O")
        {
            d.innerHTML = "O"
            CheckWin()
            cp = "X"
        }
        else{
            d.innerHTML ="X"
            CheckWin()
            cp = "O"
        }}
}
function cell2(){
    let d = document.getElementById("cell2")
    if(game==true){
        if(cp=="O")
        {
            d.innerHTML = "O"
            CheckWin()
            cp = "X"
        }
        else{
            d.innerHTML ="X"
            CheckWin()
            cp = "O"
        }}
}
function cell3(){
    let d = document.getElementById("cell3")
    if(game==true){
        if(cp=="O")
        {
            d.innerHTML = "O"
            CheckWin()
            cp = "X"
        }
        else{
            d.innerHTML ="X"
            CheckWin()
            cp = "O"
        }}
}
function cell4(){
    let d = document.getElementById("cell4")
    if(game==true){
        if(cp=="O")
        {
            d.innerHTML = "O"
            CheckWin()
            cp = "X"
        }
        else{
            d.innerHTML ="X"
            CheckWin()
            cp = "O"
        }}
}
function cell5(){
    let d = document.getElementById("cell5")
    if(game==true){
        if(cp=="O")
        {
            d.innerHTML = "O"
            CheckWin()
            cp = "X"
        }
        else{
            d.innerHTML ="X"
            CheckWin()
            cp = "O"
        }}
}
function cell6(){
    let d = document.getElementById("cell6")
    if(game==true){
        if(cp=="O")
        {
            d.innerHTML = "O"
            CheckWin()
            cp = "X"
        }
        else{
            d.innerHTML ="X"
            CheckWin()
            cp = "O"
        }}
}
function cell7(){
    let d = document.getElementById("cell7")
    if(game==true){
        if(cp=="O")
        {
            d.innerHTML = "O"
            CheckWin()
            cp = "X"
        }
        else{
            d.innerHTML ="X"
            CheckWin()
            cp = "O"
        }}
}
function cell8(){
    let d = document.getElementById("cell8")
    if(game==true){
        if(cp=="O")
        {
            d.innerHTML = "O"
            CheckWin()
            cp = "X"
        }
        else{
            d.innerHTML ="X"
            CheckWin()
            cp = "O"
        }}
}