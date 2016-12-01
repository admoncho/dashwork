var fecha = new Date();
//funciones

//agrega a plantilla web la barra de navegacion
//recibe como parametro la descripcion general del dashboard
function addNavigatorHtmlCode(dashGeneralDescription)
{
    var htmlWindowCode = "";
    htmlWindowCode +=	"<div class='modal fade bs-example-modal-sm' id='infoGeneral' tabindex='-1' role='dialog' aria-labelledby='infoGeneralTitulo'>";
	htmlWindowCode +=		"<div class='modal-dialog modal-sm' role='document'>";
	htmlWindowCode +=			"<div class='modal-content'>";
	htmlWindowCode +=				"<div class='modal-header'>";
	htmlWindowCode +=					"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
	htmlWindowCode +=					"<h4 class='modal-title' id='infoGeneralTitulo'><i class='fa fa-info-circle fa-fw'></i> Información General</h4>";
	htmlWindowCode +=				"</div>";
	htmlWindowCode +=				"<div id='dashboardGeneralInfo' class='modal-body ventana-body'>";
	htmlWindowCode +=				"</div>";
	htmlWindowCode +=				"<div class='modal-footer'>";
	htmlWindowCode +=					"<button type='button' class='btn btn-primary' data-dismiss='modal'>Aceptar</button>";
	htmlWindowCode +=				"</div>";
	htmlWindowCode +=			"</div>";
	htmlWindowCode +=		"</div>";
	htmlWindowCode +=	"</div>";

	$("#SeccionVentanasAdicionales").append(htmlWindowCode);
	$("#dashboardGeneralInfo").append(dashGeneralDescription);

	var htmlNavCode = "";
	htmlNavCode +=	"<nav id='miNavegador' class='navbar navbar-default navbar-fixed-top imprimir'>";
	htmlNavCode +=		"<div class='container'>";
	htmlNavCode +=			"<div class='navbar-header page-scroll'>";
	htmlNavCode +=				"<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#herramientas' aria-expanded='false' aria-controls='navbar'>";
	htmlNavCode +=					"<span class='sr-only'>Toggle navigation</span>";
	htmlNavCode +=					"<span class='icon-bar'></span>";
	htmlNavCode +=					"<span class='icon-bar'></span>";
	htmlNavCode +=					"<span class='icon-bar'></span>";
	htmlNavCode +=				"</button>";
	htmlNavCode +=				"<a class='navbar-brand page-scroll' href='#inicio'><i class='fa fa-home fa-fw'></i> SIGI</a>";
	htmlNavCode +=			"</div>";
	htmlNavCode +=			"<div id='herramientas' class='navbar-collapse collapse navegacion'>";
	htmlNavCode +=				"<ul class='nav navbar-nav'>";
	htmlNavCode +=					"<li><a class='page-scroll' href='#inicio'>Inicio</a></li>";
	htmlNavCode +=					"<li><a class='page-scroll' href='#SeccionConsultas'><i class='fa fa-pencil-square-o fa-fw'></i> Opciones de Consulta</a></li>";
	htmlNavCode +=					"<li><a class='page-scroll' href='#SeccionPiePagina'><i class='fa fa-users fa-fw'></i> Contacto</a></li>";
	htmlNavCode +=				"</ul>";
	htmlNavCode +=				"<ul class='nav navbar-nav navbar-right'>";
	htmlNavCode +=					"<li class='dropdown'>";
	htmlNavCode +=						"<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>";
	htmlNavCode +=							"<i class='fa fa-wrench fa-fw'></i> Herramientas <span class='caret'></span>";
	htmlNavCode +=						"</a>";
	htmlNavCode +=						"<ul class='dropdown-menu'>";
	htmlNavCode +=							"<li><a href='#infoGeneral' data-toggle='modal' data-target='#infoGeneral'><i class='fa fa-info-circle fa-fw'></i> Información General</a></li>";
	htmlNavCode +=							"<li role='separator' class='divider'></li>";
	htmlNavCode +=							"<li class='dropdown-header'>Opciones de Descarga</li>";
	htmlNavCode +=							"<li><a onclick='printDash()' href='#'><i class='fa fa-download fa-fw'></i> Descargar como PDF</a></li>";
	htmlNavCode +=						"</ul>";
	htmlNavCode +=					"</li>";
	htmlNavCode +=				"</ul>";
	htmlNavCode +=			"</div>";
	htmlNavCode +=		"</div>";
	htmlNavCode +=	"</nav>";

	$("#inicio").append(htmlNavCode);
}

