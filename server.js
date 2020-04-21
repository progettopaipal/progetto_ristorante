var express = require("express");
var cors = require('cors');
var path = require('path');
var bodyParser = require("body-parser");
var url = require("url");
var vis_tav = require("./VisualizzaTavoloModulo.js");
var apri = require("./ApriTavoloModulo.js");
var agg = require("./AggiungiOrdinazioneModel.js");

var chiudi = require("./ChiudiTavoloModulo.js");
var home = require("./HomeModulo.js");
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/index.html",function(req,res) {
	
	home.home_modulo.chiedi_home(req,res);
	
});
app.get("/stile",function(req,res) {
	
	home.home_modulo.chiedi_stile(req,res);
	
});
app.get("/menu",function(req,res) {
	
	agg.AggiungiOrdinazioneModulo.get_menu(req,res);
	
});
app.get("/visualizza_tavolo",function(req,res) {
	
	home.home_modulo.chiedi_visualizza_tavolo(req,res);
	
});
app.get("/dammi_apri_tavolo",function(req,res) {
	
	home.home_modulo.dammi_apri_tavolo(req,res);
	
});
app.get("/dammi_chiudi_tavolo",function(req,res) {
	
	home.home_modulo.dammi_chiudi_tavolo(req,res);
	
});
app.get("/dammi_aggiungi_prenotazione",function(req,res) {
	
	home.home_modulo.dammi_aggiungi_prenotazione(req,res);
	
});
app.post("/liberta", function(req,res){
	var cod_tavolo =  req.body.cod_tavolo;
	vis_tav.VisualizzaTavoloModulo.liberta(req,res,cod_tavolo);	              
});
app.post("/apri_tavolo", function(req,res){
   var cod_tavolo =  req.body.cod_tavolo;
   console.log(cod_tavolo);
	apri.ApriTavoloModulo.occupa(req,res,cod_tavolo);	              
});
app.post("/chiudi_tavolo", function(req,res){
   var cod_tavolo =  req.body.cod_tavolo;
   console.log(cod_tavolo);
	chiudi.ChiudiTavoloModulo.libera(req,res,cod_tavolo);	              
});
app.post("/set_ordinazione", function(req,res){
   var cod_tavolo =  req.body.cod_tavolo;
    var cod_portata =  req.body.cod_portata;
     var quantita =  req.body.quantita;
   console.log(":"+cod_tavolo);
   console.log(":"+cod_portata);
   console.log(":"+quantita);
	agg.AggiungiOrdinazioneModulo.set_ordinazione(req,res,cod_tavolo,cod_portata,quantita);	              
});
app.post("/get_ordinazioni", function(req,res){
    var cod_tavolo =  req.body.cod_tavolo;
    vis_tav.VisualizzaTavoloModulo.get_ordinazioni(req,res,cod_tavolo);
});

var port = process.env.PORT || 4000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
 
 
