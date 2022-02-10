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
    