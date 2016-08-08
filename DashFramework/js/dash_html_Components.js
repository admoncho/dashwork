function addSelectDefault(selectName, title, mainParameter, queryName, listenerArray, priority_, idFatherContainer, selectLabelSizeMd, selectLabelSizeLg, selectSizeMd, selectSizeLg)
{
    var component1;
    component1 = newSelect(selectName, 'select'+mainParameter, listenerArray, queryName, priority_);
    component1.addPanel(title, idFatherContainer, selectLabelSizeMd, selectLabelSizeLg, selectSizeMd, selectSizeLg);
    return component1;
}

function addbuttonDefault(buttontName, buttonLabel, parameterEstructureArray, idFatherContainer, offsetSizeMd, offsetSizeLg, selectSizeMd, selectSizeLg)
{
    var component1;
	component1 = newButton(buttontName, buttonLabel, parameterEstructureArray);
    component1.addPanel(idFatherContainer, offsetSizeMd, offsetSizeLg, selectSizeMd, selectSizeLg);
    return component1;
}

function addFunnelDefault(chartName, chartHeight, queryName, parameterEstructureArray, titlePanel, generalInfo, idPanelFatherContainer, selectSizeMd, selectSizeLg, panelStyle, ArrayListToPutInto)
{
    var chart1;
	chart1 = newChart(chartName, "funnel", queryName, parameterEstructureArray, [charts_Historical]);
    chart1.addPanel(titlePanel, generalInfo, idPanelFatherContainer, chartHeight, selectSizeMd, selectSizeLg);
    return chart1;
}

function addGaugeDefault(chartName, chartHeight, queryName, parameterEstructureArray, titlePanel, generalInfo, idPanelFatherContainer, selectSizeMd, selectSizeLg, panelStyle, ArrayListToPutInto)
{
	var chart1;
	chart1 = newChart(chartName, "gauge", queryName, parameterEstructureArray, ArrayListToPutInto);
    chart1.addPanel(titlePanel, generalInfo, idPanelFatherContainer, chartHeight, selectSizeMd, selectSizeLg);
    return chart1;
}

function addtableValueAndTrendArrow(chartName, queryName, parameterEstructureArray, titleCol1, titleCol2, idPanelFatherContainer, ArrayListToPutInto)
{
	var chart1;
    chart1 = newChart(chartName, "table", queryName, parameterEstructureArray, ArrayListToPutInto);
    chart1.setStyle("value+percentage");
    chart1.addPanel(titleCol1, titleCol2, idPanelFatherContainer, 4, 4);
    return chart1;
}

function addTableDefault(chartName, chartHeight, queryName, parameterEstructureArray, titlePanel, generalInfo, idPanelFatherContainer, selectSizeMd, selectSizeLg, panelStyle, ArrayListToPutInto)
{
	var chart1;
	chart1 = newChart(chartName, "table", queryName, parameterEstructureArray, ArrayListToPutInto);
    chart1.addPanel(titlePanel, generalInfo, idPanelFatherContainer, chartHeight, selectSizeMd, selectSizeLg);
    return chart1;
}

function addBarHorizontalStaked(chartName, chartHeight, baseTitle, leftTitle, tooltipCol, tooltipRow, queryName, parameterEstructureArray, titlePanel, generalInfo, idPanelFatherContainer, selectSizeMd, selectSizeLg, panelStyle, ArrayListToPutInto)
{
	var chart1;
	chart1 = newChart(chartName, "bar", queryName, parameterEstructureArray, ArrayListToPutInto);
	chart1.setStyle("stacked");
	chart1.addAxisTitles(baseTitle, leftTitle);
    chart1.addTooltipLabels(tooltipRow, tooltipCol, "valor");
    chart1.addPanel(titlePanel, generalInfo, idPanelFatherContainer, chartHeight, selectSizeMd, selectSizeLg);
    return chart1;
}

function addLineDefault(chartName, chartHeight, baseTitle, leftTitle, tooltipCol, tooltipRow, queryName, parameterEstructureArray, titlePanel, generalInfo, idPanelFatherContainer, selectSizeMd, selectSizeLg, panelStyle, ArrayListToPutInto)
{
	var chart1;
	chart1 = newChart(chartName, "line", queryName, parameterEstructureArray, ArrayListToPutInto);
	chart1.addAxisTitles(baseTitle, leftTitle);
    chart1.addTooltipLabels(tooltipRow, tooltipCol, "valor");
    chart1.addPanel(titlePanel, generalInfo, idPanelFatherContainer, chartHeight, selectSizeMd, selectSizeLg);
    return chart1;
}

function addPieDefault(chartName, chartHeight, tooltipCol, tooltipRow, queryName, parameterEstructureArray, titlePanel, generalInfo, idPanelFatherContainer, selectSizeMd, selectSizeLg, panelStyle, ArrayListToPutInto)
{
	var chart1;
	chart1 = newChart(chartName, "pie", queryName, parameterEstructureArray, ArrayListToPutInto);
    chart1.addTooltipLabels(tooltipRow, tooltipCol, "valor");
    chart1.addPanel(titlePanel, generalInfo, idPanelFatherContainer, chartHeight, selectSizeMd, selectSizeLg);
    return chart1;
}

function addPieRichDonut(chartName, chartHeight, tooltipCol, tooltipRow, queryName, parameterEstructureArray, titlePanel, generalInfo, idPanelFatherContainer, selectSizeMd, selectSizeLg, panelStyle, ArrayListToPutInto)
{
	var chart1;
	chart1 = newChart(chartName, "pie", queryName, parameterEstructureArray, ArrayListToPutInto);
	chart1.setStyle("donut");
    chart1.addTooltipLabels(tooltipRow, tooltipCol, "valor");
    chart1.addPanel(titlePanel, generalInfo, idPanelFatherContainer, chartHeight, selectSizeMd, selectSizeLg);
    return chart1;
}