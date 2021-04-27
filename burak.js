$(document).ready(function () {
});

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Skill-Matrix"
        },
        axisY: {
            title: "grade"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            legendText: "Skills",
            dataPoints: [
                { y: 9, label: "Java", color: "green" },
                { y: 8, label: "Spring", color: "blue" },
                { y: 8, label: "JavaScript", color: "yellow" },
                { y: 8, label: "Html", color: "purple" },
                { y: 7, label: "Css", color: "red" },
                { y: 7, label: "Ajax", color: "brown" },
                { y: 7, label: "jQuery", color: "grey" },
                { y: 7, label: "Sql", color: "pink" },
                { y: 6, label: "Bootstrap", color: "coral" },
                { y: 6, label: "Python", color: "black" }

            ]
        }]
    });
    chart.render();
}