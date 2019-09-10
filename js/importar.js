var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
function hasAdblock() {
        var a = document.createElement('div');
        a.innerHTML = '&nbsp;';
        a.className = 'adsbox pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads adglare-ad-server text-ad-links';
        a.style = 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;';
        var r = false;
        try {
            document.body.appendChild(a);
            var e = document.getElementsByClassName('adsbox')[0];
            if(e.offsetHeight === 0 || e.clientHeight === 0) r = true;
            if(window.getComputedStyle !== undefined) {
                var tmp = window.getComputedStyle(e, null);
                if(tmp && (tmp.getPropertyValue('display') == 'none' || tmp.getPropertyValue('visibility') == 'hidden')) r = true;
            }
            document.body.removeChild(a);
        } catch (e) {}
        return r;
    }
    if (hasAdblock == true) {
    	document.getElementById("warning").style.display = 'block';
    }
    function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function resetad() {
	if (hasAdblock() == false) {
    	document.getElementById("warning").style.display = 'none';
    	console.log('aaa');
    } else {
    	document.getElementById("warning").style.display = 'block';
    }
    	$('#q4').width(document.querySelector("#q2").offsetWidth);
	$('#q3').width(document.querySelector("#q2").offsetWidth);
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
function setmaxex() {
	var maxex = parseInt(document.querySelector("#q1").max) - parseInt(document.querySelector("#q1").value)
	document.querySelector("#q4").max = maxex
	$('#q4').width(document.querySelector("#q2").offsetWidth);
	$('#q3').width(document.querySelector("#q2").offsetWidth);
	if (parseInt(document.querySelector("#q4").value) > maxex) {
		document.querySelector("#q4").value = maxex;
	}
}
var jason;
function transform() {
  var input = document.getElementById('xmltext').value;
  var json = xmlToJson.parse(input);
  console.log(JSON.stringify(json, null, 4));
  jason = json
}
var ainput = document.querySelector('input[type=file]');
var textarea = document.querySelector("#xmltext");
var xmlbase

function readFile(event) {
  textarea.textContent = event.target.result;
  textarea.value = event.target.result;
  xmlbase = event.target.result;
  console.log(xmlbase);
   transform(xmlbase);
  document.querySelector("#q1").max = jason.allq.questao.length
  $('#q1').width(document.querySelector("#q2").offsetWidth);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function changeFile() {
  var file = ainput.files[0];
  var reader = new FileReader();
  reader.addEventListener('load', readFile);
  reader.readAsText(file);


}
var comandos = []
var global_q;
var global_a;
var global_v = 1;
var global_passer;
var worka
var israndom
var jafoi = []
var reserva
function start() {
	transform(xmlbase);
	console.log(jason.allq.questao[0]);
	var q1 = document.getElementById('q1');
	var q2 = document.querySelector("#q2");
	var q3 = document.getElementById('q3');
	var q4 = document.getElementById('q4');	
	var qq = q1.value;
	var qa = q2.value;
	var qv = q3.value;
	var qe = q4.value;
	var israndom = document.querySelector("#Random").checked;
	console.log(israndom);
	global_q = qq;
	global_a = qa;
	global_v = qv;
	global_e = qe;
	sum = parseInt(qq) + parseInt(qe);
	if (sum > jason.allq.questao.length) {
		sum = jason.allq.questao.length
		alert('O numero de questões inserido é maior que o numero de questões do banco de questões, o numero foi automaticamente diminuido para a quantidade total de questões')
	}
 	document.open();
 	 	document.write('<!DOCTYPE html><html><head><link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"><link rel="stylesheet" type="text/css" href="css/style.css"><script type="text/javascript" src="js/importar.js"></script><title>GP - Inicio</title></head><body><center>');
 		document.write('<div id="main1">');
 		document.write('<h3>Cabeçalho</h3>')
 		document.write('<label>Cabeçalho (Link)</label><br>' + '<input type="text" name="cabecalho" id="cabecalho" class="gr" onblur="update();"><br>')
 		document.write('<img id="header">')
 		document.write('</div>')
 	 	for (z = 0; z < sum; z++) {
 	 	var l = z + 1;
 	 	if (israndom == true) {
 	 	i = getRandomInt(0, jason.allq.questao.length)

 	 	do {
 	 	i = getRandomInt(0, jason.allq.questao.length)
 	 	}
 	 	while (jafoi.includes(i))
 	 	jafoi.push(i)
 	 	}
 	 	else {
 	 	var i = z;
 	 	}
 		document.write(`<div id="main1"><label>Questão ${l}</label><br><input type="text" name="qs${l}" id="qs${l}" value="${htmlEntities(jason.allq.questao[i].title)}"" class="gr"><br>`)
 		if (typeof jason.allq.questao[i].imglink !== "undefined") {
		var ilink = jason.allq.questao[i].imglink
		} else {
		var ilink = ""
		}
 		document.write(`<label>Midia (Link)</label><br><input type="text" name="qs${l}" id="md${l}" class="gr" value="${ilink}"><br>`) 		
 		for (j = 0; j < q2.value; j++) {
 	 	var k = String.fromCharCode(97 + j).toUpperCase();
 	 	document.write(`<label>Alternativa ${k}</label><br>`)
 	 	var gambi = `jason.allq.questao[i].${k}`
 	 	var gambiar = eval(gambi)
 	 	document.write(`<input type="text" name="qs${l}${k}" id="qs${l}${k}" value="${htmlEntities(gambiar)}" class="gr"><br>`)
 	 	}
 	 	for (j = 0; j < q2.value; j++) {
 	 	var k = String.fromCharCode(97 + j).toUpperCase();
 	 	document.write(`<input type="radio" name="correta${l}" id="correta${l}${k}" value="${k}">${k}`)
 	 	}
 	 	document.write('</div>')
 	 	worka = `correta${l}${jason.allq.questao[i].gabarito}`
 	 	console.log(worka)
 	 	comandos.push(worka);
 	 	
}
	document.write('<br><button class="button" onclick="gerar();">Continuar</button><br>&nbsp')
	document.close();
	console.log(comandos)
	for (var i = 0; i < comandos.length; i++) {
		var comando = comandos[i]
		$('[id="' + comando + '"]').prop("checked", true);
	}

}
function update() {
	document.querySelector("#header").src = document.querySelector("#cabecalho").value;
}

function next1(variacoes = 1) {
	var jkkkkk;
	var ident
	for (jkkkkk = 0; jkkkkk < variacoes; jkkkkk++) { 
	var allquest = [];
	var allmedia = [];
	var gabarito = [];
	var cabecalho = document.querySelector("#cabecalho").value;
	var cabecalhofinal = `<img src="${cabecalho}">`
	for (i = 0; i < sum; i++) {
 	 	var l = i + 1;
 	 	var nexta = "#qs" + l;
 	 	var nextm = "#md" + l;
 	 	allquest.push(htmlEntities(document.querySelector(nexta).value));
 	 	allmedia.push(document.querySelector(nextm).value);
 	 }
 	 for (i = 0; i < sum; i++) {
 	 	var l = i + 1;
 	 	var nextg = `input[name="correta${l}"]:checked`;
 	 	gabarito.push(htmlEntities(document.querySelector(nextg).value));
 	 }
 	 var allquestsize = global_q;

 	 for (aa = 0; aa < sum; aa++) {
 	 	var l = aa + 1;
		eval(`var next_q${l} = []`);
		for (j = 0; j < global_a; j++) {
 	 	var k = String.fromCharCode(97 + j).toUpperCase();
 	 	var aaa = eval(`qs${l}${k}`);
 	 	var aaa1 = aaa.value;
 	 	var aaa2 = htmlEntities(aaa1);
		eval(`next_q${l}`).push(aaa2);
 	 	}
 	 }
 	 var totalq = global_q
 	 var ordem = []
 	 for (var input = 0; input < sum; input++) {
 	ordem.push(input);
	}
 	 var final
 	 shuffleArray(ordem);
 	 ident = MD5(`${eval(jkkkkk)}`);
 	eval(`window.identificador${jkkkkk} = ident;`)
 	var final = '<!DOCTYPE html><html><head><title>GP - Prova</title></head><body><div id="main2">';
 	final += cabecalhofinal;
 	final += '<br>'
 	final += `Identificador: ${ident}`
	for (aa = 0; aa < allquestsize; aa++) {
		var l = aa + 1;
		final +=  '<div class="aux"><br>';;
		final +=  '<label>'; 
		final +=  l + ') ' + allquest[ordem[aa]];
		final +=  '</label>';
		if (allmedia[aa] !== "") {
		final +=  `<img src="${allmedia[ordem[aa]]}">`;
		}
 	 	final +=  '<p>';
	for (j = 0; j < global_a; j++) {
 	 	var k = String.fromCharCode(97 + j).toUpperCase();	
 	 	aaa = eval('next_q' + (ordem[aa] + 1) + '[j]');
 	 	final +=  k + ') ' + aaa;
 	 	final +=  '<br>';
 	 	}
 	 	final +=  '</p>';
		final +=  '</div>'
 	 } 	
	sortedArray = [];
	console.log(gabarito)
	console.log(ordem)
	for (i=0; i<global_q; i++) {
	sortedArray.push(eval(`gabarito[ordem[${i}]]`));
	console.log(sortedArray);
	}

var blob = new Blob(["\ufeff", final], {type: 'text/html'});

var passer = URL.createObjectURL(blob);
eval(`window.variacao${jkkkkk} = '';`)
eval(`window.gabarito${jkkkkk} = sortedArray;`)
eval(`variacao${jkkkkk} = passer.toString()`)
}
}
function gerargabaritos(variacoes) {
	var gabaritos = '<!DOCTYPE html><html><head><link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"><link rel="stylesheet" type="text/css" href="css/style.css"><title>GP - Gabaritos</title></head><body><div id="main2">';
	var jkkkkk;
	for (jkkkkk = 0; jkkkkk < variacoes; jkkkkk++) { 
	id = eval('identificador' + jkkkkk);
	gabaritos += `Prova ${jkkkkk + 1} (${id}):<br>`;
	gabaritos += eval('gabarito' + jkkkkk);
	gabaritos += '<br>'
}
	gabaritos += '</div>'
	console.log(gabaritos);
	var blob = new Blob(["\ufeff", gabaritos], {type: 'text/html'});
	window.gabariterson = URL.createObjectURL(blob);
}
function gerar() {
	next1(global_v);
	gerargabaritos(global_v);
	document.open();
	document.write('<!DOCTYPE html><html><head><title>Gerador de provas</title><link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"><link rel="stylesheet" type="text/css" href="css/style.css"></head><body><center><div id="main1"><h1>Provas geradas</h1>');
	document.write(`<button class="button" onclick="window.open(gabariterson, '_blank');">Todos os gabaritos</button> `)
	for (varial = 0; varial < global_v; varial++) { 
	document.write(`<div><h3>Prova ${varial + 1}</h3>`)
	document.write(`<button class="button" onclick="window.open(variacao${varial}, '_blank');">Prova</button> `)
	document.write(`<button class="button" onclick="alert(gabarito${varial});">Gabarito</button>`)
	document.write(`<br>&nbsp</div>`)
	}
	document.close();
}