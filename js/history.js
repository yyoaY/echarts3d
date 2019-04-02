
clickTimeline:function() {
    var year = $(this).html();
    var index = year - 2015;
    var leftPos = d3Graphs.handleLeftOffset + d3Graphs.handleInterval * index;
    $("#handle").css('left', leftPos + "px");
    d3Graphs.updateViz();
}
