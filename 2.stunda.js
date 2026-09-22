// Darbības ar skaitļiem

let skaitlis1 = 50,skaitlis2 = 125;

// matemātiskie operatori

let rezultats = skaitlis1 * skaitlis2 /skaitlis1 + skaitlis2 - skaitlis2/1.45

// rezultats = rezultats.toFixed(2)
// rezultats = rezultats.toString()

// Math objekts
// rezultats = Math.pow(rezultats,3)
// rezultats = Math.round(rezultats)
// rezultats = Math.floor(rezultats)
rezultats = Math.ceil(rezultats)
rezultats = Math.random()*100
rezultats = Math.trunc(rezultats)

function krasuMaina(){

let krasa = {
    red:Math.trunc(Math.random()*255),
    green:Math.trunc(Math.random()*255),
    blue:Math.trunc(Math.random()*255)
}


document.body.style.color = `rgb(${krasa.red},${krasa.green},${krasa.blue})`;
}

// setInterval(krasuMaina,1000)


// darbības ar teksta virknēm

let teksts1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur ut esse porro ipsam! Obcaecati eaque incidunt rem eos. Rem fugit distinctio ex quae harum, itaque quisquam maxime vel dolor.";




let iznakums = teksts1.length;
    iznakums = teksts1.toUpperCase();
    iznakums = teksts1.toLowerCase();
    // iznakums = teksts1.split("");

    // iznakums = teksts1.slice(0,10);

    iznakums = teksts1.replaceAll("Lorem","<u>Mākslas un mēdiju tehnikums</u>")
    iznakums = iznakums.repeat(3)
document.body.innerHTML+=iznakums

console.log(rezultats)


    // Uzdevums.
    
    // Uzrakstīt programmu, kas prasa cik bildes izvadīt, un pēc ievades atkārtot <img src=""> kodu
    // Bildes adresei izmantot picsum.photos
    // rezultātu izvadīt ar document.body.innerHTML = '';
    // *izmantojot skaitļu ģenerāciju random() pie katras bildes adrese pievienot ID atribūtu ar randoma skaitli no 0-255, 
    // bildes adrese ar ID: https://picsum.photos/id/1/200/300

    let bildesHTML = `<img src="https://picsum.photos/500">`;


    let uzraksts = "<h1>Bilžu galerija</h1>";





    

