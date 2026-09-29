// document.body.innerHTML = ""; //Notīra dokumenta saturu

// Cikli

// Cikls ar skaitītāju



// for(let i=0;i<255;i++){

//         document.body.innerHTML+=`<img src="https://picsum.photos/id/${i}/300">`;

// }


let menesi = [
    "Janvāris",
    "Februāris",
    "Marts",
    "Aprīlis",
    "Maijs",
    "Jūnijs",
    "Jūlijs",
    "Augusts"
];

// cikls darbam ar masīviem

for(menesis of menesi){
    document.body.innerHTML+=`<h1>Mēnesis: ${menesis}</h1>`
}



// Funkcijas


function sarkansFons(){
    document.body.classList.toggle('sarkans');
}


function palielinatBildi(elements){
    elements.classList.toggle('lielaBilde');
}

// uzrakstīt programmu, kas paprasa cik bildes izvadīt un tad izveido bildes ar ciklu, katrai bildei ar dubultklikšķi mainās izmērs