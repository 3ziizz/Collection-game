var getbox=document.getElementById("box");
document.documentElement.addEventListener("keydown",move);
function move(e)
{
if(e.keyCode==39)
{   
    var arr =(getComputedStyle(getbox).right).split("p")
    if(arr[0]<310)
    {
        getbox.style.right=(arr[0])+"px"
    }else
    {
        getbox.style.right=(arr[0]-40)+"px"
    }
  
}else if (e.keyCode==37)
{
    var arr =(getComputedStyle(getbox).right).split("p")
    
    if(arr[0]>815)
    {
        getbox.style.right=(arr[0])+"px"
    }else
    {
        getbox.style.right=(arr[0]-0)+30+"px"
    }
}
}


function Sound (id, src) {
    this.id = id;
    this.src = src;
    this.setsource=function(){
document.getElementById(this.id).src = this.src;


};
  this.mute=function() {document.getElementById(this.id).muted=!document.getElementById(this.id).muted ;};
this.autoplay=function(){

document.getElementById(this.id).autoplay = true;
document.getElementById(this.id).loop=true ;
document.getElementById(this.id).load();
};
    
}



var sound1 = new Sound("myaudio1","audio/sleep.mp3");
sound1.setsource();
sound1.autoplay();


var btn=document.getElementById("mybtn");
btn.addEventListener('click',function(){sound1.mute()});

document.addEventListener("keyup",Gostart);
function Gostart(e)
{
if (e.which==27)
{
document.location.href = '../start_page.html' ;
}

}