let container = document.querySelector(".container");

function initGrid()
{
    let gridSize = 16;
for(let i=0; i<gridSize; i++)
{
    let row = document.createElement("div")
    for(let j=0; j<gridSize; j++)
    {
        let column = document.createElement("div");
        column.setAttribute("id", i+"" + j)
        column.classList.add("box")
        column.setAttribute("style", "width: " + gridSize + "px;" + "height: " + gridSize + "px;")
        row.appendChild(column);
    }
    container.appendChild(row);
}
}