//agrega a plantilla web el panel de titulo del dashboard
//recibe como paramentro el titulo
function addTitleHtmlCode(dashTitle)
{
	var htmlCode = "";
	htmlCode += "<div class='imprimir col-xs-12 col-sm-12 col-md-12 col-lg-12 last'>";
	htmlCode +=	"<div class='container'>";
	htmlCode +=		"<div class='row clearfix '>";
	htmlCode +=			"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 last'><div>";
	htmlCode +=				"<div class='panel panel-primary' >";
	htmlCode +=					"<div class='panel-heading clearfix' >" ;
	htmlCode +=						"<div class='row clearfix title-row'>";
	htmlCode +=							"<div class='col-xs-12 col-sm-3 col-md-3 col-lg-3 last' ><div>";
	htmlCode +=								"<img class='img-responsive logo title-img' alt='SIGI' src='../public/ITCR/DashFramework/images/SIGILogo.png/content'>";
	htmlCode +=							"</div></div>";
	htmlCode +=							"<div class='col-xs-12 col-sm-9 col-md-9 col-lg-9 last'><div>";
	htmlCode +=								"<h1 align='right' id='dashboardTitle' class='title-text'></h1>";
	htmlCode +=							"</div></div>";
	htmlCode +=						"</div>";
	htmlCode +=					"</div>";
	htmlCode +=				"</div>";
	htmlCode +=			"</div></div>";
	htmlCode +=		"</div>";
	htmlCode +=	"</div>";
	htmlCode +=	"</div>";
	$("#SeccionTitulo").append(htmlCode);
	$("#dashboardTitle").append(dashTitle);
}

function addSource_OptionsPanelHtmlCode(description)
{
	var htmlCode='';
	htmlCode +=	"<div class='panel-footer panel-footer-QueryOptions'>";
	htmlCode +=	"	<div class='row clearfix ' >";
	htmlCode +=	"		<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 last'>";
	htmlCode +=	"			<div>";
	htmlCode +=	"				<p class='fuente'>"+description+"</p>";
	htmlCode +=	"			</div>";
	htmlCode +=	"		</div>";
	htmlCode +=	"	</div>";
	htmlCode +=	"</div>";
	$("#QueryOptionsPanel").append(htmlCode);
}

