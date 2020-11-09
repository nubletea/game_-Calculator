const BTN=document.querySelector('.btn');
const GETTEXT=document.querySelectorAll('.gettext');
const VALUE=document.querySelector('.value span');
const LEVEL=document.querySelectorAll('.level');
const addEventListener=(eventList,fn)=>{
    for(let i=0;i<eventList.length;i++){
        eventList[i].onclick=fn;
    }
}
const gettextbox={
    arr:[130]
}
window.addEventListener("DOMContentLoaded",(e)=>{
    addEventListener([BTN],arr_push);
    addEventListener(LEVEL,radio_push);
});
function radio_push(){
    let checked = this.checked;
    if(checked===true){
        gettextbox.arr[0]=this.getAttribute("value");
    }
}
function arr_push(){
    console.log(gettextbox.arr);
    for(let i=0;i<GETTEXT.length;i++){
        if(GETTEXT[i].value===''){
            alert('값을 빼먹었잖아 --');
            break;
        }
        gettextbox.arr[i+1]=GETTEXT[i].value;
        GETTEXT[i].value='';
        result();
    }
}
function result(){
    let level=Number(gettextbox.arr[0]);
    let power=gettextbox.arr[1];
    let sub_power=gettextbox.arr[2];
    let reinforce=gettextbox.arr[3];
    let cont=(power-sub_power)/reinforce;
    let text;
    if(power===sub_power){
        VALUE.innerHTML="매지컬 완작인데?" 
    }else if(110<=level<=200){
    switch (cont){
        case 2:
            text="70%완작입니다.";
        break;
        case 3:
            text="30%완작입니다.";
        break;
        case 4:
            text="축하드려요 15%완작!";
        break;
        default:
            text="떡작이거나 100%쓰래기";
        break;
    }
    VALUE.innerHTML=text;
}else{
    VALUE.innerHTML="구현이 안됬어용!";
}
}