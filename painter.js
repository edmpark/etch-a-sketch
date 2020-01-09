var container = document.getElementById('container');

function createDivTemplate(dClass){
    return '<div class="' + dClass + '" onmouseover="this.style.background=\'gray\' "> </div>';
}

for(var i = 0; i<16*16; i++){
    container.innerHTML+=createDivTemplate('gridItem');
}

function newGrid(width, height){

}

document.getElementById('clearButton').onClick = newGrid(window.prompt('How many squares wide'), 
window.prompt('How many squares tall') ); 