function addTab_OptionsPanelHtmlCode(id, title, active)
{
	var htmlCode1='';
	var htmlCode2='';
	if (active)
	{
		htmlCode1 +="<li class='active'><a href='#"+id+"Ul' data-toggle='tab'>"+title+"</a>";
		htmlCode1 +="</li>";

		htmlCode2 +="<div class='tab-pane fade in active' id='"+id+"Ul'>";
		htmlCode2 +="	<div id='"+id+"' class='row clearfix consultPrimerFila'>";
		htmlCode2 +="	</div>";
		htmlCode2 +="</div>";		
	}
	else
	{
		htmlCode1 +="<li><a href='#"+id+"Ul' data-toggle='tab'>"+title+"</a>";
		htmlCode1 +="</li>";

		htmlCode2 +="<div class='tab-pane fade' id='"+id+"Ul'>";
		htmlCode2 +="	<div id='"+id+"' class='row clearfix consultPrimerFila'>";
		htmlCode2 +="	</div>";
		htmlCode2 +="</div>";		
	}
	$("#OptionsPanelNav1").append(htmlCode1);
	$("#OptionsPanelNav2").append(htmlCode2);
}
//agrega a plantilla web el panel de opciones de consulta (no incluye las columnas para filtros)
//no recibe parametros
function addQueryOptionsPanelHtmlCode()
{
	var htmlWindowCode = "";
	htmlWindowCode +=	"<div class='modal fade bs-example-modal-sm' id='infoOpcionesConsulta' tabindex='-1' role='dialog' aria-labelledby='infoOpcionesConsultaTitulo'>";
	htmlWindowCode +=	"	<div class='modal-dialog modal-sm' role='document'>";
	htmlWindowCode +=	"		<div class='modal-content'>";
	htmlWindowCode +=	"			<div class='modal-header'>";
	htmlWindowCode +=	"				<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
	htmlWindowCode +=	"				<h4 class='modal-title' id='infoOpcionesConsultaTitulo'><i class='fa fa-info-circle fa-fw'></i> Información General</h4>";
	htmlWindowCode +=	"			</div>";
	htmlWindowCode +=	"			<div class='modal-body ventana-body'>";
	htmlWindowCode +=	"				Filtre la consulta según su interés, luego presione el botón consultar";
	htmlWindowCode +=	"			</div>";
	htmlWindowCode +=	"			<div class='modal-footer'>";
	htmlWindowCode +=	"				<button type='button' class='btn btn-primary' data-dismiss='modal'>Aceptar</button>";
	htmlWindowCode +=	"			</div>";
	htmlWindowCode +=	"		</div>";
	htmlWindowCode +=	"	</div>";
	htmlWindowCode +=	"</div>";

	$("#SeccionVentanasAdicionales").append(htmlWindowCode);

	var htmlCode = "";
	htmlCode += "<div class='imprimir col-xs-12 col-sm-12 col-md-12 col-lg-12 last'>";
	htmlCode +=	"<div class='container'>";
	htmlCode +=	"	<div class='row clearfix ' >";
	htmlCode +=	"		<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 last'>";
	htmlCode +=	"			<div>";
	htmlCode +=	"				<div id='QueryOptionsPanel' class='panel panel-info'>";
	htmlCode +=	"					<div class='panel-heading clearfix' >";
	htmlCode +=	"						<h5 class='panel-title pull-left' ><i class='fa fa-pencil-square-o fa-fw'></i> Opciones de Consulta</h5>";
	htmlCode +=	"						<div class='pull-right'>";
	htmlCode +=	"							<a href='#infoOpcionesConsulta' data-toggle='modal' data-target='#infoOpcionesConsulta'>";
	htmlCode +=	"								<i class='fa fa-info-circle fa-fw'></i> ";
	htmlCode +=	"								Información General";
	htmlCode +=	"							</a>";
	htmlCode +=	"						</div>";
	htmlCode +=	"					</div>";
	htmlCode +=	"					<div class='panel-body panel-body-padding-select'>";
	htmlCode +=	"						<ul id='OptionsPanelNav1' class='nav nav-tabs'>";
	htmlCode +=	"						</ul>";
	htmlCode +=	"						<div id='OptionsPanelNav2' class='tab-content'>";
	htmlCode +=	"						</div>";
	htmlCode +=	"					</div>";
	htmlCode +=	"				</div>";
	htmlCode +=	"			</div>";
	htmlCode +=	"		</div>";
	htmlCode +=	"	</div>";
	htmlCode +=	"</div>";
	htmlCode +=	"</div>";

	$("#SeccionConsultas").append(htmlCode);
}

