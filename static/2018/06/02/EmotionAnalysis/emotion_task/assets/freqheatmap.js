var margin = {top:130, right:60, bottom: 80, left:160},
	width = 780 - margin.left - margin.right,
	height = 980 -margin.top - margin.bottom,
	gridSize = Math.floor(height/24), //legend at the bottom
	legendWidth = gridSize/9*6.5,
	emotions = ['Anger','Anticipation','Disgust','Fear','Joy','Sadness','Surprise','Trust'],
	nouns = ['aid','bg','blood','day','doctor','dont','english','feel','im','insulin','just','level','lot','month','number','sugar','test','time','type','want','way','week','work','year'],
	colors = ["#ede059","#bcc98e",'#56a1c5','#6897bb',"#638270",'#4f7f43']

var rrange = d3.scale.linear()
				.domain([25,165])
				.range([0,legendWidth/1.5])

var heatdiv = d3.select("#heatmap").append("div")	
    .attr("class", "tooltip")
    .style("opacity", 0);

var dataset = d3.csv("highFreqNouns.csv", function(d){
	return{
		Freq: +d.Frequency,
		Noun: d.Noun,
		Emotion: d.Emotion
	};
 }, function(error, data){

 	var colorScale = d3.scale.quantile()
			.domain([0, d3.max(data, function (d) { return d.Freq; })])
			.range(colors);

	var svg = d3.select('#heatmap').append('svg')
				.attr('width',width + margin.left + margin.right)
				.attr('height',height + margin.top + margin.bottom)
				.append('g')
				.attr('transform', "translate(" + margin.left +','+ margin.top +')');
	

	var nounLabels = svg.selectAll('.nounLabel')
						.data(nouns)
						.enter().append('text')
						.text(function(d){ return d; })		
						.attr('x', -130)//大于0则向右移
						.attr('y', function(d,i){ return i*gridSize;})
						.style('text-anchor','start')
						.attr('transform','translate(-5,-9)') //负值向上
		


	var emotionLabels = svg.selectAll('.emotionLabel')
						.data(emotions)
						.enter().append('text')
						.text(function(d) {return d; })
						.attr('x',function(d,i){ return i* gridSize;})
						.attr('y',0)
						.style('writing-mode','tb')
						.attr('textLength','66')
						.attr("lengthAdjust", "spacing")
						.attr('text-anchor','end')
						.attr('transform','translate(-14,-40)'); //positon

	var Textheat = svg.selectAll('.maptext')
					.data(data)
					.enter().append('text')
					.text(function(d) { return d.Freq})
					.attr('id','maptext')
					.attr('x',function(d) {return (emotions.indexOf(d.Emotion)-0.4)*gridSize;})
					.attr('y',function(d) {return (nouns.indexOf(d.Noun)-0.4)*gridSize;})
					.style('text-anchor','middle')
					.style('font-size','110%')
					.style('fill', function(d){return colorScale(d.Freq);})
					.style('opacity',0);

	var Circleheat = svg.selectAll('.mapcircle')
					.data(data)
					.enter().append('circle')
					.attr('id','mapcircle')
					.attr('cy', function(d){ return (nouns.indexOf(d.Noun)-0.55)*gridSize ;})
					.attr('cx', function(d){ return (emotions.indexOf(d.Emotion)-0.45)*gridSize;})
					.attr('r',function(d){return 1.7+rrange(d.Freq)})
					.attr("stroke", "#ede059")
					.attr("stroke-width","1.5px")
					.attr("width", gridSize)
					.attr("height", gridSize)
					.style("fill", colors[0]);

	Circleheat.transition()
			.duration(1000)
			.style('fill',function(d){
				return colorScale(d.Freq);
			});		

	var legend = svg.selectAll('.legend')
				.data([25].concat(colorScale.quantiles()),function(d){return d;})
				.enter().append('g')
				.attr('class','legend');

	legend.append('rect')
		.attr('x',function(d,i){return legendWidth*1.75*i-20;})
		.attr("y",height-25)
		.attr('width',legendWidth*1.75)
		.attr('height',gridSize / 2)
		.style('fill',function(d,i){return colors[i];});

	legend.append('text')
		.attr('class','mono')
		.text(function(d) {return "≥ " + Math.round(d);})
		.attr('x',function(d,i) {return 1.75*legendWidth*i-20})
		.attr('y',height+gridSize-25);	


// click
	nounLabels.on('mouseover', function(d){
		Circleheat.filter(function(m){ return m.Noun === d;})
		.transition()
		.ease('circle-in')
		.duration('100').style('opacity',"0");
		Textheat.filter(function(n){ return n.Noun === d;})
		.transition()
		.ease('out')
		.delay('100')
		.duration('200').style('opacity',"1");

		d3.select(this).style('fill',"#e64040")

	});

	nounLabels.on('mouseout',function(d){
		Circleheat.filter(function(m){ return m.Noun === d;})
		.transition()
		.ease('cubic-in')
		.duration('100').style('opacity',"1")
		Textheat.filter(function(n){ return n.Noun === d})
		.transition()
		.ease('out')
		.delay('100')
		.duration('200').style('opacity',"0");

		d3.select(this).style('fill',"black");
	});

	emotionLabels.on('mouseover', function(d){
		Circleheat.filter(function(m){ return m.Emotion === d;})
		.transition()
		.ease('circle-in')
		.duration('100').style('opacity',"0");
		Textheat.filter(function(n){ return n.Emotion === d})
		.transition()
		.ease('out')
		.delay('100')
		.duration('200').style('opacity',"1");

		d3.select(this).style('fill',"#e64040")

	});

	emotionLabels.on('mouseout',function(d){
		Circleheat.filter(function(m){ return m.Emotion === d;})
		.transition()
		.ease('cubic-in')
		.duration('100').style('opacity',"1")
		Textheat.filter(function(n){ return n.Emotion === d})
		.transition()
		.ease('out')
		.delay('100')
		.duration('200').style('opacity',"0");

		d3.select(this).style('fill',"black");
	});


	Circleheat.on('mouseover', function(d){
		d3.select(this).attr('stroke','#064650');

		heatdiv.transition()
			.duration("200")
			.style('opacity',0.9)
			.style('border-color',d3.select(this).style('fill'));
		
		heatdiv.html(d.Freq)
		.style("left","40px")
		.style('top',"23px")
		.style('font-size','22px')
		.style('border-style','solid')
		.style('border-width','4px')
		.style('visibility','visible');


	});

    
	Circleheat.on('mouseout',function(d){
		d3.select(this).attr('stroke','#fbffaf');
		heatdiv.style('visibility','hidden');


	});


	 }
)

 