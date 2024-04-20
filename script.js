let gridContainer = document.querySelector(".grid-container");
let gridRows = 24;
let gridColumns = 24;
let changeButton = document.querySelector(".changeSize")
changeButton.addEventListener("click",changeGridSize);

initGrid();
function initGrid()
{
    for(let i=0; i<gridRows; i++)
    {
        let row = document.createElement("div")
        row.classList.add("row")
        for(let j=0; j<gridColumns; j++)
        {
            let box = document.createElement("div");
            box.setAttribute("id", i+"" + j)
            box.classList.add("box")
            box.setAttribute("style", "width: " + 32  + "px;" + "height: " + 32  + "px;")
            box.addEventListener("mouseover",changeColor);
            box.addEventListener("mouseleave",function(e)
            {
                setTimeout(() => revertColor(e),1000);
            })
            row.appendChild(box);
        }
        gridContainer.appendChild(row);
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

function changeGridSize()
{
    let rows = window.prompt("Number of rows:")
    if(rows > 28)
    {
        window.alert("Number must be less than or equal to 28")
        setTimeout(changeGridSize,5000)
        return;
    }
    let columns = window.prompt("Number of columns:")
    if(columns > 28)
    {
        window.alert("Number must be less than or equal to 28")
        setTimeout(changeGridSize,5000)
        return;
    }

    gridRows = rows;
    gridColumns = columns;
    removeCurrentGrid();
    initGrid(); 
}

//removes the current grid container and add a new empty
function removeCurrentGrid()
{
    let body = document.querySelector(".body");
    body.removeChild(gridContainer);
    gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    body.appendChild(gridContainer)
}
