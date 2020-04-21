var b = require('mysql');
var ChiudiTavoloModulo =  {
    libera: function(req,res,cod_tavolo) {
        res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                var  risultato;
               
       	        var sql = "UPDATE Tavoli SET libero = 'si' WHERE cod_tavolo = '"+cod_tavolo+"';";
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
       	                        res.end("errore");      
       	              } else {          
                            //
                                    var sql = "UPDATE Tavoli_Menu SET ordinazione_aperta = 'no' WHERE ref_tavolo = '"+cod_tavolo+"';";
                                        console.log(sql);
                                var con2 = b.createConnection({
                            host: "localhost",
                                port: "3306",
                            user: "ristorante",
                            password: "ristorante_password",
                                database: "Ristorante17"
                            });
                            con2.connect();
                            con2.query(sql, function (error, results, fields) {
                                if (error){
                                    console.log("La query ha restituito un errore");
                                    res.end("errore");      
                                } else {          
                            
                                        console.log("Il dato è stato inserito con successo");
       	                        
                               
                                        res.writeHead(200,{"Content-Type":"text/html"});                                 
                                        res.end("ok");
       	                    
       	               
                                }
                            });
                                con2.end();
                //
                                      
       	                    
       	               
                    }
                });
                con.end();
    }
}
exports.ChiudiTavoloModulo = ChiudiTavoloModulo; 
