let container = document.querySelector(".grid-container");
let gridSize = 16;

initGrid();
function initGrid()
{
    for(let i=0; i<gridSize; i++)
    {
        let row = document.createElement("div")
        row.classList.add("row")
        for(let j=0; j<gridSize; j++)
        {
            let box = document.createElement("div");
            box.setAttribute("id", i+"" + j)
            box.classList.add("box")
            box.setAttribute("style", "width: " + gridSize *2 + "px;" + "height: " + gridSize *2 + "px;")
            box.addEventListener("mouseover",changeColor);
            box.addEventListener("mouseleave",function(e)
            {
                setTimeout(() => revertColor(e),1000);
            })
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function changeColor(e)
{
    let box = e.target;
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = "#" + randomColor;
}

function revertColor(e)
{
    let box = e.target;
    box.style.backgroundColor = "black";
}

