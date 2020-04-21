var b = require('mysql');
var ApriTavoloModulo =  {
    occupa: function(req,res,cod_tavolo) {
        res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                var  risultato;
               
       	        var sql = "UPDATE Tavoli SET libero = 'no' WHERE cod_tavolo = '"+cod_tavolo+"';";
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
                            
                                console.log("Il dato è stato inserito con successo");
       	                        
                               
                                res.writeHead(200,{"Content-Type":"text/html"});                                 
                                res.end("ok");
       	                    
       	               
                    }
                });
                con.end();
    }
}
exports.ApriTavoloModulo = ApriTavoloModulo;
