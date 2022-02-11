var maze;

genGrid()
genEmptyMaze();
genWalls();
render();

function genGrid()
{
    var lab = document.getElementById("lab-div");
    
    for (var i=0; i < 10; i++) { // rows
        for (var j=0; j < 10; j++) { // columns
            var box = document.createElement("div");
            box.className = "box";
            box.id = "box-" + i + j;
            lab.appendChild(box);
        }
    }
}


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
}

function render(){
    for(var i=0; i < 10; i++){
        for(var j=0; j<10; j++){
            if(maze[i][j] == 1){
                getBox(i,j).classList.add("wall");
            }
            else if(maze[i][j] == 0){
                getBox(i,j).classList.add("path");
            }
           
        }
    } 
}

function move(){
    
}

function getBox(i, j){
    return document.getElementById("box-" + i + j);
}

function darkMode(){  
    document.body.classList.toggle("dark-mode-body");
}
function hide(){
    document.getElementById("mascot1").classList.toggle("hide-mascot");
}
