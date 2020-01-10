let container = document.getElementById('container');
let containerClass=document.getElementsByClassName('container')[0];

createGridItems(16);

var numSquare;
function promptMe(){
    numSquare=window.prompt('How many squares per side?');
    createGridItems(numSquare);
}

function deleteAllGridItem(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function createGridItems(sideSquareNum){
    deleteAllGridItem();
    document.documentElement.style.setProperty("--gridLength", sideSquareNum);
    for(var i = 0; i<sideSquareNum*sideSquareNum; i++){
        container.innerHTML+='<div class=gridItem onmouseover="this.style.background=\'gray\' "> </div>';
    }
}






