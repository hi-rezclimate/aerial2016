/**
* Theme: GrandTour Template
* Author: Shoichi Otomo
* Chart Js Page
*/

!function($) {
    "use strict";

    var ChartJs = function() {};

    ChartJs.prototype.respChart = function respChart(selector,type,data, options) {
        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // enable resizing matter
        $(window).resize( generateChart );

        // this function produce the responsive Chart JS
        function generateChart(){
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width() );
            switch(type){
                case 'Line':
                    new Chart(ctx).Line(data, options);
                    break;
                case 'Line2':
                    new Chart(ctx).Line2(data, options);
                    break;
                case 'Pie':
                    new Chart(ctx).Pie(data, options);
                    break;
                case 'Bar':
                    new Chart(ctx).Bar(data, options);
                    break;
                case 'Radar':
                    new Chart(ctx).Radar(data, options);
                    break;
                case 'PolarArea':
                    new Chart(ctx).PolarArea(data, options);
                    break;
            }
            // Initiate new chart or Redraw

        };
        // run function - render chart at first load
        generateChart();
    },
    //init
    ChartJs.prototype.init = function() {
        //honmoku lineChart
        var data = {
            labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
            datasets : [
                {
                    fillColor : "rgba(235, 193, 66, 0.4)",
                    strokeColor : "rgba(235, 193, 66, 1)",
                    pointColor : "#ebc142",
                    pointStrokeColor : "#fff",
                    data : [21,0,13,31,227,919,4515,12620,17097,15478,10901,627]
                },
                {
                    fillColor : "rgba(3, 169, 244, 0.4)",
                    strokeColor : "rgba(3, 169, 244, 1)",
                    pointColor : "rgba(3, 169, 244, 1)",
                    pointStrokeColor : "#fff",
                    data : [12,0,0,1,7,116,47,204,13677,21206,5090,21]
                },
                {
                    fillColor : "rgba(0, 150, 136, 0.4)",
                    strokeColor : "rgba(0, 150, 136, 1)",
                    pointColor : "rgba(0, 150, 136, 1)",
                    pointStrokeColor : "#fff",
                    data : [3482,37,1371,6622,149646,118698,119654,32332,44280,44689,42669,66673]
                },
                {
                    fillColor : "rgba(150, 150, 136, 0.4)",
                    strokeColor : "rgba(150, 150, 136, 1)",
                    pointColor : "rgba(150, 150, 136, 1)",
                    pointStrokeColor : "#fff",
                    data : [530,37,120,1700,2889,3898,2517,5327,572,250,376,952]
                },
                {
                    fillColor : "rgba(150, 0, 136, 0.4)",
                    strokeColor : "rgba(150, 0, 136, 1)",
                    pointColor : "rgba(150, 0, 136, 1)",
                    pointStrokeColor : "#fff",
                    data : [35,6,5,9,315,108,25,20,153,1089,3251,216]
                },
            ]
        };

        this.respChart($("#lineChart"),'Line',data);

        //daikoku chart
        var data1 = {
            labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
            datasets : [
                {
                    fillColor : "rgba(235, 193, 66, 0.4)",
                    strokeColor : "rgba(235, 193, 66, 1)",
                    pointColor : "#ebc142",
                    pointStrokeColor : "#fff",
                    data : [0,0,0,4,66,529,967,4095,7797,10733,5420,165]
                },
                {
                    fillColor : "rgba(3, 169, 244, 0.4)",
                    strokeColor : "rgba(3, 169, 244, 1)",
                    pointColor : "rgba(3, 169, 244, 1)",
                    pointStrokeColor : "#fff",
                    data : [0,0,0,0,0,56,21,38,8407,14054,3339,16]
                },
                {
                    fillColor : "rgba(0, 150, 136, 0.4)",
                    strokeColor : "rgba(0, 150, 136, 1)",
                    pointColor : "rgba(0, 150, 136, 1)",
                    pointStrokeColor : "#fff",
                    data : [0,0,1,627,22633,12799,7627,1591,2523,187,1878,665]
                },
                {
                    fillColor : "rgba(150, 150, 136, 0.4)",
                    strokeColor : "rgba(150, 150, 136, 1)",
                    pointColor : "rgba(150, 150, 136, 1)",
                    pointStrokeColor : "#fff",
                    data : [1,0,0,1,7,3,4,3,0,3,2,0]
                },
                {
                    fillColor : "rgba(150, 0, 136, 0.4)",
                    strokeColor : "rgba(150, 0, 136, 1)",
                    pointColor : "rgba(150, 0, 136, 1)",
                    pointStrokeColor : "#fff",
                    data : [189,13,34,345,692,1055,1438,5033,513,32,53,131]
                },
            ]
        };
        this.respChart($("#lineChart2"),'Line',data1);


        //isogo chart
        var data2 = {
            labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
            datasets : [
                {
                    fillColor : "rgba(235, 193, 66, 0.4)",
                    strokeColor : "rgba(235, 193, 66, 1)",
                    pointColor : "#ebc142",
                    pointStrokeColor : "#fff",
                    data : [0,0,0,0,2,33,239,108,1965,2016,1161,135]
                },
                {
                    fillColor : "rgba(3, 169, 244, 0.4)",
                    strokeColor : "rgba(3, 169, 244, 1)",
                    pointColor : "rgba(3, 169, 244, 1)",
                    pointStrokeColor : "#fff",
                    data : [0,0,0,0,0,1,7,1,16,565,198,5]
                },
                {
                    fillColor : "rgba(0, 150, 136, 0.4)",
                    strokeColor : "rgba(0, 150, 136, 1)",
                    pointColor : "rgba(0, 150, 136, 1)",
                    pointStrokeColor : "#fff",
                    data : [0,0,0,0,0,0,5,80,17,0,0,0]
                },
                {
                    fillColor : "rgba(150, 150, 136, 0.4)",
                    strokeColor : "rgba(150, 150, 136, 1)",
                    pointColor : "rgba(150, 150, 136, 1)",
                    pointStrokeColor : "#fff",
                    data : [42,0,1,6,104,101,101,17,15,31,34,5]
                },
                {
                    fillColor : "rgba(150, 0, 136, 0.4)",
                    strokeColor : "rgba(150, 0, 136, 1)",
                    pointColor : "rgba(150, 0, 136, 1)",
                    pointStrokeColor : "#fff",
                    data : [113,6,14,484,731,621,1541,1287,810,286,241,310]
                },
            ]
        };
        this.respChart($("#lineChart3"),'Line',data2);


        //radar chart
        var data4 = {
            labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
            datasets : [
                {
                    fillColor : "rgba(235, 193, 66, 0.5)",
                    strokeColor : "rgba(235, 193, 66, 0.9)",
                    pointColor : "rgba(235, 193, 66, 1)",
                    pointStrokeColor : "#fff",
                    data : [65,59,90,81,56,55,40]
                },
                {
                    fillColor : "rgba(0, 150, 136, 0.5)",
                    strokeColor : "rgba(0, 150, 136, 0.9)",
                    pointColor : "rgba(0, 150, 136, 1)",
                    pointStrokeColor : "#fff",
                    data : [28,48,40,19,96,27,100]
                }
            ]
        }
        this.respChart($("#radar"),'Radar',data4);

        //Polar area chart
        var data5 = [
            {
                value : 30,
                color: "#ebc142"
            },
            {
                value : 90,
                color: "#03a9f4"
            },
            {
                value : 24,
                color: "#009688"
            },
            {
                value : 58,
                color: "#f13c6e"
            },
            {
                value : 82,
                color: "#615ca8"
            },
            {
                value : 8,
                color: "#1ca8dd"
            }
        ]
        this.respChart($("#polarArea"),'PolarArea',data5);
    },
    $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs

}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.ChartJs.init()
}(window.jQuery);
