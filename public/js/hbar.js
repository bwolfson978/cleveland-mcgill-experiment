function displayHorizontalBarChart(data){
    visType = "HBar";
    for(i = 0; i < data.length; i++){
        svg.append("rect")
            .attr("y", (i*21) - 120)
            .attr("width", 2*data[i])
            .attr("x", -20)
            .attr("height", 20);
    }
    // add the dot to two of the rectangles
    var points = []
    for(i = 0; i < 2; i++){
        var pt = Math.floor(Math.random() * 10);
        if(points.includes(pt)){
            i--;
        }
        else{
            points.push(pt);
        }
    }

    var circles = svg.selectAll("circle")
        .data(points)
        .enter()
        .append("circle")
        .attr("fill", "white")
        .attr("cy", function(d){return (d * 21 + 10) - 120;})
        .attr("cx", function(d){return -20 + data[d]})
        .attr("r", 2);

    truePercent = truePercentCalculation(data[points[0]], data[points[1]]);
    numVis3--;
    trialNum++;
}