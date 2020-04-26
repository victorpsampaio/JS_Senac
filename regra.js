var nomes=[];
var valores = [];
var radio = document.getElementsByName('in');
var radioresult=[];
var valorR = [];
var z = 0;
V = document.getElementById('valor');
function valor(){
	var x  = nomes.length;
	
	nomes[x]= document.getElementById('produto').value;
	valores[x] = document.getElementById('valor').value;
	
	if (radio.item(0).checked == true ) 
		{
			var x = radioresult.length;
			radioresult[x] = document.getElementsByName('in').item(0).checked;
			valorR[x] = valores[x] * 2.87;
			z = z +1;
			
			}
		else if (radio.item(0).checked == false ) 
		{
			var x = radioresult.length;
			radioresult[x] = document.getElementsByName('in').item(0).checked;
			
			}
			
		if (radio.item(1).checked == true)
		{
			valorR[z] = parseFloat(valores[z]);
			z = z +1;	
			
			
		}
	
	
	}
	
var nomes=[];
var valores = [];
var radio = document.getElementsByName('in');
var radioresult=[];
var valorR = [];
var z = 0;
function valor(){
	var x  = nomes.length;
	
	nomes[x]= document.getElementById('produto').value;
	valores[x] = document.getElementById('valor').value;
	
	if (radio.item(0).checked == true ) 
		{
			var x = radioresult.length;
			radioresult[x] = document.getElementsByName('in').item(0).checked;
			valorR[x] = valores[x] * 2.87;
			z += 1;
			
			}
		else if (radio.item(0).checked == false ) 
		{
			var x = radioresult.length;
			radioresult[x] = document.getElementsByName('in').item(0).checked;
			
			}
			
		if (radio.item(1).checked == true)
		{
			valorR[z] = parseFloat(valores[z]);
			z += 1;	
			
			
			
		}
	
	
	}

	
	
	function tabela()
	{
		var conteudo = "";
		var c = 1;
		var b = 0;
		while(c <= z)
		{
				conteudo += "<tr><td>"+nomes[b]+"</td><td>"+valorR[b]+"</tr>";
				c++;
				b++;
				
			
			}
		document.getElementById('tabela').innerHTML = conteudo;
		
		}