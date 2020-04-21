function main_chiudi_tavolo(cod_tavolo) {
    chiudi_tavolo_controller.chiudi_tavolo(cod_tavolo);
    console.log(cod_tavolo);
    
}
var chiudi_tavolo_controller = {
    chiudi_tavolo : function(cod_tavolo) {
         
                                

                                $(document).ready(function() {
                                    $.ajax({
                                type: "POST",
                                url: "http://localhost:4000/chiudi_tavolo",
                                    data: "cod_tavolo=" + cod_tavolo,
                                dataType: "html",
                                beforeSend: function(xhr) {
                                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                                },
                                success: function(msg)
                                { 
                                if (msg == "ok") {
                                    visualizza_tavolo_view.mostra_schermata_unica_con_pulsante(cod_tavolo);
                                }
                                if (msg == "errore") {
                                    alert("errore nella chiusura del tavolo");
                                }
                                },
                                error: function()
                                {
                                alert("Chiamata per chiudere il tavolo fallita");
                                }
                                });
                                });
        
    }
}

 
