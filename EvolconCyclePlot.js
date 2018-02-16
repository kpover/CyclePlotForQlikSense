define(["jquery","qlik","./properties","./EvolconCyclePlotTemplate.ng","./lib/d3v3.min","css!./css/EvolconCyclePlot.css"],function(t,e,a,s,n){"use strict";var i,o,l=function(t){var e={};return t.filter(function(t){return!e[t.Num]&&(e[t.Num]=!0,!0)})};return{initialProperties:{qHyperCubeDef:{qDimensions:[],qMeasures:[],qInitialDataFetch:[{qLeft:0,qTop:0,qWidth:3,qHeight:3333}],qNullSuppression:!0,qSuppressMissing:!0,qSuppressZero:!1,selectionMode:"CONFIRM"}},definition:a,template:s,snapshot:{canTakeSnapshot:!0},paint:function(t,a){var s=a.qHyperCube.qDataPages[0].qMatrix,r=a.qHyperCube.qMeasureInfo[0].qFallbackTitle,p=[a.qHyperCube.qDimensionInfo[1].qFallbackTitle,a.qHyperCube.qDimensionInfo[0].qFallbackTitle],d=function(t){var e,a,s,n,i,o=[],r=[],p=[],d={},u={};e=t.map(function(t){return t.Dim0}),(o=l(e)).sort(function(t,e){return t.Num-e.Num}),a=t.map(function(t){return t.Dim1}),(r=l(a)).sort(function(t,e){return t.Num-e.Num});for(var c=0;c<o.length;c++){d={mainDimension:o[c].Text,mainDimensionElementID:o[c].ElementID,dataMainDimension:[]},p.push(d);for(var m=0;m<r.length;m++)u={secondaryDimension:r[m].Text,secondaryDimensionElementID:r[m].ElementID,measure:0},p[c].dataMainDimension.push(u)}for(c=0;c<t.length;c++)s=t[c].Metric0,i=p[n=p.map(function(t){return t.mainDimension}).indexOf(t[c].Dim0.Text)].dataMainDimension.map(function(t){return t.secondaryDimension}).indexOf(t[c].Dim1.Text),p[n].dataMainDimension[i].measure=s;return p}(s.map(function(t){var e={};return e.Dim0={Text:t[0].qText,Num:t[0].qNum,ElementID:t[0].qElemNumber},e.Dim1={Text:t[1].qText,Num:t[1].qNum,ElementID:t[1].qElemNumber},e.Metric0=t[2].qNum,e})),u=t[0],c="container_"+a.qInfo.qId;t.find(".chart-container").attr("id",c),t.find("svg").empty();var m=t.height(),y=t.width(),x=u.querySelector("#"+c),A=u.querySelector(".tooltip");!function(t){t.qlik.currApp();var e=t._context,a=t.layout.qHyperCube.qMeasureInfo[0].qMax,s=t.data.length*t.data[0].dataMainDimension.length;t.data.forEach(function(t){t.mean=n.mean(t.dataMainDimension,function(t){return t.measure})});var l={top:0,right:0,bottom:0,left:0};if(t.layout.props.autoShowLegendSwitch=void 0!==t.layout.props.autoShowLegendSwitch&&t.layout.props.autoShowLegendSwitch,t.layout.props.legendPositionOptions=t.layout.props.legendPositionOptions||"auto",t.layout.props.yAxisLabelsAndTitleOptions=t.layout.props.yAxisLabelsAndTitleOptions||"labelsAndTitle",t.layout.props.yAxisLabelsAndTitlePosition=t.layout.props.yAxisLabelsAndTitlePosition||"left",t.layout.props.xAxisLabelsAndTitleOptions=t.layout.props.xAxisLabelsAndTitleOptions||"labelsAndTitle",t.layout.props.xAxisLabelsAndTitlePosition=t.layout.props.xAxisLabelsAndTitlePosition||"bottom",t.layout.props.yAxisScale=t.layout.props.yAxisScale||"medium",t.layout.props.autoGridLinesSwitch=void 0===t.layout.props.autoGridLinesSwitch||t.layout.props.autoGridLinesSwitch,t.layout.props.autoGridLinesOptions=t.layout.props.autoGridLinesOptions||"medium",t.layout.props.autoShowLegendSwitch)switch(t.layout.props.legendPositionOptions){case"auto":case"top":l.top+=30;break;case"right":l.right+=150;break;case"bottom":l.bottom+=25;break;case"left":l.left+=150}switch(t.layout.props.yAxisLabelsAndTitleOptions){case"labelsAndTitle":l[t.layout.props.yAxisLabelsAndTitlePosition]+=95;break;case"labelsOnly":l[t.layout.props.yAxisLabelsAndTitlePosition]+=70;break;case"titleOnly":l[t.layout.props.yAxisLabelsAndTitlePosition]+=25;break;case"none":l[t.layout.props.yAxisLabelsAndTitlePosition]+=0}switch(t.layout.props.xAxisLabelsAndTitleOptions){case"labelsAndTitle":l[t.layout.props.xAxisLabelsAndTitlePosition]+=80;break;case"labelsOnly":case"titleOnly":l[t.layout.props.xAxisLabelsAndTitlePosition]+=60;break;case"none":l[t.layout.props.xAxisLabelsAndTitlePosition]+=40}var r=20+l.top,p=20+l.right,d=20+l.bottom,u=20+l.left,c=t.width-p-u,m=t.height-r-d,y=n.scale.ordinal().rangeBands([0,c],.3,.1).domain(t.data.map(function(t){return t.mainDimension})),x=t.data.map(function(t){return t.mainDimension});x.pop();var A=n.scale.ordinal().rangeBands([0,c-1.44*y.rangeBand()],.3,.1).domain(x),g=n.scale.ordinal().rangeBands([0,y.rangeBand()]).domain(t.data[0].dataMainDimension.map(function(t){return t.secondaryDimension})),f=n.scale.linear().domain([0,1.1*a]).range([m,0]),h=n.svg.axis().scale(y).orient(t.layout.props.xAxisLabelsAndTitlePosition),b="titleOnly"===t.layout.props.yAxisLabelsAndTitleOptions||"none"===t.layout.props.yAxisLabelsAndTitleOptions?0:"medium"===t.layout.props.yAxisScale?5:"wide"===t.layout.props.yAxisScale?2:"narrow"===t.layout.props.yAxisScale?10:0,L=n.svg.axis().scale(f).orient(t.layout.props.yAxisLabelsAndTitlePosition).ticks(b),T=t.layout.props.autoGridLinesSwitch||"medium"===t.layout.props.autoGridLinesOptions?5:"wide"===t.layout.props.autoGridLinesOptions?2:"narrow"===t.layout.props.autoGridLinesOptions?10:0,v=n.svg.axis().scale(f).orient(t.layout.props.yAxisLabelsAndTitlePosition).tickFormat("").ticks(T).tickSize(-c,0,0),D=(A=n.svg.axis().scale(A).orient(t.layout.props.xAxisLabelsAndTitlePosition).tickFormat("").tickSize(50,0,0),n.svg.line().x(function(t,e){return g(t.secondaryDimension)}).y(function(t,e){return f(t.measure)})),O=n.svg.axis().scale(g).orient(t.layout.props.xAxisLabelsAndTitlePosition).tickSize(6,0),q=t.svg.append("g").classed("chart",!0).attr("transform","translate( "+u+" ,"+r+")");if(t.layout.props.autoShowLegendSwitch){var P=c,w=25,S=0,k=-l.top-5-10,N="top"===t.layout.props.legendPositionOptions||"bottom"===t.layout.props.legendPositionOptions||"auto"===t.layout.props.legendPositionOptions||t.layout.props.showLegendTitle?20:0,M=t.layout.props.showLegendTitle?15*t.yAxisLabel.length:0,C="Actual",I=[10+M,N-7],B=[25+M,N],E=[30+M+10*C.length,N-7],F=[45+M+10*C.length,N];switch(t.layout.props.legendPositionOptions){case"auto":case"top":break;case"right":P=150,w=75,S=c+(l.right-P)+5,k=0,I=[5,N+18-6],B=[20,N+18],E=[5,N+36-6],F=[20,N+36];break;case"bottom":P=c,w=25,S=0,k=m+l.bottom+5-w+10;break;case"left":P=150,w=75,S=0-l.left-5,k=0,I=[5,N+18-6],B=[20,N+18],E=[5,N+36-6],F=[20,N+36]}var G=q.append("g").classed("legend",!0).attr("transform","translate( "+S+" ,"+k+")");G.append("rect").classed("legendBox",!0).attr("width",P).attr("height",w).attr("transform","translate(0,0)"),t.layout.props.showLegendTitle&&G.append("text").classed("legendTitle",!0).attr("transform","translate(5,"+N+")").style("text-anchor","start").text(("right"===t.layout.props.legendPositionOptions||"left"===t.layout.props.legendPositionOptions)&&t.yAxisLabel.length>=10?t.yAxisLabel.substring(0,8)+"...":t.yAxisLabel),G.append("rect").classed("legendLine",!0).attr("transform","translate("+I[0]+","+I[1]+")").attr("width",10).attr("height","2").attr("stroke",t.layout.props.measureColor).attr("fill",t.layout.props.measureColor),G.append("text").classed("legendLabel",!0).attr("transform","translate("+B[0]+","+B[1]+")").style("text-anchor","start").text(C),G.append("rect").classed("legendLine",!0).attr("transform","translate("+E[0]+","+E[1]+")").attr("width",10).attr("height","2").attr("stroke",t.layout.props.measureAvgColor).attr("fill",t.layout.props.measureAvgColor),G.append("text").classed("legendLabel",!0).attr("transform","translate("+F[0]+","+F[1]+")").style("text-anchor","start").text("Mean")}var _="top"===t.layout.props.xAxisLabelsAndTitlePosition?0:m,H="top"===t.layout.props.xAxisLabelsAndTitlePosition?-40:m+40,z=q.append("g").attr("transform","translate( 0 ,"+H+")").classed("axis",!0).attr("fill","none").classed("primaryXAxis",!0).call(h);"titleOnly"!==t.layout.props.xAxisLabelsAndTitleOptions&&"none"!==t.layout.props.xAxisLabelsAndTitleOptions||z.selectAll("text").remove();A=q.append("g").attr("transform","translate( "+c/t.data.length/2+" ,"+_+")").classed("xGroupingLines",!0).call(A);var X="left"===t.layout.props.yAxisLabelsAndTitlePosition?0:c,R=(v=q.append("g").attr("transform","translate( "+X+" ,0)").classed("yGridLines",!0).call(v),q.append("g").attr("transform","translate( "+X+" ,0)").classed("axis",!0).attr("fill","none").classed("yAxis",!0).call(L),q.selectAll(".nestedCharts").data(t.data).enter().append("g").classed("nestedCharts",!0).attr("id",function(t,e){return"nested_"+t.mainDimension}).attr("transform",function(t,e){return"translate("+y(t.mainDimension)+",0)"})),j=(q.selectAll(".overlayCharts").data(t.data).enter().append("g").classed("overlayCharts",!0).attr("id",function(t,e){return"overlay_"+t.mainDimension}).attr("transform",function(t,e){return"translate("+y(t.mainDimension)+",0)"}).selectAll("rect").data(function(t){return t.dataMainDimension}).enter().append("rect").classed("overlayRects",!0).attr("opacity",0).attr("x",function(t,e){return g(t.secondaryDimension)}).attr("y",0).attr("height",m).attr("width",g.rangeBand()).on("mousemove",function(e,a){t.tooltip.style.top=f(e.measure)+r-110-15+"px",t.tooltip.style.left=y(n.select(this.parentNode).datum().mainDimension)+g(e.secondaryDimension)+u+g.rangeBand()/2-105+"px",t.tooltip.innerHTML="<p><strong>"+t.xAxisLabel[0]+": "+n.select(this.parentNode).datum().mainDimension+"</strong></p><p><strong>"+t.xAxisLabel[1]+": "+e.secondaryDimension+"</strong></p><p>"+t.yAxisLabel+": "+n.format(",.0f")(e.measure)+"</p><p>Mean: "+n.format(",.0f")(n.select(this.parentNode).datum().mean)+"</p>"}).on("mouseenter",function(e,a){i=setTimeout(function(){t.tooltip.classList.remove("hidden")},500),o=setTimeout(function(){t.tooltip.classList.add("hidden")},1e4)}).on("mouseleave",function(e,a){clearTimeout(i),clearTimeout(o),t.tooltip.classList.add("hidden")}).on("click",function(a,s){if("NO"!==t.layout.selectionMode){var i=n.select(this.parentNode).datum().mainDimension,o=n.select(this.parentNode).datum().mainDimensionElementID;t.svg.selectAll("line").classed("meanNormal",!1),t.svg.selectAll("path").classed("lineNormal",!1),t.svg.selectAll("line").classed("meanFaded",!0),t.svg.selectAll("path").classed("lineFaded",!0),t.svg.selectAll("#nested_"+i).selectAll("line").classed("meanFaded",!1),t.svg.selectAll("#nested_"+i).selectAll("line").classed("meanSelected",!0),t.svg.selectAll("#nested_"+i).selectAll("path").classed("lineFaded",!1),t.svg.selectAll("#nested_"+i).selectAll("path").classed("lineSelected",!0),e.selectValues(0,[o],!0)}}),R.append("line").classed("meanNormal",!0).attr("stroke",t.layout.props.measureAvgColor).attr("x1",g.rangeBand()/2).attr("y1",function(t){return f(t.mean)}).attr("x2",y.rangeBand()-g.rangeBand()/2).attr("y2",function(t){return f(t.mean)}),R.append("path").datum(function(t){return t.dataMainDimension}).classed("lineNormal",!0).attr("fill","none").attr("stroke",t.layout.props.measureColor).attr("d",D).attr("transform",function(t,e){return"translate("+g.rangeBand()/2+",0)"}),R.append("g").attr("transform","translate(0,"+_+")").classed("axis",!0).classed("secondaryXAxis",!0).call(O)),V="bottom"===t.layout.props.xAxisLabelsAndTitlePosition?"end":"start";if("titleOnly"===t.layout.props.xAxisLabelsAndTitleOptions||"none"===t.layout.props.xAxisLabelsAndTitleOptions)j.selectAll("text").remove();else{var W=j.selectAll("text").style("text-anchor",V).attr("transform",function(t,e){return"translate(0,0) rotate(-45)"});if(s>60){W.style("display","none");for(var Z=0;Z<W.length;Z++)n.select(W[Z][0]).style("display","inline"),n.select(W[Z][W[Z].length-1]).style("display","inline")}}if("labelsAndTitle"===t.layout.props.yAxisLabelsAndTitleOptions||"titleOnly"===t.layout.props.yAxisLabelsAndTitleOptions){var J="titleOnly"===t.layout.props.yAxisLabelsAndTitleOptions?20:90,K="right"===t.layout.props.yAxisLabelsAndTitlePosition?1:-1,Q="right"===t.layout.props.yAxisLabelsAndTitlePosition?90:-90;t.svg.select(".yAxis").append("text").attr("x",0).attr("y",0).style("text-anchor","middle").attr("transform","translate("+J*K+","+m/2+") rotate("+Q+")").text(t.yAxisLabel)}if("labelsAndTitle"===t.layout.props.xAxisLabelsAndTitleOptions||"titleOnly"===t.layout.props.xAxisLabelsAndTitleOptions){var U="titleOnly"===t.layout.props.xAxisLabelsAndTitleOptions?70:90,Y="bottom"===t.layout.props.xAxisLabelsAndTitlePosition?1:-1;t.svg.select(".secondaryXAxis").append("text").attr("x",0).attr("y",0).style("text-anchor","middle").attr("transform","translate("+(c/2-.1*y.rangeBand())+","+U*Y+")").text(t.xAxisLabel[0]+", "+t.xAxisLabel[1])}}({data:d,yAxisLabel:r,xAxisLabel:p,width:y,height:m,container:x,svg:n.select(u.querySelector("svg")).html("").attr("width",y).attr("height",m),tooltip:A,layout:a,qlik:e,_context:this})}}});