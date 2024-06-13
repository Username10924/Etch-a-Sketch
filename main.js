const container = document.querySelector("#container");
let sizeBtn = document.querySelector("#sizeBtn");
let sizeTxt = document.querySelector("#sizeTxt");
let size = 10;
let grid;
let oldSize;

// Initialize sketchpad
grid = new Array(size*size);
for(let i = 0; i < size*size; i++){
    grid[i] = document.createElement("div");
    grid[i].classList.add("grid");
    grid[i].style.width = `${1024 / size}px`;
    grid[i].style.height = `${1024 / size}px`;
    container.appendChild(grid[i]);
}

sizeBtn.addEventListener("click", () => {
    if(sizeTxt.value <= 100){
        oldSize = size;
        size = sizeTxt.value;
        grid = new Array(size*size);
        for(let i = 0; i < oldSize*oldSize; i++)
            container.removeChild(container.lastChild);

        for(let i = 0; i < size*size; i++){
            grid[i] = document.createElement("div");
            grid[i].classList.add("grid");
            grid[i].style.width = `${1024 / size}px`;
            grid[i].style.height = `${1024 / size}px`;
            container.appendChild(grid[i]);
        }
}
    else
        alert("Max size = 100");
});

/* The idea here is for each div "pixel" to have a randomized color, then for each color already picked, it will darken gradually by extracting the three previous rgb
    digits using javascript's split methods into temp variables "temp and values", then substracting tenth of each previous rgb value */
let c1 = [117.0, 117.0, 255.0];
let c2 = [255.0, 255.0, 0.0];
let c3 = [255.0, 82.0, 82.0];
let temp;
let values = [0,0,0];
container.addEventListener("mouseover", (e) => {
    let t = e.target;
    let random = Math.floor(Math.random() * 3);
    if(t.id != "container"){
        switch(random){
            case 0:
                if(t.style.backgroundColor == ""){
                    t.style.backgroundColor = `rgb(${c1[0]}, ${c1[1]}, ${c1[2]})`;
                    t.setAttribute("id","c1");
                }
                else if(t.style.backgroundColor != `rgb(0, 0, 0)` && t.getAttribute("id") == "c1"){
                    temp = t.style.backgroundColor;
                    temp = temp.split('').filter(char => !isNaN(char) && char !== '').join('');
                    temp = temp.split(" ");
                    values[0] = temp[0];
                    values[1] = temp[1];
                    values[2] = temp[2];
                    t.style.backgroundColor = `rgb(${values[0] - c1[0] / 10}, ${values[1] - c1[1] / 10}, ${values[2] - c1[2] / 10})`;
                }
                else if(t.style.backgroundColor != `rgb(0, 0, 0)` && t.getAttribute("id") == "c2"){
                    temp = t.style.backgroundColor;
                    temp = temp.split('').filter(char => !isNaN(char) && char !== '').join('');
                    temp = temp.split(" ");
                    values[0] = temp[0];
                    values[1] = temp[1];
                    values[2] = temp[2];
                    t.style.backgroundColor = `rgb(${values[0] - c2[0] / 10}, ${values[1] - c2[1] / 10}, ${values[2] - c2[2] / 10})`;
                }
                else if(t.style.backgroundColor != `rgb(0, 0, 0)` && t.getAttribute("id") == "c3"){
                    temp = t.style.backgroundColor;
                    temp = temp.split('').filter(char => !isNaN(char) && char !== '').join('');
                    temp = temp.split(" ");
                    values[0] = temp[0];
                    values[1] = temp[1];
                    values[2] = temp[2];
                    t.style.backgroundColor = `rgb(${values[0] - c3[0] / 10}, ${values[1] - c3[1] / 10}, ${values[2] - c3[2] / 10})`;
                }
                break;
            case 1:
                if(t.style.backgroundColor == ""){
                    t.style.backgroundColor = `rgb(${c2[0]}, ${c2[1]}, ${c2[2]})`;
                    t.setAttribute("id", "c2");
                }
                else if(t.style.backgroundColor != `rgb(0, 0, 0)` && t.getAttribute("id") == "c1"){
                    temp = t.style.backgroundColor;
                    temp = temp.split('').filter(char => !isNaN(char) && char !== '').join('');
                    temp = temp.split(" ");
                    values[0] = temp[0];
                    values[1] = temp[1];
                    values[2] = temp[2];
                    t.style.backgroundColor = `rgb(${values[0] - c1[0] / 10}, ${values[1] - c1[1] / 10}, ${values[2] - c1[2] / 10})`;
                }
                else if(t.style.backgroundColor != `rgb(0, 0, 0)` && t.getAttribute("id") == "c2"){
                    temp = t.style.backgroundColor;
                    temp = temp.split('').filter(char => !isNaN(char) && char !== '').join('');
                    temp = temp.split(" ");
                    values[0] = temp[0];
                    values[1] = temp[1];
                    values[2] = temp[2];
                    t.style.backgroundColor = `rgb(${values[0] - c2[0] / 10}, ${values[1] - c2[1] / 10}, ${values[2] - c2[2] / 10})`;
                }
                else if(t.style.backgroundColor != `rgb(0, 0, 0)` && t.getAttribute("id") == "c3"){
                    temp = t.style.backgroundColor;
                    temp = temp.split('').filter(char => !isNaN(char) && char !== '').join('');
                    temp = temp.split(" ");
                    values[0] = temp[0];
                    values[1] = temp[1];
                    values[2] = temp[2];
                    t.style.backgroundColor = `rgb(${values[0] - c3[0] / 10}, ${values[1] - c3[1] / 10}, ${values[2] - c3[2] / 10})`;
                }
                break;
            case 2:
                if(t.style.backgroundColor == ""){
                    t.style.backgroundColor = `rgb(${c3[0]}, ${c3[1]}, ${c3[2]})`;
                    t.setAttribute("id","c3");
                }
                else if(t.style.backgroundColor != `rgb(0, 0, 0)` && t.getAttribute("id") == "c1"){
                    temp = t.style.backgroundColor;
                    temp = temp.split('').filter(char => !isNaN(char) && char !== '').join('');
                    temp = temp.split(" ");
                    values[0] = temp[0];
                    values[1] = temp[1];
                    values[2] = temp[2];
                    t.style.backgroundColor = `rgb(${values[0] - c1[0] / 10}, ${values[1] - c1[1] / 10}, ${values[2] - c1[2] / 10})`;
                }
                else if(t.style.backgroundColor != `rgb(0, 0, 0)` && t.getAttribute("id") == "c2"){
                    temp = t.style.backgroundColor;
                    temp = temp.split('').filter(char => !isNaN(char) && char !== '').join('');
                    temp = temp.split(" ");
                    values[0] = temp[0];
                    values[1] = temp[1];
                    values[2] = temp[2];
                    t.style.backgroundColor = `rgb(${values[0] - c2[0] / 10}, ${values[1] - c2[1] / 10}, ${values[2] - c2[2] / 10})`;
                }
                else if(t.style.backgroundColor != `rgb(0, 0, 0)` && t.getAttribute("id") == "c3"){
                    temp = t.style.backgroundColor;
                    temp = temp.split('').filter(char => !isNaN(char) && char !== '').join('');
                    temp = temp.split(" ");
                    values[0] = temp[0];
                    values[1] = temp[1];
                    values[2] = temp[2];
                    t.style.backgroundColor = `rgb(${values[0] - c3[0] / 10}, ${values[1] - c3[1] / 10}, ${values[2] - c3[2] / 10})`;
                }
                break;
        }
    }
});