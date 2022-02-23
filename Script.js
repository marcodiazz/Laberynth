let Maze = new MazeBuilder(10, 10);
Maze.placeKey();
console.log(Maze.maze) 

let player = 5;

genGrid()

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

let counter = 1
let i = 0
let maze = Maze.maze;
startMaze();
let j = locateEntrance(maze);
let e = locateExit(maze);
render(maze);

document.addEventListener('keypress', (event) => {
    
    var name = event.key;

    if(name == 'w' || event.code == 38){
        if(maze[i-1][j][0] != "wall"){
            maze[i-1][j] = 5
            maze[i][j] = 4
            i = i - 1
            counterUp();
        }
    } 
    else if(name == 'a' || event.code == 37){
        if(maze[i][j-1][0] != "wall"){
            maze[i][j-1] = 5 
            maze[i][j] = 4
            j = j - 1
            counterUp();
        }
    } 
    else if(name == 's' || event.code == 40){
        if(maze[i+1][j][0] != "wall"){
            maze[i+1][j] = 5
            maze[i][j] = 4
            i = i + 1
            counterUp();
        }
    } 
    else if(name == 'd' || event.code == 39){
        if(maze[i][j+1][0] != "wall"){
           maze[i][j+1] = 5
           maze[i][j] = 4
           j = j + 1
           counterUp();
        }
    }    
    applyFogSquare(i, j , 3)
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

function startMaze(){
    for(var m = 0; m <= 20; m++){
        getBox(m,0).style.cssText = "filter: none"
        getBox(m,20).style.cssText = "filter: none"
        getBox(0,m).style.cssText = "filter: none"
        getBox(20,m).style.cssText = "filter: none"
    }  
}

function applyFog(i,j){
    
    if(!getBox(i,j)) return
    getBox(i,j).style.cssText = "filter: none"   
}

function applyFogSquare(filas, columnas, radio){
    
    applyFog(filas,columnas);
    for (var i = 1; i <= radio; i++){
        for(var j = 1; j <= radio; j++){
            applyFog(filas,columnas + j)
            applyFog(filas,columnas - j)
            applyFog(filas + i, columnas)
            applyFog(filas - i, columnas)
            applyFog(filas + i, columnas + j)
            applyFog(filas  + i, columnas - j)
            applyFog(filas - i, columnas + j)
            applyFog(filas - i, columnas - j)
        }
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


// COUNTER FUNCTIONS

function counterUp(){
    counter = document.getElementById("counter").textContent = counter 
    counter = counter + 1
    return counter
}
function darkMode(){  
    document.getElementById("mode").classList.toggle("fa-sun")
    document.body.classList.toggle("dark-mode-body");
}

