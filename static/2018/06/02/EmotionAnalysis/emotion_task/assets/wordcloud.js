var width = 570,
	  height = 790;
	  length = 20;
	
var	emotions = ['Anger','Anticipation','Disgust','Fear','Joy','Sadness','Surprise','Trust'];

var leaderScale = d3.scale.linear().range([0,1.38]);

var fill = d3.scale.linear().domain([1,length])
      .interpolate(d3.interpolateHcl)
      .range([d3.rgb("#ede059"), d3.rgb("#638270")]);

var selectUI = d3.select("#droplist")
    .append("select")
    .attr("id","emotion")
    .attr("onchange","loadData()")
    .selectAll("option")
        .data(emotions).enter()
        .append("option")
        .text(function(d) {return d;})
	    .attr("value", function(d) {return d;});


var drawout = d3.select("#word-cloud").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate("+(width/2)+","+(height/2)+")")

var loadData = function(){

  var metric = document.getElementById('emotion').selectedOptions[0].text;
  //console.log(document.getElementById('emotion').selectedOptions[0])
	d3.csv("totalNouns.csv", function(d){
	return{
		Emotol: d.Emotion_total,
		Nountol: d.Noun_total,
		Freqtol: +d.Frequency_total
	};
  }, 

  function(data) {
	  var leaders = data
  		.filter(function(a){ return a.Freqtol>5 && a.Emotol === metric})
  		.map(function(a) {return {text: a.Nountol, size: a.Freqtol};})
  		.sort(function(a,b) {return d3.descending(a.Freqtol,b.Freqtol);})
  		.slice(0,250);
  
  	var layout = d3.layout.cloud().size([width,height])
        .words(leaders)
        .padding(0)
        .rotate(function() { return ~~(Math.random() * 2) * 90; })
        .font("Impact")
        .fontSize(function(d) { return leaderScale(d.size);})
        .on("end", draw)
        .start();
  
})
};

function draw(words) {

    var drawoutput = drawout.selectAll("text")
    .data(words)
    drawoutput.enter().append("text")

    drawoutput.exit().remove();

    drawoutput.style("font-size", function(d) { return d.size + "px"; })
    .style("font-family", "Impact")
    .style("fill", function(d, i) { return fill(i); })
    .attr("text-anchor", "middle")
    .attr("transform", function(d) {
      return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    })
    .text(function(d) { return d.text; });

}

loadData()










// var yrslct = new Date().getFullYear();
// 	function range(a,b,c,d){d=[];c=b-a+1;while(c--)d[c]=a++;return d};
// 	var dpyrs = range(1869,yrslct);

// 	var selectUI = d3.select("#droplist")
//              .append("select")
//              .attr("id","emotion")
//              .selectAll("option")
//              .data()
//              .enter()
//              .append("option")
//              .attr("value", function(d){return d;})
//              .text(function(d){return d;});

//     var checkOption = function (e) {
//         if(e === yrslct){
//             return d3.select(this).attr("selected", "selected");
//         }
//     };
    
//     selectUI.selectAll("option").each(checkOption);
    
//     var svg = d3.select("body")
// 		.append("svg")
// 			.style("background", d3.rgb(225,225,225)) // background of chart
// 			.attr("width", 500)
// 			.attr("height", 300)
// 		.append("g")
// 			.attr("transform", "translate(" + 5 + "," + 5 + ")");
    
//     var legend = svg.append("g")
// 	  .attr("class", "legend")
// 	  .attr("x", -5)
// 	  .attr("y", 5)
// 	  .attr("height", 250)
// 	  .attr("width", 450);

//     // tried to place the dopdown list on the svg-area
//     legend.append("foreignObject")
// 	  .attr("x", 100)
// 	  .attr("y", 200)
// 	  .attr("width", 200)
//       .attr("height",55)
//      .append("xhtml:body")
//       .style("font", "14px")
//       .style("z-index", 9)
//       .html("<p><select id='yrselect'><option value="+yrslct+">"+yrslct+"</option><select/></p>");
//       //.html("<div id='droplist' />");  