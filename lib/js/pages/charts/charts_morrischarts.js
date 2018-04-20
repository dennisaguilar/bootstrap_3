//----------------------------------
//   File          : js/pages/charts/charts_morrischarts.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Line Chart
// 2. Area Chart
// 3. Bar Chart
// 4. Donut Chart


$(function() {
	'use strict';



	// ---------------------------------
	// 2. Area Chart
	// ---------------------------------
	Morris.Area({
	  element: 'area-example',
	  data: [{
            period: '2010',
            iphone: 0,
            ipad: 0,
            itouch: 0
        }, {
            period: '2011',
            iphone: 50,
            ipad: 15,
            itouch: 5
        }, {
            period: '2012',
            iphone: 20,
            ipad: 50,
            itouch: 65
        }, {
            period: '2013',
            iphone: 60,
            ipad: 12,
            itouch: 7
        }, {
            period: '2014',
            iphone: 30,
            ipad: 20,
            itouch: 120
        }, {
            period: '2015',
            iphone: 25,
            ipad: 80,
            itouch: 40
        }, {
            period: '2016',
            iphone: 10,
            ipad: 10,
            itouch: 10
        }


      ],
	  xkey: 'period',
      ykeys: ['iphone', 'ipad', 'itouch'],
      labels: ['iPhone', 'iPad', 'iPod Touch'],
	  pointSize: 0,
      lineWidth: 0,
      fillOpacity: .4,
      pointStrokeColors: colors,
      behaveLikeLine: true,
      gridLineColor: '#e0e0e0',
      hideHover: 'auto',
      lineColors: colors,
      resize: true
	});


	// ---------------------------------
	// 4. Donut Chart
	// ---------------------------------
	Morris.Donut({
	  element: 'donut-example',
	  data: [
	    {label: "Elemento 1", value: 12},
	    {label: "Elemento 2", value: 30},
	    {label: "Elemento 3", value: 20}
	  ],
	  colors:colors
	});
});
