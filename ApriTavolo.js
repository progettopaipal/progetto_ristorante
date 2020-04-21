/*var apri_tavolo_view = {
    mostra_schermata_doppia : function() {
        
        visualizza_tavolo_view.mostra_schermata_doppia("");
        
    }
    
    
}*/
function main_apri_tavolo(cod_tavolo) {
    apri_tavolo_controller.apri_tavolo(cod_tavolo);
    console.log(cod_tavolo);
    
}
var apri_tavolo_controller = {
    apri_tavolo : function(cod_tavolo) {
         
                                

                                $(document).ready(function() {
                                    $.ajax({
                                type: "POST",
                                url: "http://localhost:4000/apri_tavolo",
                                    data: "cod_tavolo=" + cod_tavolo,
                                dataType: "html",
                                beforeSend: function(xhr) {
                                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                                },
                                success: function(msg)
                                { 
                                if (msg == "ok") {
                                    visualizza_tavolo_view.mostra_schermata_doppia("",cod_tavolo);
                                }
                                if (msg == "errore") {
                                    alert("errore nella prenotazione del tavolo");
                                }
                                },
                                error: function()
                                {
                                alert("Chiamata per occupare il tavolo fallita");
                                }
                                });
                                });
        
    }
}

