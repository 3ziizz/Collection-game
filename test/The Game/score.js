var score=0;
var input1= document.body;
var input2= document.body;
input1.addEventListener("click",countscore)
var updatescore=document.getElementById("currscore")
var lev=0;
var leveltag= document.body;
var updatelevel=document.getElementById("level")
function countscore(e){
    console.log("e");
    score+=1;
    updatescore.textContent="Score:"+score;
    if (score == 10 || score == 20 ||score == 30){
        lev+=1;
        updatelevel.textContent="Level:"+lev;
    }  
}
input2.addEventListener("keydown",removeheart_fun)
var removeheart=[3];
var count_lives=0;
removeheart[0]=document.getElementById("first-heart")
removeheart[1]=document.getElementById("second-heart")
removeheart[2]=document.getElementById("third-heart")
function removeheart_fun(e){
    console.log("rrrr");
    removeheart[count_lives].src="dieheart.png";
    count_lives+=1;
    
}

     

