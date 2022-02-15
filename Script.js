let player = 5;

genGrid()
/*genEmptyMaze();
genWalls();*/


function genGrid()
{
    var lab = document.getElementById("lab-div");
    
    for (var i=0; i < 21; i++) { // rows
        for (var j=0; j < 21; j++) { // columns
            var box = document.createElement("div");
            box.className = "box";
            box.id = "box-" + i + "-" + j;
            lab.appendChild(box);
        }
    }
}

/*
function genEmptyMaze(){
    maze = [];
    for(var i=0; i < 10; i++){
        maze.push([]);
        for(var j=0; j<10; j++){
            maze[i][j] = 1;
        }
    }
}
function genWalls(){
    for(var i=0; i < 10; i++){
        for(var j=0; j<10; j++){
            if (Math.random() > 0.6) maze[i][j] = 1;
            else maze[i][j] = 0;
        }
    }
}*/

function render(maze){
    for(var i=0; i < 21; i++){
        for(var j=0; j<21; j++){

            if (maze[i][j].length > 0 && maze[i][j][0] == "wall"){
                console.log(i + " " + j)
                getBox(i,j).classList.add("wall");
            }
            else if(maze[i][j].length == 0 || maze[i][j][0] == 'key'){
                console.log(i + " " + j)
                getBox(i,j).classList.add("path");
            }
            else if(maze[i][j][0] == "door"){
                    getBox(i,j).classList.add("door");
            }
            else {
                getBox(i,j).classList.add("wall");
            }
           
        }
    } 
}


function move(maze){
    let playerP = locatePlayer(maze);
    document.addEventListener('keypress', (event) => {
        var name = event.key;
        var code = event.code;
        if (name === 'a') {
          
          return;
        }
   

}

function locatePlayer(maze){
    var j = 0;
    while((maze[0][j][0] =! "door")){
        j++;
    }
    return j;
}

function getBox(i, j){
    return document.getElementById("box-" + i + "-" + j);
}

function darkMode(){  
    document.body.classList.toggle("dark-mode-body");
}
function hide(){
    document.getElementById("mascot1").classList.toggle("hide-mascot");
}
