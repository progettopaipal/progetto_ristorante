var b = require('mysql');
var VisualizzaTavoloModulo =  {
          liberta: function(req,res,cod_tavolo) {
            //
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                var  risultato;
               
       	        var sql = "SELECT libero FROM Tavoli WHERE cod_tavolo = '"+cod_tavolo+"';";
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
       	              if (error){
       	                    console.log("La query ha restituito un errore");
       	                    res.end();       
       	              } else {          
                            if (results[0] == undefined) {
                                console.log("Il dato è stato prelevato con successo ma è undefined");
       	    	                res.end("");
       	                    }
       	                    else  {
                                console.log("Il dato è stato prelevato con successo");
       	                        risultato = results[0].libero;
                                console.log(risultato);
                                res.writeHead(200,{"Content-Type":"text/html"});                                 
                                res.end(risultato);
       	                    }
       	               
                    }
                });
                con.end();
            //
          },
          get_ordinazioni: function(req,res,cod_tavolo) {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                var  risultato = "";
               
    var sql = "SELECT cod_ordinazione , nome_portata , quantita , prezzo * quantita as PQ "+
        "FROM Tavoli_Menu,Tavoli,Menu  "+
"where cod_tavolo = '"+cod_tavolo+"' and Tavoli_Menu.ref_portata = Menu.cod_portata and Tavoli_Menu.ref_tavolo = Tavoli.cod_tavolo and Tavoli_Menu.ordinazione_aperta ="+ " 'si' ;";
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
       	              if (error){
       	                    console.log("La query ha restituito un errore");
       	                    res.end();       
       	              } else {          
                            if (results[0] == undefined) {
                                console.log("Il dato è stato prelevato con successo ma è undefined");
       	    	                res.end("");
       	                    }
       	                    else  {
                                console.log("Il dato è stato prelevato con successo");
                                var i = 0;
                                while (results[i] != undefined) {
                                 risultato += results[i].cod_ordinazione + "-" +  results[i].nome_portata + "-" +  results[i].quantita + "-" + results[i].PQ + ",";
                                ++i;
                                } 
                                console.log(risultato);
                                res.writeHead(200,{"Content-Type":"text/html"});                                 
                                res.end(risultato);
       	                    }
       	               
                    }
                });
                con.end();
          }
}
exports.VisualizzaTavoloModulo = VisualizzaTavoloModulo;
