//Tests two see if a database is OADA compliant
function oadastream(){

	//Arbitartily instaniate future function parameters
	//Needs a URL parameter still
	var size = 5; //param of how many data points in each JSON object, ie Force, Accel, Str, Concentration, time
	var timestep = 1 / 1000; //param of how often to execute in milliseconds
	var duration = 10; //param of how long to run the program in milliseconds


	var file = {"datapoints":[{}]};
	file.datapoints.push({generator(file, size)});
	//file = setInterval(generator(N) , timestep) //generator will be a function in the future
	//Does js bring the newly generated array to this level?
	//file.push(value) //contraversy on speed of push source: http://stackoverflow.com/questions/351409/appending-to-array


}

//Generates JSON objects to test the database
function generator(array, size){
	var array = {"data1": "1", "data2": "2", "data3": "data3": "3", "dataN": "N"}
	var i = 0;
	while (i < size)
	{
			


	}


	return array;
}