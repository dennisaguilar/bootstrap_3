//----------------------------------
//   File          : js/pages/charts/charts_highcharts_bar.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Basic Bar
// 2. Stacked Bar
// 3. Basic column
// 4. Column with negative values
// 5. Stacked column
// 6. Fixed placement columns
// 7. Column range


$(function() {
	'use strict';

	

	// ---------------------------------
	// 3. Basic column
	// ---------------------------------
	Highcharts.chart('basic-column', {
	    chart: {
	        type: 'column',
			width: null,
			height: 350,
			backgroundColor: '#fff',
	    },
	    title: {
	        text: ''
	    },
	    subtitle: {
	        text: ''
	    },
		credits: {
			enabled: false
		},
	    xAxis: {
	        categories: [
	            'Jan',
	            'Fev',
	            'Mar',
	            'Abr',
	            'Mai',
	            'Jun',
	            'Jul',
	            'Ago',
	            'Set',
	            'Out',
	            'Nov',
	            'Dez'
	        ],
	        crosshair: true,
			labels: {
				style: {
			        color: chart_grid_text_color,
			    }
			},
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    yAxis: {
	        min: 0,
	        title: {
	            text: '',
				style: {
					color: chart_grid_text_color,
				}
	        },
			labels: {
				style: {
					color: chart_grid_text_color,
				}
	        },
	        lineWidth: 0,
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    tooltip: {
	        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
	        footerFormat: '</table>',
	        shared: true,
	        useHTML: true
	    },
	    plotOptions: {
	        column: {
	            pointPadding: 0.3,
	            borderWidth: 0
	        }
	    },
	    series: [{
	        name: 'Crescer Mais',
			color: '#e4472d',
	        data: [499, 715, 1064, 1292, 1440, 1760, 1356, 1485, 2164, 1941, 956, 544]

	    }, {
	        name: 'Crescer Juntos',
			color: '#bc0824',
	        data: [836, 738, 985, 934, 1060, 845, 1050, 1043, 912, 835, 1066, 923]

	    }]
	});

});