//agrega a plantilla web el panel de pie de pagina
//no recibe parametros
function addFooterHtmlCode()
{
	var htmlCode = "";
	htmlCode += "<div class='imprimir pie-pagina-footer col-xs-12 col-sm-12 col-md-12 col-lg-12 last'>";
	htmlCode +=		"<div class='container'>";
	htmlCode +=		"	<footer>";
	htmlCode +=		"		<div class='row clearfix' >";
	htmlCode +=		"			<div class='col-xs-12 col-sm-4 col-md-4 col-lg-4 last'>";
	htmlCode +=		"				<div>";
	htmlCode +=		"						<h5>";
	htmlCode +=		"						<i class='fa fa-users fa-fw'></i> ";
	htmlCode +=		"						&iquest;Qui&eacute;nes Somos?";
	htmlCode +=		"					</h5>";
	htmlCode +=		"					<h6>";
	htmlCode +=		"						<p align='justify'>";
	htmlCode +=		"							El Sistema de Indicadores de Gesti&oacute;n Institucional (SIGI) es un proyecto desarrollado por la Oficina de Planificaci&oacute;n Institucional (OPI) del Instituto Tecnol&oacute;gico de Costa Rica. ";
	htmlCode +=		"							<br>";
	htmlCode +=		"							SIGI tiene como objetivo principal el desarrollo de indicadores institucionales para ser utilizados en el an&aacute;lisis de datos, comportamiento y toma de decisiones administrativas.";
	htmlCode +=		"						</p>";
	htmlCode +=		"					</h6>";
	htmlCode +=		"				</div>";
	htmlCode +=		"			</div>";
	htmlCode +=		"			<div class='col-xs-12 col-sm-4 col-md-4 col-lg-4 last'>";
	htmlCode +=		"				<div>";
	htmlCode +=		"					<h5>";
	htmlCode +=		"						<i class='fa fa-phone fa-fw'></i> ";
	htmlCode +=		"						Cont&aacute;ctenos";
	htmlCode +=		"					</h5>";
	htmlCode +=		"					<h6>";
	htmlCode +=		"						<p align='justify'>";
	htmlCode +=		"							Oficina de Planificaci&oacute;n Institucional: 2550 EXT 2711 &oacute; 2221";
	htmlCode +=		"							<br>";
	htmlCode +=		"							Correo: sigi@itcr.ac.cr ";
	htmlCode +=		"						</p>";
	htmlCode +=		"					</h6>";
	htmlCode +=		"				</div>";
	htmlCode +=		"			</div>";
	htmlCode +=		"			<div class='col-xs-12 col-sm-4 col-md-4 col-lg-4 last'>";
	htmlCode +=		"				<div>";
	htmlCode +=		"					<h5>";
	htmlCode +=		"						<i class='fa fa-chrome fa-fw'></i> ";
	htmlCode +=		"						Navegadores recomendados";
	htmlCode +=		"					</h5>";
	htmlCode +=		"					<h6>";
	htmlCode +=		"						<p align='justify'>";
	htmlCode +=		"							Google Chrome 41 – 42, Mozilla Firefox 37 – 38.";
	htmlCode +=		"						</p>";
	htmlCode +=		"					</h6>";
	htmlCode +=		"				</div>";
	htmlCode +=		"			</div>";
	htmlCode +=		"		</div>";
	htmlCode +=		"		<div class='row clearfix text-center'>";
	htmlCode +=		"			<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 last'>";
	htmlCode +=		"				<div>";
	htmlCode +=		"					<p>";
	htmlCode +=		"						Derechos Reservados &copy; Oficina de Planificaci&oacute;n Institucional, ITCR, "+ fecha.getFullYear();
	htmlCode +=		"					</p>";
	htmlCode +=		"				</div>";
	htmlCode +=		"			</div>";
	htmlCode +=		"		</div>";
	htmlCode +=		"	</footer>";
	htmlCode +=		"</div>";
	htmlCode +=	"</div>";

	$("#SeccionPiePagina").append(htmlCode);
}

//agrega a plantilla web una columna dentro del panel de opciones de consulta para situar un filtro
//recibe como paramentros (en este orden):
	//id (unico) del filtro
	//id del panel que lo contiene
	//tamano asignado para el titulo del fitro en dispositivos medianos
	//tamano asignado para el titulo del fitro en dispositivos largos
	//tamano asignado para el fitro en dispositivos medianos
	//tamano asignado para el fitro en dispositivos grandes
	//titulo del filtro
