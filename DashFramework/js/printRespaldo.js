function changeChartSize()
{
    var cont = 0;
    var length = chartArray.length;
    while (cont < length)
	{
		chartArray[cont].chartDefinition.width = 625;
		chartArray[cont].render(chartArray[cont].query.lastResults());
		cont ++;
	}
}

function hideElementsExceptCharts()
{
	document.getElementById("miNavegador").style.display = "none";
	document.getElementById("SeccionTitulo").style.display = "none";
	document.getElementById("SeccionConsultas").style.display = "none";
	document.getElementById("SeccionPiePagina").style.display = "none";
}

function showElementsExceptCharts()
{
	document.getElementById("miNavegador").style.display = "block";
	document.getElementById("SeccionTitulo").style.display = "block";
	document.getElementById("SeccionConsultas").style.display = "block";
	document.getElementById("SeccionPiePagina").style.display = "block";
}

function printDiv(myId)
{
	var divName = myId.id+"Container";
	var elementosVisibles = $(".imprimir");
	var cont = 0;

	changeChartSize ();
	setTimeout(function(){ 
		while(cont<elementosVisibles.length)
		{
			if(elementosVisibles[cont].id != divName)
			{
				elementosVisibles[cont].classList.add("no-imprimir");
			}
			else
			{
				document.getElementById(myId.id+"Dropdown").style.display = "none";
			}
			cont++;
		}
	}, 1000);
	setTimeout(function(){ 
		window.print();
		cont = 0;
		while(cont<elementosVisibles.length)
		{
			if(elementosVisibles[cont].id != divName)
			{
				elementosVisibles[cont].classList.remove("no-imprimir");
			}
			else
			{
				document.getElementById(myId.id+"Dropdown").style.display = "block";
			}
			cont++;
		}
	}, 2000);
}

function printDash()
{
	changeChartSize ();
	setTimeout(function(){ hideElementsExceptCharts(); }, 1000);
    setTimeout(function(){ 
    	window.print();
    	showElementsExceptCharts(); 
    }, 2000);
}

