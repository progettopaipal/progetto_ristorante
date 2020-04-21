var home_modulo = {
    
    chiedi_home: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/progetto_ristorante/src/index.html");
    
    
    },
    chiedi_stile: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/progetto_ristorante/src/stile.css");
    
    
    },
     chiedi_visualizza_tavolo: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/progetto_ristorante/src/visualizza_tavolo.js");
    
    
    },
    dammi_apri_tavolo: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/progetto_ristorante/src/ApriTavolo.js");
    
    
    },
     dammi_chiudi_tavolo: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/progetto_ristorante/src/ChiudiTavolo.js");
    
    
    },
    dammi_aggiungi_prenotazione: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/progetto_ristorante/src/aggiungi_ordinazione.js");
    
    
    }
}
    exports.home_modulo = home_modulo;
 