function addSelectHtmlCode(idSelect, idFatherContainer, selectLabelSizeMd, selectLabelSizeLg, selectSizeMd, selectSizeLg, title)
{
	var htmlCode = "";
	htmlCode += "<div class='col-xs-12 col-sm-12 col-md-"+selectLabelSizeMd+" col-lg-"+selectLabelSizeLg+" last consultSelectLabel'>";
	htmlCode += 	"<div>";
	htmlCode += 		"<p id='"+idSelect+"Text'>"+title+"</p>";
	htmlCode += 	"</div>";
	htmlCode += "</div>";
	htmlCode += "<div class='col-xs-12 col-sm-12 col-md-"+selectSizeMd+" col-lg-"+selectSizeLg+" last consultSelect'>";
	htmlCode += 	"<div id='"+idSelect+"'>";
	htmlCode += 	"</div>";
	htmlCode += "</div>";
	$("#"+idFatherContainer).append(htmlCode);
};


function addSelectNoData_ValueArrayHtmlCode(idSelect, idFatherContainer, title)
{
	var htmlCode = "";
	htmlCode += "<div class='col-xs-12 col-sm-12 col-md-2 col-lg-2 last consultSelectLabel'>";
	htmlCode += 	"<div>";
	htmlCode += 		"<p id='"+idSelect+"Text'>"+title+"</p>";
	htmlCode += 	"</div>";
	htmlCode += "</div>";
	htmlCode += "<div class='col-xs-12 col-sm-12 col-md-10 col-lg-10 last consultSelect'>";
	htmlCode += 	"<div id='"+idSelect+"'>";
	htmlCode += 	"</div>";
	htmlCode += "</div>";
	$("#"+idFatherContainer).append(htmlCode);
};

//agrega a plantilla web una columna dentro del panel de opciones de consulta para situar un boton
//recibe como paramentros (en este orden):
	//id (unico) del filtro
	//id del panel que lo contiene
	//tamano de margen izquierdo asignado para el boton en dispositivos medianos
	//tamano de margen izquierdo asignado para el boton en dispositivos largos
	//tamano asignado para el boton en dispositivos medianos
	//tamano asignado para el boton en dispositivos grandes
	//titulo del filtro
function addButtonHtmlCode(idButton, idFatherContainer, offsetSizeMd, offsetSizeLg, selectSizeMd, selectSizeLg)
{
	var htmlCode = "";
	htmlCode +=	 "<div class='col-xs-12 col-sm-12 col-md-offset-"+offsetSizeMd+" col-lg-offset-"+offsetSizeLg+" col-md-"+selectSizeMd+" col-lg-"+selectSizeLg+" last consultSelectButton'>";
	htmlCode +=	 	"<div id='"+idButton+"'>";
	htmlCode +=	 	"</div>";
	htmlCode +=	 "</div>";
	$("#"+idFatherContainer).append(htmlCode);
};

//agrega a plantilla web un panel
//recibe como paramentros (en este orden):
	//titulo del filtro
	//descripcion del contenido del panel
	//id (unico) del panel
	//id del la seccion que lo contiene
	//tamano asignado para el panel en dispositivos medianos
	//tamano asignado para el panel en dispositivos grandes
	//estilo de panel tipo bootstrap
