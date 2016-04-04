{
var tinicial;
var parar=0;
var destino;
function tiempo(){
	var ahora=new Date();
	var tahora=ahora.getHours()*3600+
	ahora.getMinutes()*60+ahora.getSeconds()+
	ahora.getMilliseconds()/1000;
	return tahora-tinicial;
}
function set(destino){
	this.destino=destino;
}
function reloj(){
	var ahora=new Date();
	var tahora=ahora.getHours()*3600+
	ahora.getMinutes()*60+ahora.getSeconds()+
	ahora.getMilliseconds()/1000;
	var tt=Math.floor((tahora-tinicial)*100);
	if((tt%5)==1){
		var texto=''+tt/100;
		texto=texto.substring(0,texto.length-1)+' s';
		document.getElementById(this.destino).innerHTML=texto;
	}
	if(parar==0) setTimeout("reloj()",10);
}
function ajusta_der(patron, texto){
	var car=texto.length;
	var car2=patron.length;
	var res;
	if(car2<car) res='ERROR';
	else{
		res=''+patron.substring(0,car2-car)+texto;
	}
	return ''+res;
}
function para(){
	this.parar=1;
}
function sigue(){
	this.parar=0;
	reloj();
}
function sigue_c(){
	this.parar=0;
	c_reloj();
}
function c_reloj(){
	var ahora=new Date();
	var tahora=ahora.getHours()*3600+
	ahora.getMinutes()*60+ahora.getSeconds()+
	ahora.getMilliseconds()/1000;
	var tt=Math.floor(tahora-tinicial);
	var thn=Math.floor(tt/3600);
	var tmn=Math.floor((tt%3600)/60);
	var tsn=tt%60;
	var texto=''+ajusta_der('00', thn+'')+':'+ajusta_der('00', tmn+'')+':'+ajusta_der('00', tsn+'');
	document.getElementById(this.destino).innerHTML=texto;
	if(parar==0)setTimeout("c_reloj()",990);//se refresca cada 990 ms
}
function tinicial(){
	var ahora=new Date();
	this.tinicial=ahora.getHours()*3600+
	ahora.getMinutes()*60+ahora.getSeconds()+
	ahora.getMilliseconds()/1000;
} 
}
