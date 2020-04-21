var b = require('mysql');
var AggiungiOrdinazioneModulo =  {
    get_menu: function(req,res) {
        res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                var  risultato = "";
               
       	        var sql = "SELECT * FROM Menu;";
                 console.log(sql);
                var con = b.createConnection({
                    host: "localhost",
                    port: "3306",
                    user: "ristorante",
                    password: "ristorante_password",
                    database: "Ristorante17"
                });
       	        con.connect();
       	        con.query(sql, function (error, results, fields) {
       	              if (results[0] == undefined) {
                                console.log("Il dato è stato prelevato con successo ma è undefined");
       	    	                res.end("");
       	                    }
       	                    else  {
                                console.log("Il dato è stato prelevato con successo");
       	                        for (var i = 0; i < results.length ; ++i) {
                                    risultato += results[i].cod_portata + "-";
                                     risultato += results[i].nome_portata + "-";
                                      risultato += results[i].descrizione + "-";
                                       risultato += results[i].prezzo + "-";
                                       risultato += results[i].categoria;
                                       risultato += ",";
                                    
                                }
                                res.writeHead(200,{"Content-Type":"text/html"});                                 
                                res.end(risultato);
       	                    }
       	               
                    
                });
                con.end();
    },
    set_ordinazione: function(req,res,cod_tavolo,cod_portata,quantita) {
        res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                var  risultato;
               
       	        var sql = "SELECT max(cod_ordinazione) as P FROM Tavoli_Menu";
                 console.log(sql);
                var con = b.createConnection({
                    host: "localhost",
                    port: "3306",
                    user: "ristorante",
                    password: "ristorante_password",
                    database: "Ristorante17"
                });
       	        con.connect();
       	        con.query(sql, function (error, results, fields) {
       	            if (results[0] == undefined) {
                                console.log("Il dato è stato prelevato con successo ma è undefined");
       	    	                res.end("");
       	                    }
       	                    else  {
                                console.log("Il dato è stato prelevato con successo");
       	                        risultato = results[0].P;
                               
                                risultato = risultato + 1;
                                 console.log(risultato);
                                 console.log(cod_tavolo);
                                 console.log(cod_portata);
                                 console.log(quantita);
var sql2 = "INSERT INTO `Tavoli_Menu` (`cod_ordinazione`,`ref_tavolo`, `ref_portata`,`quantita`,`ordinazione_aperta`) VALUES "+       "("+risultato+","+cod_tavolo+","+cod_portata+","+quantita+",'si');";
                                
                                var con2 = b.createConnection({
                                host: "localhost",
                                port: "3306",
                                user: "ristorante",
                                password: "ristorante_password",
                                database: "Ristorante17"
                                });
                                con2.connect();
       	                        con2.query(sql2, function (error, results, fields) {
                                                    if (error){
                                                    console.log("La query ha restituito un errore");
                                                    res.end("errore");      
                                                    } else {          
                            
                                                    console.log("Il dato è stato inserito con successo");
       	                        
                               
                                                    res.writeHead(200,{"Content-Type":"text/html"});                                 
                                                    res.end(""+risultato);
                                                    }
                                });
                                con2.end();  
                                
       	                    }
                });
                con.end();  
        
        
    }
}
exports.AggiungiOrdinazioneModulo = AggiungiOrdinazioneModulo;
 
