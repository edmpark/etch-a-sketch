let container = document.getElementById('container');
let containerClass=document.getElementsByClassName('container')[0];
let pixelNum=0;

function createDivTemplate(dClass){
    return '<div class="' + dClass + '" onmouseover="this.style.background=\'gray\' "> </div>';
}

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
    pixelNum=900/sideSquareNum;
    document.documentElement.style.setProperty("--gridLength", sideSquareNum);
    for(var i = 0; i<sideSquareNum*sideSquareNum; i++){
        container.innerHTML+=createDivTemplate('gridItem');
    }
}

function newGrid(gridWidth, gridHeight){
    deleteAllGridItem();
    container.style.gridTemplateColumns="";
    let rowAmount = 723/gridHeight;
    container.style.setProperty('grid-template-columns', 'repeat('+gridWidth+', minmax(auto, auto))');
    createGridItems(gridWidth, gridHeight);
}




