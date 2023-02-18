
function sum_unit(){
	var U1 = document.getElementById("unit1").value
	var U2 = document.getElementById("unit2").value
	var U3 = document.getElementById("unit3").value
	var U4 = document.getElementById("unit4").value
	var U5 = document.getElementById("unit5").value
	var U6 = document.getElementById("unit6").value
	var U7 = document.getElementById("unit7").value
	var U8 = document.getElementById("unit8").value

	var G1 = document.getElementById("grade1").value
	var G2 = document.getElementById("grade2").value
	var G3 = document.getElementById("grade3").value
	var G4 = document.getElementById("grade4").value
	var G5 = document.getElementById("grade5").value
	var G6 = document.getElementById("grade6").value
	var G7 = document.getElementById("grade7").value
	var G8 = document.getElementById("grade8").value
	
	let UNIT = [U1, U2, U3, U4, U5, U6, U7, U8];
	let GRADE = [G1, G2, G3, G4, G5, G6, G7, G8,]
	let sumGrade = 0
	let sumUnit = 0

	for(i = 0; i < GRADE.length; i++){
		if(GRADE[i] == "A"){
			GRADE[i] = Number(4)
		}
		else if(GRADE[i] == "B+"){
			GRADE[i] = Number(3.5)
		}
		else if(GRADE[i] == "B"){
			GRADE[i] = Number(3)
		}
		else if(GRADE[i] == "C+"){
			GRADE[i] = Number(2.5)
		}
		else if(GRADE[i] == "C"){
			GRADE[i] = Number(2)
		}
		else if(GRADE[i] == "C+"){
			GRADE[i] = Number(2.5)
		}
		else if(GRADE[i] == "D"){
			GRADE[i] = Number(1)
		}
		else if(GRADE[i] == "D+"){
			GRADE[i] = Number(1.5)
		}
		else if(GRADE[i] == "F"){
			GRADE[i] = Number(0)
		}

	}

	for (j = 0; j < UNIT.length; j++) {
		sumGrade += Number(UNIT[j]) * Number(GRADE[j])
		sumUnit += Number(UNIT[j]) 
	}
	
	var sum = Number(sumGrade) / Number(sumUnit)
	console.log(sumGrade)
	console.log(sumUnit)
	console.log(sum)
	document.getElementById("demo").innerHTML = sum.toFixed(2);
}