function addPanelHtmlCode(title, generalInfo, id, idFatherContainer, selectSizeMd, selectSizeLg, panelStyle)
{
	var htmlWindowCode = ""; 
	htmlWindowCode +=		"<div class='modal fade bs-example-modal-sm' id='"+id+"Window' tabindex='-1' role='dialog' aria-labelledby='"+id+"WindowTitle'>";
	htmlWindowCode +=			"<div class='modal-dialog modal-sm' role='document'>";
	htmlWindowCode +=				"<div class='modal-content'>";
	htmlWindowCode +=					"<div class='modal-header'>";
	htmlWindowCode +=						"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
	htmlWindowCode +=						"<h4 class='modal-title' id='"+id+"WindowTitle'><i class='fa fa-info-circle fa-fw'></i> Información General</h4>";
	htmlWindowCode +=					"</div>";
	htmlWindowCode +=					"<div id='"+id+"WindowInfo' class='modal-body ventana-body'>";
	htmlWindowCode +=						generalInfo;
	htmlWindowCode +=					"</div>";
	htmlWindowCode +=					"<div class='modal-footer'>";
	htmlWindowCode +=						"<button type='button' class='btn btn-primary' data-dismiss='modal'>Aceptar</button>";
	htmlWindowCode +=					"</div>";
	htmlWindowCode +=				"</div>";
	htmlWindowCode +=			"</div>";
	htmlWindowCode +=		"</div>";
	$('#SeccionVentanasAdicionales').append(htmlWindowCode);

	var htmlPanelCode = "";
	htmlPanelCode +=	 "<div id='"+id+"Container' class='imprimir col-xs-12 col-sm-12 col-md-"+selectSizeMd+" col-lg-"+selectSizeLg+" last'>";
    htmlPanelCode +=	 	"<div class='container'>";
	htmlPanelCode +=	 		"<div  class='row clearfix ' >";
	htmlPanelCode +=	 			"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 last'>";
	htmlPanelCode +=	 				"<div>";
	htmlPanelCode +=	 					"<div class='panel panel-"+panelStyle+"'>";
	htmlPanelCode +=	 						"<div class='panel-heading clearfix' >";
	htmlPanelCode +=	 							"<div class='col-xs-10 col-sm-10 col-md-10 col-lg-10 last title-chart'>";
	htmlPanelCode +=	 								"<div>";
	htmlPanelCode +=										"<a data-toggle='collapse' href='#"+id+"Body'>";
	htmlPanelCode +=											"<h5 id='"+id+"Title' class='panel-title pull-left titulo-panel'><i class='fa fa-bar-chart fa-fw pull-left'></i> "+title+"</h5>";
	htmlPanelCode +=										"</a>";
	htmlPanelCode +=									"</div>";
	htmlPanelCode +=								"</div>";
	htmlPanelCode +=	 							"<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2 last title-chart'>";
	htmlPanelCode +=	 								"<div>";
	htmlPanelCode +=	 									"<div id='"+id+"Dropdown' class='dropdown pull-right'>";
	htmlPanelCode +=	 										"<a href='#'' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>";
	htmlPanelCode +=	 											"<i class='fa fa-wrench fa-fw'></i><span class='caret'></span>";
	htmlPanelCode +=	 										"</a>";
	htmlPanelCode +=	 										"<ul id='"+id+"Menu' class='dropdown-menu'>";
	htmlPanelCode +=	 											"<li><a href='#"+id+"Window' data-toggle='modal' data-target='#"+id+"Window'><i class='fa fa-info-circle fa-fw'></i> Información General</a></li>";
	//htmlPanelCode +=	 											"<li role='separator' class='divider'></li>";
	//htmlPanelCode +=	 											"<li class='dropdown-header'>Opciones de Descarga</li>";
    //htmlPanelCode +=	 										    "<li><a  href='#'><i class='fa fa-download fa-fw'></i> Descargar como imagen</a></li>";
	//htmlPanelCode +=	 											"<li><a  href='#'><i class='fa fa-download fa-fw'></i> Descargar datos</a></li>";
	//htmlPanelCode +=	 											"<li><a onclick='printDivSVG("+id+")' href='#'><i></i> Formato JPG (imagen)</a></li>";
	//htmlPanelCode +=	 											"<li><a onclick='printDivCANVAS("+id+")' href='#'><i class='fa fa-download fa-fw'></i> Descargar como CANVAS</a></li>";
	//htmlPanelCode +=	 											"<li><a onclick='printDivPDF("+id+")' href='#'><i class='fa fa-download fa-fw'></i> Descargar como PDF</a></li>";
	htmlPanelCode +=	 										"</ul>";
	htmlPanelCode +=	 									"</div>";
	htmlPanelCode +=									"</div>";
	htmlPanelCode +=								"</div>";
	htmlPanelCode +=	 						"</div>";
	htmlPanelCode +=	 						"<div id='"+id+"Body' class='panel-body panel-body-padding-chart panel-collapse collapse in'>";
	htmlPanelCode +=									"<div id='"+id+"Row' class='row clearfix'>";
	htmlPanelCode +=	 			                        "<div id='"+id+"Col' class='col-xs-12 col-sm-12 col-md-12 col-lg-12 last'>";
	htmlPanelCode +=	 				                        "<div id='"+id+"'>";
	htmlPanelCode +=	 				                        "</div>";
	htmlPanelCode +=	 			                        "</div>";
	htmlPanelCode +=									"</div>";
	htmlPanelCode +=	 						"</div>";
	htmlPanelCode +=	 					"</div>";
	htmlPanelCode +=	 				"</div>";
	htmlPanelCode +=	 			"</div>";
	htmlPanelCode +=	 		"</div>";
	htmlPanelCode +=	 	"</div>";
	htmlPanelCode +=	 "</div>";
	$("#"+idFatherContainer).append(htmlPanelCode);
};

