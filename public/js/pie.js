function displayPieChart(data){
    visType = "Pie";
    var arc = d3.arc().outerRadius(100).innerRadius(0);
    var pointArc = d3.arc().outerRadius(100).innerRadius(0);
    var pie = d3.pie()
        .sort(null)
        .value(function(d) {return d;});
    var pChart = svg.selectAll(".arc")
        .data(pie(data)).enter().append("g")
        .attr("transform", "translate(" + 40 +","+ 40 +")")
        .attr("class", "arc");
    pChart.append("path")
        .attr("d", arc)
        .style("fill", "black");
    // add the dot to two of the rectangles
    var points = [];
    for(i = 0; i < 2; i++){
        var pt = Math.floor(Math.random() * 10);
        if(points.includes(pt)){
            i--;
        }
        else{
            points.push(pt);
        }
    }
    pChart.append("circle")
        .attr("transform", function(d){
            if(points.includes(d.index)){
                return "translate(" + pointArc.centroid(d) + ")";
            }})
        .attr("fill", function(d){
            if(points.includes(d.index)){
                return "white";
            }
        })
        .attr("r", function(d){
            if(points.includes(d.index)){
                return 2;
            }
        });
    truePercent = truePercentCalculation(data[points[0]], data[points[1]]);
    numVis2--;
    trialNum++;
}