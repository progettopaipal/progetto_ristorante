/**
 * 
 */
var tavoli =  "<div id = 'tavoli'>" +
"<a href='javascript:main(1)'><div style = 'left : 6em;top : 10em;' class = 'tavolo' ><p align = 'center'>table 1</p></div></a>"+
"<a href='javascript:main(2)'><div style = 'left : 6em;top : 16em;' class = 'tavolo' ><p align = 'center'>table 2</p></div> </a>"+
"<a href='javascript:main(3)'><div style = 'left : 6em;top : 22em;' class = 'tavolo' ><p align = 'center'>table 3</p></div></a>"+
"<a href='javascript:main(4)'><div style = 'left : 35em;top : 10em;' class = 'tavolo' ><p align = 'center'>table 4</p></div></a>"+
"<a href='javascript:main(5)'><div style = 'left : 35em;top : 16em;' class = 'tavolo' ><p align = 'center'>table 5</p></div> </a>"+
"<a href='javascript:main(6)'><div style = 'left : 35em;top : 22em;' class = 'tavolo' ><p align = 'center'>table 6</p></div></a>"+
"<a href='javascript:main(7)'><div style = 'left : 65em;top : 10em;' class = 'tavolo' ><p align = 'center'>table 7</p></div></a>"+
"<a href='javascript:main(8)'><div style = 'left : 65em;top : 16em;' class = 'tavolo' ><p align = 'center'>table 8</p></div> </a>"+
"<a href='javascript:main(9)'><div style = 'left : 65em;top : 22em;' class = 'tavolo' ><p align = 'center'>table 9</p></div></a>"+
"<a href='javascript:main(10)'> <div style ='left : 35em;top : 28em;' class = 'tavolo' ><p align = 'center'>table 10</p></div> </a>"+
"</div>" ;
var bottone_indietro = "<a href='javascript:indietro()'><div id = 'bottone-indietro' ><p align = 'center'>Indietro</p></div></a>";
var bottone_indietro2 = "<a href='javascript:indietro()'><div id = 'bottone-indietro2' ><p align = 'center'>Indietro</p></div></a>";

function main(cod_tavolo)  {
	//
   visualizza_tavolo_controller.visualizza_tavolo(cod_tavolo);
    //
}
function indietro() {
	var cont_cont = document.getElementById("contenitore-contenuto");
	cont_cont.removeChild(cont_cont.childNodes[0]);
	cont_cont.innerHTML = tavoli;
	document.getElementById("indietro").innerHTML = "";
}
var visualizza_tavolo_view = {
	togli_10_pulsanti : function() {
		var tavoli = document.getElementById("tavoli");
		document.getElementById("contenitore-contenuto").removeChild(tavoli);
	},
    mostra_schermata_unica_con_pulsante : function (cod_tavolo) {
        var schermata_unica = "<div id = 'schermata-unica'>" +
        "<a href='javascript:main_apri_tavolo("+cod_tavolo+")'><div id = 'bottone-apri-tavolo' ><p align = 'center'>Apri tavolo</p></div></a>" +
        "</div>";
        console.log(cod_tavolo);
    	document.getElementById("contenitore-contenuto").innerHTML = schermata_unica;
    	document.getElementById("indietro").innerHTML = bottone_indietro;
    },
	mostra_schermata_doppia :function (ordinazioni,cod_tavolo) {
        var schermata_doppia = "<div id = 'schermata_doppia'>" +
"<div id = 'schermata-prima'>" +
 "<table id ='tabella'>"  +
  "<tr class ='riga-titolo'><th>Tavolo "+cod_tavolo+"</th></tr>" +
  "<tr class ='riga-titolo'>"+
   " <th>Cod ordinazione</th>"   + 
    "<th>Nome portata</th>"    +
     "<th>Quantita</th>"   +
      "<th>Prezzo</th>"  +
  "</tr>"+
    "<tr id ='riga-finale'>"+
     "<th>Totale tavolo:0</th>  "   +
    "</tr>"+
   "</table>  "   +          
"</div>"+
"<div id = 'schermata-seconda'>"+
"<a href='javascript:main_chiudi_tavolo("+cod_tavolo+")'><div id = 'bottone-chiudi' ><p align = 'center'>Chiudi Tavolo</p></div></a>"+
"<a href='javascript:main_aggiungi("+cod_tavolo+")'><div id = 'bottone-aggiungi' ><p align = 'center'>Aggiungi ordinazione</p></div></a>"+
"</div>"+
"</div>";
        document.getElementById("contenitore-contenuto").innerHTML = schermata_doppia;
    	document.getElementById("indietro").innerHTML = bottone_indietro2;
        var eletr;
        var td1;
        var td2;
        var td3;
        var td4;
        var elefin;
        var att;
        var colonne;
        var tabella;
        var totale = 0;
        var righe = ordinazioni.split(",");
        var numero_righe = righe.length;
        for (var i = 0; i < numero_righe - 1;++i) {
          colonne = righe[i].split("-");
          eletr = document.createElement("tr");
          att = document.createAttribute("id");
          att.value = i;
          att2 = document.createAttribute("class");
          att2.value = "riga";
          eletr.setAttributeNode(att);
          eletr.setAttributeNode(att2);
          td1 = document.createElement("td");
          td2 = document.createElement("td");
          td3 = document.createElement("td");
          td4 = document.createElement("td");
          td1.innerHTML = ""+colonne[0];
          td2.innerHTML = ""+colonne[1];
          td3.innerHTML = ""+colonne[2];
          td4.innerHTML = ""+colonne[3];
          totale += parseInt(colonne[3]);
          eletr.appendChild(td1);
          eletr.appendChild(td2);
          eletr.appendChild(td3);
          eletr.appendChild(td4);
          tabella = document.getElementById("tabella").tBodies[0];
         // elefin = document.getElementById("riga-finale");
          tabella.insertBefore(eletr,tabella.lastChild);
          
        }
       document.getElementById("riga-finale").childNodes[0].innerHTML = "Totale: "+totale;
	}		
}
var visualizza_tavolo_controller = {
		visualizza_tavolo : function(cod_tavolo) {
			 var liberta;
             var ordinazioni;
            $(document).ready(function() {
               $.ajax({
                    type: "POST",
                    url: "http://localhost:4000/liberta",
                    data: "cod_tavolo=" + cod_tavolo,
                    dataType: "html",
                    beforeSend: function(xhr) {
                    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                    },
                    success: function(msg)
                    { 
                        //
                                 console.log(msg);
                                liberta = "" + msg;
                            console.log(liberta);
                                    if (liberta == "si") {
                                    visualizza_tavolo_view.togli_10_pulsanti();
                                    visualizza_tavolo_view.mostra_schermata_unica_con_pulsante(cod_tavolo);
                                    }
                                    if (liberta == "no") {
                                $(document).ready(function() {
                                    $.ajax({
                                type: "POST",
                                url: "http://localhost:4000/get_ordinazioni",
                                    data: "cod_tavolo=" + cod_tavolo,
                                dataType: "html",
                                beforeSend: function(xhr) {
                                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                                },
                                success: function(msg)
                                { 
                                ordinazioni = msg;
                                visualizza_tavolo_view.mostra_schermata_doppia(ordinazioni,cod_tavolo);
                                },
                                error: function()
                                {
                                alert("Chiamata per le ordinazioni fallita");
                                }
                                });
                                });
                                
                    }
           //
                    },
                    error: function()
                    {
                    alert("chiamata per la liberta fallita");
                    }
               });
           });
           
            
           
      }
		
}
