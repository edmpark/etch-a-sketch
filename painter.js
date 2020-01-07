var container = document.getElementById('container');

function createDivTemplate(dClass){
    return '<div class="' + dClass + '"> </div>';
}

for(var i = 0; i<16*16; i++){
    container.innerHTML+=createDivTemplate('grid-item');
}

