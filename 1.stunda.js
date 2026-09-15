 // komentārs

        // camelCase = > pirmaisVirsraksts

        // Koda blokus apzīmē ar {}

        // katras rindiņas beigās ir jāliek ;

        // Mainīgo vedošana un datu tipi
        let skaitlis1 = 10; //integer
        let skaitlis2 = 50.55; //float
        let teksts = "Mans Javascript"; //String
        let teksts2 = 'Mans Javascript';
        let teksts3 = `Mans Javascript`;

        let sledzisIeslegts = true; //Boolean
        let sledzisIzslegts = false;

        let masivs = ["Pirmdiena","Otrdiena","Trešdiena"];

        let objekts = {
            tips:"Dzīvoklis",
            istabuSkats:5,
            stavs:3,
            atteli:["attels1.jpg","attels2.jpg","attels3.jpg"],
            cena:150000
        }

        // Informācijas izvade
        document.body.innerHTML += "<h1>"+teksts2+"</h1>";
        document.body.innerHTML += "<h1>Pardod:</h1>";
        document.body.innerHTML += "<p>Tips: " +objekts.tips+ "</p>";
        document.body.innerHTML += "<p>Istabu skaits: " + objekts.istabuSkats+ "</p>";
        document.body.innerHTML += "<p>Cena: " + objekts.cena+ "&euro;</p>";


        // Mainīgo Izvade konsolē
        console.log(masivs,teksts,skaitlis1,skaitlis1);

        // Promt, Alert, Confirm

        let vards =  prompt("Ka tevi sauc???");
        // document.body.innerHTML = "<h1>Tevi sauc: "+ vards + "</h1>";
        alert("Pietiek mani mocīt!!");

        if(confirm("Vai tu jau esi noguris???")){
            document.location.href = "https://youtube.com"
        }else{
            alert("Turpinam JS")
        }
