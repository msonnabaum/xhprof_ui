$(document).ready(function() {
  oTable = $('#xhprof-run-table').dataTable({
    "bPaginate": true,
    "bLengthChange": true,
    "bFilter": true,
    "bSort": true,
    "bInfo": true,
    "bAutoWidth": true,
    "bJQueryUI": true,
    "sPaginationType": "full_numbers",
    "iDisplayLength": 50,
  });
} );
