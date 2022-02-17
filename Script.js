let Maze = new MazeBuilder(10, 10);
Maze.placeKey();
console.log(Maze.maze)


  

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
                getBox(i,j).classList.add("wall");
            }
            else if(maze[i][j].length == 0 || maze[i][j][0] == 'key'){
                getBox(i,j).classList.add("path");
            }
            else if(maze[i][j][0] == "door"){
                    getBox(i,j).classList.add("door");
            }
            else if(maze[i][j] == 5){
                getBox(i,j).classList.add("player")
                getBox(i,j).classList.remove("travalled")
            }
            else if(maze[i][j] == 4){
                getBox(i,j).classList.add("travelled")
                getBox(i,j).classList.remove("player")
            }
            else {
                getBox(i,j).classList.add("wall");
            }
           
        }
    } 
}
/*  PATH = 0
    WALL = 1
    DOOR = 3
    TRAVELLED PATH = 4
    PLAYER = 5
*/


let i = 0
let maze = Maze.maze;
let j = locateEntrance(maze);
let e = locateExit(maze);
render(maze);

maze[e][j] = 5;
document.addEventListener('keypress', (event) => {
    
    var name = event.key;
    if(name == 'w'){
        if(maze[i-1][j][0] != "wall"){
            maze[i-1][j] = 5
            maze[i][j] = 4
            i = i - 1
        }
    } 
    else if(name == 'a'){
        if(maze[i][j-1][0] != "wall"){
            maze[i][j-1] = 5 
            maze[i][j] = 4
            j = j - 1
        }
    } 
    else if(name == 's'){
        if(maze[i+1][j][0] != "wall"){
            maze[i+1][j] = 5
            maze[i][j] = 4
            i = i + 1
        }
    } 
    else if(name == 'd'){
        if(maze[i][j+1][0] != "wall"){
           maze[i][j+1] = 5
           maze[i][j] = 4
           j = j + 1
        }
    }    
    fogMode(i,j)
    if(checkExit(maze,i,j)){
        document.getElementById("lab-div").style.cssText = "transition: 0.5s; background: black"
    }
  
    render(maze)
})

function locateEntrance(maze){
    var j = 0;
    while((maze[0][j][0] != "door")){
        j++;
    }
    return j;
}

function locateExit(maze){
    var e = 0;
    while((maze[20][e][0] != "door")){
        e++;
    }
    return e;
}

function fogMode(filas, columnas){
    var i
    var j
    for(var m = 0; m <= 20; m++){
        getBox(m,0).style.cssText = "filter: none"
        getBox(m,20).style.cssText = "filter: none"
        getBox(0,m).style.cssText = "filter: none"
        getBox(20,m).style.cssText = "filter: none"
    }  
    if((filas > 3 && filas < 17) || (columnas > 3 && columnas < 17)){
        for(i = 1; i <= 3; i++){
            for(j = 1; j <= 3; j++){
                getBox(filas,columnas).style.cssText = "filter: none"
                getBox(filas,columnas + j).style.cssText = "filter: none"
                getBox(filas,columnas - j).style.cssText = "filter: none"
                getBox(filas + i,columnas).style.cssText = "filter: none"
                getBox(filas - i,columnas).style.cssText = "filter: none"
                getBox(filas + i,columnas + j).style.cssText = "filter: none"
                getBox(filas + i,columnas - j).style.cssText = "filter: none"
                getBox(filas - i,columnas + j).style.cssText = "filter: none"
                getBox(filas - i,columnas - j).style.cssText = "filter: none"
            }
        }
    
    }
    else if((filas == 2 || filas == 18) || (columnas == 2 || columnas == 18)){
        for(i = 1; i <= 2; i++){
            for(j = 1; j <= 2; j++){
                getBox(filas,columnas).style.cssText = "filter: none"
                getBox(filas,columnas + j).style.cssText = "filter: none"
                getBox(filas,columnas - j).style.cssText = "filter: none"
                getBox(filas + i,columnas).style.cssText = "filter: none"
                getBox(filas - i,columnas).style.cssText = "filter: none"
                getBox(filas + i,columnas + j).style.cssText = "filter: none"
                getBox(filas + i,columnas - j).style.cssText = "filter: none"
                getBox(filas - i,columnas + j).style.cssText = "filter: none"
                getBox(filas - i,columnas - j).style.cssText = "filter: none"
            }
        }
    }
    else if((filas == 1 || filas == 19) || (columnas == 1 || columnas == 19)) {
        getBox(filas,columnas).style.cssText = "filter: none"
        getBox(filas,columnas + 1).style.cssText = "filter: none"
        getBox(filas,columnas - 1).style.cssText = "filter: none"
        getBox(filas + 1,columnas).style.cssText = "filter: none"
        getBox(filas - 1,columnas).style.cssText = "filter: none"
        getBox(filas + 1,columnas + 1).style.cssText = "filter: none"
        getBox(filas + 1,columnas - 1).style.cssText = "filter: none"
        getBox(filas - 1,columnas + 1).style.cssText = "filter: none"
        getBox(filas - 1,columnas - 1).style.cssText = "filter: none"

    }

    
}
function checkExit(maze, i, j){
    if(maze[i][j] == maze[20][e]){
        return 1;
    }
    return 0;
}

function getBox(i, j){
    return document.getElementById("box-" + i + "-" + j);
}

function darkMode(){  
    document.getElementById("mode").classList.toggle("fa-sun")
    document.body.classList.toggle("dark-mode-body");
}

