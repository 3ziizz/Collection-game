getbox=document.getElementById("box");
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
var choose_collector=function(c_source)
{
    this.c_source=c_source;
    //getbox=document.getElementById("box");
    getbox.src=this.c_source;
}
document.documentElement.addEventListener("keydown",move);




var aud = document.getElementById("myaudio1");

var btn=document.getElementById("mybtn2");
btn.addEventListener('click',mute);

function mute() {
    document.getElementById("myaudio1").muted=!document.getElementById("myaudio1").muted ;
}

function autoplay(){
aud.autoplay = true;
aud.loop=true ;
aud.load();
}

autoplay();

document.addEventListener("keyup",Gostart);
function Gostart(e)
{
if (e.which==27)
{
//document.location.href = '../start_page.html' ;
    console.log(script1);
    head.style.display="initial"
    main_game.style.display="none"
    option_page.style.display="none"
    exit_page.style.display="none"
    document.body.removeChild(script1);
    
}

}
