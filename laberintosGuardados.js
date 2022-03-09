let savedMaze = [];


for(let i = 0; i<7; i++){
   let Maze = new MazeBuilder(10, 10);
   savedMaze[i] = Maze.maze;
}