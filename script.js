let container = document.querySelector(".container");
let gridSize = 16;

function initGrid()
{
    for(let i=0; i<gridSize; i++)
    {
        let row = document.createElement("div")
        for(let j=0; j<gridSize; j++)
        {
            let box = document.createElement("div");
            box.setAttribute("id", i+"" + j)
            box.classList.add("box")
            box.setAttribute("style", "width: " + gridSize *2 + "px;" + "height: " + gridSize *2 + "px;")
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    container.addEventListener("mouseover",changeColor);
}

initGrid();

function changeColor(e)
{
    let box = e.target;
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    box.setAttribute("style", "background-color: " + randomColor);
}

