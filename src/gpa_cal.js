function gpa_cal(){
    var x = 3 / 2
    document.getElementById("demo").innerHTML = x;
}


function addsubj(){ 
	var table = document.getElementById('grade_table');     //call table
	var rowCount = table.rows.length;                       // count tr
	var cellCount = table.rows[0].cells.length;             // return first td
	var row = table.insertRow(rowCount);                    // create new row
	for(var i =0; i <= cellCount; i++){
		var cell = 'cell'+i;
		cell = row.insertCell(i);
		var copycel = document.getElementById('col'+i).innerHTML;
		cell.innerHTML=copycel;
		if(i == 3){ 
			var radioinput = document.getElementById('col3').getElementsByTagName('input'); 
			for(var j = 0; j <= radioinput.length; j++) { 
				if(radioinput[j].type == 'radio') { 
					var rownum = rowCount;
					radioinput[j].name = 'gender['+rownum+']';
				}
			}
		}
	}
}

function deletesubj(){
	var table = document.getElementById('grade_table');
	var rowCount = table.rows.length;
	if(rowCount > '2'){
		var row = table.deleteRow(rowCount-1);
		rowCount--;
	}
	else{
		alert('There should be atleast one subject to calculate :>');
	}
}
