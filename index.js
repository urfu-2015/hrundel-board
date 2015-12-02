$(document).ready(function () {
    $('table')
        .removeClass('display')
        .addClass('table table-striped table-bordered')
        .DataTable({
            paging: false,
            order: [ 11, 'desc' ]
        })

    $('main').show();
});
