$(document).ready(function() {	
	
	//$('#selectbasic1,#selectbasic2').addClass('btn btn-default  dropdown-toggle');
	_buildGrid();
	
	//alert();
});


var _buildGrid = function() {
	// create the data array
	var dataSet = [];
	var i = 1;
	var owner_ssn ="";
var last_name ="";
var first_name ="";
var home_phone ="";


	while (true) {
		
	owner_ssn = "i_" + i + "_owner_ssn";
	last_name = "i_" + i + "_last_name";
	first_name = "i_" + i + "_first_name";		
		
	home_phone = "i_" + i + "_home_phone";
	
		


		if (!$('input[name="' + owner_ssn + '"]').length) {
      break;
}
		var dat1= $('input[name="' + owner_ssn + '"]').val();
		var dat2= $('input[name="' + last_name + '"]').val();
		var dat3= $('input[name="' + first_name + '"]').val();
		
		var dat4= $('input[name="' + home_phone + '"]').val();
		
		

		var row = i;
		var jsonObj = {"0":"","1":dat1,"2": dat2 , "3": dat3 , "4": dat4 ,"DT_RowId": row};
		
		i++;
		dataSet.push(jsonObj);
	}

	$('#custable').DataTable({
		data : dataSet,
		
		columns : [  {"title" : ""},
				{ "title": "Owner_SSN" },
			   { "title": "Lastname" },
			   { "title": "Firstname" },			   
			   { "title": "Homephone" }
			   
			   

		],

		'columnDefs' : [
				{
					
					    "targets": "0",

					
					'checkboxes' : {
						'selectRow' : true,
						"scrollX": true
					}
					
				},
				{
	                "targets": [0],
	                "visible": false
	            }
				
				],
		"scrollY" : "750px",
		"scrollCollapse" : true,
		"paging" : false,
		'select' : {
			'style' : 'os'

		},

		
		"bPaginate" : true,
		"bFilter" : true,
		"bInfo" : true,
		"ordering": true,
		

	
	});
	var table = $('#custable').DataTable();
	
	$('#custable').on( 'click', 'tr td:nth-of-type(1)', function (){
var rid = table.row( this ).id();
var value = table.row( this ).data();
alert(value[1]);
var flag2=value[1];
//$("input[name='i_1_flagvalue']").val(value[1]) ;
//alert($("input[name='i_1_flagvalue']").val()) ;
callService(flag2, serviceCallback);
function callService(reply,callback) {
var serviceScreen = 'test_master';
var formdata = {

__posted_screen_name__ : serviceScreen,

__end_of_jpl_vars__ : 0
};

formdata['n_flagvalue'] = reply;

var saveData = $.ajax({
type: 'POST',
url: serviceScreen,
data: formdata,
success: callback
});
}

function serviceCallback(resultData) {
console.log(resultData);

$("body").html(resultData);   
//$("html").html(resultData) ;
//$('#products').replaceWith(resultData);
}

function doSomething(event) {
callService(event, serviceCallback);
}


});

	
	}
	
	
	


	
	
	//alert( 'Clicked row value '+value );
