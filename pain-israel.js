const painzine = [
    {title:"firstspread.png"},
    {title:"secondspread.png"},
    {title:"thirdspread.png"},
    {title:"fourthspread.png"},
];

function fillbar(){
    let output ="";
    let thu = document.getElementById("thumb-bar");
    painzine.forEach(element => {
        output+=`<img src='spreadversion/${element.title}' onclick=makeDisplayed('spreadversion/${element.title}')>`;
    });
    console.log(output);
    thu.innerHTML = output;
}
fillbar();

function makeDisplayed(picpath){

    let currentDisplay = document.querySelector(".displayed-img");
    currentDisplay.setAttribute('src', picpath);
    console.log(currentDisplay.innerHTML);
}