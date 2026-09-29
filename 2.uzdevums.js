document.body.innerHTML="";
let bilzuSkaits = prompt("Cik daudz bildes???");


for(let i=0;i<bilzuSkaits;i++){
        document.body.innerHTML+=`<img src="https://picsum.photos/id/${i}/300" ondblclick="palielinatBildi(this)">`;
}

function palielinatBildi(elements){
    elements.classList.toggle('lielaBilde');
}