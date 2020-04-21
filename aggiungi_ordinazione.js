var aggiungi_ordinazione_view = {
    bottoni_html : "",
	togli_2_pulsanti : function() {
        var bottoni = document.getElementById("schermata-seconda");
        bottoni_html  = bottoni.innerHTML;
        bottoni.innerHTML = "";
	},
    mostra_menu : function (menu) {
   var tabella2 = "<table id ='tabella2'>"  +
  "<tr class ='riga-titolo'><th>Menu</th></tr>" +
  "<tr class ='riga-titolo'>"+
   " <th>Cod Portata</th>"   + 
    "<th>Nome portata</th>"    +
     "<th>Descrizione</th>"   +
      "<th>Prezzo</th>"  +
  "</tr>"+
    "<tr id ='riga-finale2'>"+
     "<th><p> Inserisci codice: <input id = 'in-codice' type='text' name='nome'> </p></th></br>  "   +
     "<a href='javascript:main_cibo()'><div class = 'aggiungi-avanti' ><p >Avanti</p></div></a>"+
    "</tr>"+
   "</table>  ";
    document.getElementById("schermata-seconda").innerHTML = tabella2;
     var eletr;
        var td1;
        var td2;
        var td3;
        var td4;
        var elefin;
        var att;
        var colonne;
        var tabella;
        var righe = menu.split(",");
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
          eletr.appendChild(td1);
          eletr.appendChild(td2);
          eletr.appendChild(td3);
          eletr.appendChild(td4);
          tabella = document.getElementById("tabella2").tBodies[0];
         // elefin = document.getElementById("riga-finale");
          tabella.insertBefore(eletr,tabella.lastChild);
        }
        
    
    }, 
    chiedi_quantita : function() {
        var nuovo = "<th><p> Inserisci quantita: <input id = 'in-quantita' type='text' name='nome'> </p></th></br>  "   +
     "<a href='javascript:main_quantita()'><div class = 'aggiungi-avanti' ><p >Avanti</p></div></a>";
        document.getElementById("riga-finale2").innerHTML = "";
         document.getElementById("riga-finale2").innerHTML = nuovo;
		
	},
    aggiorna_sinistra : function(ordinazione) {
		
        var colonne = ordinazione.split("-");
          var eletr = document.createElement("tr");
          var att = document.createAttribute("id");
         // att.value = "";
          var att2 = document.createAttribute("class");
          att2.value = "riga";
          eletr.setAttributeNode(att);
          eletr.setAttributeNode(att2);
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td3 = document.createElement("td");
          var td4 = document.createElement("td");
          td1.innerHTML = ""+colonne[0];
          td2.innerHTML = ""+colonne[1];
          td3.innerHTML = ""+colonne[2];
          td4.innerHTML = ""+colonne[3];
          eletr.appendChild(td1);
          eletr.appendChild(td2);
          eletr.appendChild(td3);
          eletr.appendChild(td4);
          var tabella = document.getElementById("tabella").tBodies[0];
         // elefin = document.getElementById("riga-finale");
          tabella.insertBefore(eletr,tabella.lastChild);
          var tot_ve = document.getElementById("riga-finale").childNodes[0].innerHTML;
          var a = tot_ve.split(" ");
          var tot_nu =parseInt(a[1]) +  parseInt(colonne[3]);
          document.getElementById("riga-finale").childNodes[0].innerHTML = "Totale: "+tot_nu;
	},
    aggiorna_destra : function() {
		var bottoni = document.getElementById("schermata-seconda");
         bottoni.innerHTML = bottoni_html;
	}
    
}
function main_aggiungi(cod_tavolo) {
  aggiungi_ordinazione_controller.aggiungi_ordinazione(cod_tavolo);
           
}
function main_cibo() {
    aggiungi_ordinazione_controller.ins_cibo();
}
function main_quantita() {
    aggiungi_ordinazione_controller.ins_quantita();
    
                                    
        
}
var aggiungi_ordinazione_controller = {
    cod_tavolo : "",
    cod_portata : "",
    quantita : "",
	aggiungi_ordinazione : function(cod_tavolo) {
                          aggiungi_ordinazione_controller.cod_tavolo = cod_tavolo;
                          console.log("-:"+cod_tavolo);
                               $(document).ready(function() {
		                       $.ajax({
                                type: "GET",
                                url: "http://localhost:4000/menu",
                                  //  data: "cod_tavolo=" + cod_tavolo + "&cod_portata=" + cod_portata + "&quantita="+quantita,
                                dataType: "html",
                                beforeSend: function(xhr) {
                                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                                },
                                success: function(msg)
                                { 
                                aggiungi_ordinazione_view.togli_2_pulsanti();
                                aggiungi_ordinazione_view.mostra_menu(msg);
                                },
                                error: function()
                                {
                                alert("Chiamata per la prenotazione fallita");
                                }
                                });
                                });
	},
    ins_cibo : function () {
        var cod_portata_var = document.getElementById("in-codice").value;
        aggiungi_ordinazione_controller.cod_portata = cod_portata_var;
        aggiungi_ordinazione_view.chiedi_quantita();
        
    }, 
    ins_quantita : function() {
        var quantita_var = document.getElementById("in-quantita").value;
       
        var cod_portata = aggiungi_ordinazione_controller.cod_portata;
        var cod_tavolo = aggiungi_ordinazione_controller.cod_tavolo;
        console.log("-"+aggiungi_ordinazione_controller.cod_tavolo);
        console.log("-"+aggiungi_ordinazione_controller.cod_portata);
        console.log("-"+aggiungi_ordinazione_controller.quantita);
         $(document).ready(function() {
                                $.ajax({
                                type: "POST",
                                url: "http://localhost:4000/set_ordinazione",
                                data: "cod_tavolo=" + cod_tavolo + "&cod_portata=" + cod_portata + "&quantita="+quantita_var,
                                dataType: "html",
                                beforeSend: function(xhr) {
                                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                                },
                                success: function(msg)
                                { 
                                console.log(msg);
                                var sentinella;
                                var i = 0;
                                var riga;
                                while (sentinella != cod_portata) {
                                  riga = document.getElementById("tabella2").tBodies[0].childNodes[i+2];
                                  console.log(riga.innerHTML);
                                  sentinella = riga.childNodes[0].innerHTML;
                                  ++i;
                                }
                                var nome_portata = riga.childNodes[1].innerHTML;
                                var prezzo = riga.childNodes[3].innerHTML;
                                var ordinazione = ""+msg +"-" +nome_portata+"-"+quantita_var+"-"+prezzo*quantita_var;
                                aggiungi_ordinazione_view.aggiorna_sinistra(ordinazione);
                                aggiungi_ordinazione_view.aggiorna_destra();
                                },
                                error: function()
                                {
                                alert("Chiamata per la prenotazione fallita");
                                }
                                });
                                });               
        
           
        
		
	}    
}
    
    
