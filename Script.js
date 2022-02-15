

genGrid()
/*genEmptyMaze();
genWalls();*/


function genGrid()
{
    var lab = document.getElementById("lab-div");
    
    for (var i=0; i < 11; i++) { // rows
        for (var j=0; j < 11; j++) { // columns
            var box = document.createElement("div");
            box.className = "box";
            box.id = "box-" + i + j;
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
    for(var i=0; i < 11; i++){
        for(var j=0; j<11; j++){
            if (maze[i][j].length > 0 && maze[i][j][0] == "wall"){
                console.log(`[${i}-${j}] Wall`)
                getBox(i,j).classList.add("wall");
            }
            else if(maze[i][j].length == 0 || maze[i][j][0] == 'key'){
                console.log(`[${i}-${j}]`)
                getBox(i,j).classList.add("path");
            }
            else if(maze[i][j][0] == "door"){
                    getBox(i,j).classList.add("door");
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
