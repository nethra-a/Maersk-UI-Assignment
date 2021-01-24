var defaultList = [0,1,2,3,4,5,6,7,8];
createBlocks();

function createBlocks() {
    document.getElementById("blocks").innerHTML = "";
    let block = "";
    for (let i=0; i<defaultList.length; i++) {
        block = block + "<div class='each-block' id='block"+ i + "'>" + (defaultList[i]+1) + "</div>";
    }
    document.getElementById("blocks").innerHTML = block;
}

function sort() {
    for(let i=0;i<defaultList.length; i++) {
        for(let j=0; j<defaultList.length; j++) {
            if(defaultList[j] > defaultList[j+1]) {
                let temp = defaultList[j];
                defaultList[j] = defaultList[j+1];
                defaultList[j+1] = temp;
            }
        }
    }
    createBlocks();
}

function shuffle() {
    let randomList = [];
    do {
        let value = Math.floor(Math.random() * 9); // get value between 0 to 8 for default array to shuffle
        if(randomList.indexOf(value) === -1) {
            randomList.push(value);
        }
    } while(randomList.length < 9)
    defaultList = randomList;
    createBlocks();
}