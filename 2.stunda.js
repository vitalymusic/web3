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

setInterval(krasuMaina,1000)







console.log(rezultats)