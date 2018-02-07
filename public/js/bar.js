function displayBarChart(data){
    visType = "Bar";
    for(i = 0; i < data.length; i++){
        svg.append("rect")
            .attr("x", i*21 - 80)
            .attr("width", 20)
            .attr("y", 100 - 2*data[i])
            .attr("height", 2*data[i]);
    }
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

    var circles = svg.selectAll("circle")
        .data(points)
        .enter()
        .append("circle")
        .attr("fill", "white")
        .attr("cx", function(d){return (d * 21 + 10) - 80;})
        .attr("cy", function(d){return 100 - 2*data[d] + data[d]})
        .attr("r", 2);

    truePercent = truePercentCalculation(data[points[0]], data[points[1]]);
    numVis1--;
    trialNum++;
}