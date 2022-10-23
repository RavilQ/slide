let yesik = document.getElementById("yesik");
let meyve = document.getElementById("meyve");
let terevez = document.getElementById("terevez");
let sekiller = document.querySelectorAll("#fruits");
let sekiller2 = document.querySelectorAll("#vegetables");
let dragitem;
let dragitem2;

for (const sekil2 of sekiller2) {
    sekil2.ondragstart = () =>{
       dragitem2 = sekil2;
    }
}

for (const sekil of sekiller) {
    sekil.ondragstart = ()=>{
        dragitem=sekil;
    }
}



yesik.ondragover = e=>{
    e.preventDefault();
};

meyve.ondragover = e=>{
    e.preventDefault();
}

terevez.ondragover = e=>{
    e.preventDefault();
}

meyve.ondrop = ()=>{
    meyve.appendChild(dragitem);
}

terevez.ondrop = ()=>{
    terevez.appendChild(dragitem2);
}