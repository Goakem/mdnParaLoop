const output = document.querySelector(".output");
output.textContent = "";

let i = 10;

while (i >= 0) {
    const para = document.createElement('p');
    para.textContent = `${i}\n`;
    output.appendChild(para);
    
    if (i === 0) {
        para.textContent = "Blast off!";
    } else {
        para.textContent = `${i}\n`;
    }

    
    i--;

}

