/*
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


function printDivSVG(myId)
{
	var divName = myId.id+"Body";
	$( "#"+divName ).addClass( "graphicToPrint" );
	html2canvas(
		document.getElementById(divName), 
		{
	    	useCORS: true
		}
	).then(function (canvas) 
		{
	    	if (navigator.msSaveBlob) 
	    	{
	    		console.log('this is IE');
	      		var URL=window.URL;
			    var BlobBuilder = window.MSBlobBuilder;
			    navigator.saveBlob=navigator.msSaveBlob;
			    var imgBlob = canvas.msToBlob();
	      		if (BlobBuilder && navigator.saveBlob) 
	      		{
	        		var showSave =  function (data, name, mimetype) 
	        		{
	          			var builder = new BlobBuilder();
		          		builder.append(data);
		          		var blob = builder.getBlob(mimetype||"application/octet-stream");
		          		if (!name)
	            			name = "Download.bin";
	          			navigator.saveBlob(blob, name);
	        		};
	        		showSave(imgBlob, 'grafico.png',"image/png");
	      		}
	    	} 
		    else 
		    {
		    	if ($('#export-image-container').length == 0)
		    		$('body').append('<a id="export-image-container" download="grafico.jpg">')
		      	img = canvas.toDataURL("image/jpeg")
		      	img = img.replace('data:image/jpeg;base64,', '')
		      	finalImageSrc = 'data:image/jpeg;base64,' + img;

		      	$('#export-image-container').attr('href', finalImageSrc)
		      	$('#export-image-container')[0].click()
		      	$('#export-image-container').remove()
		    }
	  	}
	).then(function ()
	    {
	        $( "#"+divName ).removeClass( "graphicToPrint" );
	    }
	);
}


function printDivCANVAS(myId)
{
    var divName = myId.id+"Body";
	html2canvas(
		document.getElementById(divName),
		{
			onrendered: function(canvas)
			{
				if (navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) 
				{
			      	var blob = canvas.msToBlob();
			        window.navigator.msSaveBlob(blob,'Test file.png');
	      		}
      			else 
      			{
      				$('#imageContainer').attr('href', canvas.toDataURL("grafico/png"));
					$('#imageContainer').attr('download', 'grafico.png');
					$('#imageContainer')[0].click();
      			}
			}
		}
	);
}

function printDivPDF(myId)
{
	var divName = myId.id+"Body";
	$( "#"+divName ).addClass( "graphicToPrint" );
	html2canvas(
		document.getElementById(divName), 
		{
	    	useCORS: true
		}
	).then(function (canvas) 
		{
	    	if (navigator.msSaveBlob) 
	    	{
	    		console.log('this is IE');
	      		var URL=window.URL;
			    var BlobBuilder = window.MSBlobBuilder;
			    navigator.saveBlob=navigator.msSaveBlob;
			    var imgBlob = canvas.msToBlob();
	      		if (BlobBuilder && navigator.saveBlob) 
	      		{
	        		var showSave =  function (data, name, mimetype) 
	        		{
	          			var builder = new BlobBuilder();
		          		builder.append(data);
		          		var blob = builder.getBlob(mimetype||"application/octet-stream");
		          		if (!name)
	            			name = "Download.bin";
	          			navigator.saveBlob(blob, name);
	        		};
	        		showSave(imgBlob, 'grafico.png',"image/png");
	      		}
	    	} 
		    else 
		    {
		    	if ($('#export-image-container').length == 0)
		    		$('body').append('<a id="export-image-container" download="grafico.jpg">')
		      	img = canvas.toDataURL("image/jpeg")
		      	img = img.replace('data:image/jpeg;base64,', '')
		      	finalImageSrc = 'data:image/jpeg;base64,' + img;

		      	var doc = new jsPDF();
				doc.addImage(finalImageSrc, 'JPEG', 20, 20);
				doc.save('grafico.pdf');
		    }
	  	}
	).then(function ()
	    {
	        $( "#"+divName ).removeClass( "graphicToPrint" );
	    }
	);
}

function printDash()
{
	html2canvas(
		document.getElementById("SeccionGraficosHistoricos"), 
		{
	    	useCORS: true
		}
	).then(function (canvas) 
		{
	    	if (navigator.msSaveBlob) 
	    	{
	    		console.log('this is IE');
	      		var URL=window.URL;
			    var BlobBuilder = window.MSBlobBuilder;
			    navigator.saveBlob=navigator.msSaveBlob;
			    var imgBlob = canvas.msToBlob();
	      		if (BlobBuilder && navigator.saveBlob) 
	      		{
	        		var showSave =  function (data, name, mimetype) 
	        		{
	          			var builder = new BlobBuilder();
		          		builder.append(data);
		          		var blob = builder.getBlob(mimetype||"application/octet-stream");
		          		if (!name)
	            			name = "Download.bin";
	          			navigator.saveBlob(blob, name);
	        		};
	        		showSave(imgBlob, 'grafico.png',"image/png");
	      		}
	    	} 
		    else 
		    {
		    	if ($('#export-image-container').length == 0)
		    		$('body').append('<a id="export-image-container" download="barchart.jpg">')
		      	img = canvas.toDataURL("image/jpeg")
		      	img = img.replace('data:image/jpeg;base64,', '')
		      	finalImageSrc = 'data:image/jpeg;base64,' + img;

		      	var doc = new jsPDF();
				doc.addImage(finalImageSrc, 'JPEG', 20, 20);
				doc.save('grafico.pdf');
		    }
	  	}
	);
}

*/