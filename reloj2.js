var t=0;
var timer;
var activo=false;
var destino;
function reloj(){
	if(!activo){
	   timer=setInterval(
		function(){
			t++;
			var sec=t%60;
			var minut=((t-sec)/60)%60;
			var hor=(t-sec-minut*60)/3600;
			var tt=ajusta_der('00', ''+hor)+':'+ajusta_der('00', ''+minut)+':'+ajusta_der('00', ''+sec);
			document.getElementById(destino).innerHTML=tt;
		}
	   , 1000);
	   activo=true;
	}
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
	clearInterval(timer);
	activo=false;
}