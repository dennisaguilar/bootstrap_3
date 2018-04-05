//----------------------------------
//   File          : js/pages/tables/datatable_basic.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

'use strict';

$(function() {
	$('.styled').uniform();
});
$(function() {

	// DataTable setup
	$('.datatable').DataTable({
		autoWidth: false,
		columnDefs: [
			{
				width: '10px',
				targets: 0
			},
			{
				targets: 1
			},
			{
				orderable: false,
				width: '100px',
				targets: 5
			},
			{
				width: '20%',
				targets: [1]
			}
		],
		order: [[ 0, 'desc' ]],
		dom: '<"datatable-header"fl><"datatable-scroll-lg"t><"datatable-footer"ip>',
		language: {
			search: '<span>Pesquisar:</span> _INPUT_',
			lengthMenu: '<span>Exibir:</span> _MENU_',
			paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
		},
		lengthMenu: [ 5, 10, 25, 50, 75, 100 ],
		displayLength: 5,
	});

	$('.dataTables_filter input[type=search]').attr('placeholder','...');
	$('.dataTables_filter input[type=search]').attr('class', 'form-control');

	$('.dataTables_length select').select2({
		minimumResultsForSearch: Infinity,
		width: '60px'
	});
});