//agrega a plantilla web un panel
//recibe como paramentros (en este orden):
	//titulo del filtro
	//descripcion del contenido del panel
	//id (unico) del panel
	//id del la seccion que lo contiene
	//tamano asignado para el panel en dispositivos medianos
	//tamano asignado para el panel en dispositivos grandes
	//estilo de panel tipo bootstrap
function addTablePanelHtmlCode(titleCol1, titleCol2, id, idFatherContainer, mdSize, lgSize)
{
	var htmlPanelCode = "";


	htmlPanelCode += "	<div id='"+id+"Container' class='imprimir col-xs-12 col-sm-12 col-md-"+mdSize+" col-lg-"+lgSize+" last'>";

	htmlPanelCode +=	 	"<div class='container'>";
	htmlPanelCode +=	 		"<div  class='row clearfix ' >";
	htmlPanelCode +=	 			"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 last'>";
	htmlPanelCode +=	 				"<div>";

	htmlPanelCode += "            <div class='totalPanel panel panel-default ' >";
	htmlPanelCode += "                <div class='panel-heading ' >";
	htmlPanelCode += "	                    <div class='row clearfix ' >";
	htmlPanelCode += " 	                       <div class='col-xs-6'>";
	htmlPanelCode += "	                            <div>";
	htmlPanelCode += "	                                <span class='topPanelTitle'>"+titleCol1+"</span> ";
	htmlPanelCode += "	                            </div>";
	htmlPanelCode += "	                        </div>";
	htmlPanelCode += "	                    	  <div class='col-xs-6 last'>";
	htmlPanelCode += "	                            <div style='text-align:right;' >";
	htmlPanelCode += " 	                               <span class='topPanelTitle mTitle'>"+titleCol2+"</span> ";
	htmlPanelCode += " 	                           </div>";
	htmlPanelCode += " 	                       </div>";
	htmlPanelCode += " 	                   </div>";
	htmlPanelCode += "                </div>";
	htmlPanelCode += "        	     <div id='"+id+"' class='totalSalesObj panel-body' >";
	htmlPanelCode += "        	     </div>";
	htmlPanelCode += "            </div>";


	htmlPanelCode +=	 				"</div>";
	htmlPanelCode +=	 			"</div>";
	htmlPanelCode +=	 		"</div>";
	
	htmlPanelCode += "  </div>";
	$("#"+idFatherContainer).append(htmlPanelCode);
}

function addPanelTitle(id, title)
{
    var htmlCode = "<i class='fa fa-bar-chart fa-fw pull-left'></i>";
    $( "#"+id ).html(htmlCode+title);
}


function addCol(id, idFatherContainer, xsSize, smSize, mdSize, lgSize)
{
    var htmlCode = "";
    htmlCode +="<div id='"+id+"Col' class=' col-xs-"+xsSize+" col-sm-"+smSize+" col-md-"+mdSize+" col-lg-"+lgSize+" last'>";
	htmlCode +=    "<div id='"+id+"'>";
	htmlCode +=    "</div>";
	htmlCode +="</div>";
	$("#"+idFatherContainer).append(htmlCode);
}

	/*
	htmlPanelCode +=										"<a data-toggle='collapse' href='#"+id+"Body'>";
	htmlPanelCode +=										"</a>";
	htmlPanelCode +=	 						"<div id='"+id+"Body' class='panel-body panel-body-padding-chart panel-collapse collapse in'>";
	*/
