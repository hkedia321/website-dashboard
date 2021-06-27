Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

$('#txtStartDate').datepicker();
$('#txtEndDate').datepicker();

$('#txtStartDate').change(function(){
    var interval = 7;
    var startDate = new Date($(this).val());
    $('#txtEndDate').val(startDate.addDays(interval)
                        );
}
                         );