function addInfoPanelHtmlCode(title, id, idFatherContainer, selectSizeMd, selectSizeLg)
{
	var htmlPanelCode = "";
	htmlPanelCode +=	 "<div id='"+id+"Container' class='imprimir col-xs-12 col-sm-12 col-md-"+selectSizeMd+" col-lg-"+selectSizeLg+" last'>";
    htmlPanelCode +=	 	"<div class='container'>";
	htmlPanelCode +=	 		"<div  class='row clearfix ' >";
	htmlPanelCode +=	 			"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 last'>";
	htmlPanelCode +=	 				"<div>";
	htmlPanelCode +=	 					"<div class='panel panel-default'>";
	htmlPanelCode +=	 						"<div class='panel-heading clearfix' >";
	htmlPanelCode +=	 							"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 last text-center'>";
	htmlPanelCode +=	 								"<div>";
	htmlPanelCode +=										"<a data-toggle='collapse' href='#"+id+"Body'>";
	htmlPanelCode +=	 										"<h5 id='"+id+"Title' class='panel-title text-center titulo-panel'> "+title+"</h5>";
	htmlPanelCode +=										"</a>";
	htmlPanelCode +=									"</div>";
	htmlPanelCode +=								"</div>";
	htmlPanelCode +=	 						"</div>";
	htmlPanelCode +=	 						"<div id='"+id+"Body' class='panel-body panel-body-padding-chart panel-collapse collapse in'>";
	htmlPanelCode +=									"<div id='"+id+"Row' class='row clearfix'>";
	htmlPanelCode +=	 			                        "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 last'>";
	htmlPanelCode +=	 				                        "<div id='"+id+"'>";
	htmlPanelCode +=	 				                        "</div>";
	htmlPanelCode +=	 			                        "</div>";
	htmlPanelCode +=									"</div>";
	htmlPanelCode +=	 						"</div>";
	htmlPanelCode +=	 					"</div>";
	htmlPanelCode +=	 				"</div>";
	htmlPanelCode +=	 			"</div>";
	htmlPanelCode +=	 		"</div>";
	htmlPanelCode +=	 	"</div>";
	htmlPanelCode +=	 "</div>";
	$("#"+idFatherContainer).append(htmlPanelCode);
}

function addInfoTable(title, id, idFatherContainer, xsSize, smSize, mdSize, lgSize)
{
	var htmlPanelCode = "";
	htmlPanelCode +=	 "<div id='"+id+"Container' class='imprimir col-xs-"+xsSize+" col-sm-"+smSize+" col-md-"+mdSize+" col-lg-"+lgSize+" last'>";
    htmlPanelCode +=	 	"<div class='container'>";
	htmlPanelCode +=	 		"<div  class='row clearfix ' >";
	htmlPanelCode +=	 			"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 last'>";
	htmlPanelCode +=	 				"<div>";
	htmlPanelCode +=						"<div class='well well-lg' style='padding: 10px;'>";
	//htmlPanelCode +=						"	<font size='2'>";
	htmlPanelCode +=						"		<h5 id='"+id+"Title' style='margin-top: 0px; margin-bottom: 0px; text-align:center;' >"+title+"</h5>";
	//htmlPanelCode +=						"	</font>" ;
	htmlPanelCode +=						"  	<br>" ;
	//htmlPanelCode +=						"  	<font size='5'>";
	htmlPanelCode +=						"  		<h3 id='"+id+"' style='margin-top: 0px; margin-bottom: 0px; text-align: center;'></h3>";
	//htmlPanelCode +=						"  	</font>"    ;
	htmlPanelCode +=						"</div>";	
	htmlPanelCode +=	 				"</div>";
	htmlPanelCode +=	 			"</div>";
	htmlPanelCode +=	 		"</div>";
	htmlPanelCode +=	 	"</div>";
	htmlPanelCode +=	 "</div>";
	$("#"+idFatherContainer).append(htmlPanelCode);
}