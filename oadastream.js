//Tests two see if a database is OADA compliant
//function oadastream(){
	var request = require('superagent');
	var expect = require('expect')
	//var app = require('../server.js').app;

	//Arbitartily instaniate future function parameters
	//Needs a URL parameter still
	

/*
	var file = {"datapoints":[{}]};
	file.datapoints.push({generator(file, size)});
	//file = setInterval(generator(N) , timestep) //generator will be a function in the future
	//Does js bring the newly generated array to this level?
	//file.push(value) //contraversy on speed of push source: http://stackoverflow.com/questions/351409/appending-to-array
 */
	describe('OADAstream test server', function() {
  		var id;

	  	//testing the POST function of the JSON API
	  	it('Post JSON yield', function(done) {
	    	request.post('http://localhost:3000/resources/stream/')
	      	.send({
	        	name: 'travis', occupation: 'student'
	      	})
	      	.end(function(e, res) {
	        	expect(e).to.be(null);
	        	expect(res.body._id).to.not.be(null);
	        	expect(res.body.length).to.be(1);
	        	expect(res.body[0]._id.length).to.be(24)
	        	id = res.body[0]._id;

	        	done();
	      	})
	  	});

	  	//testing the GET function of the JSON API
	  	it('Gets JSON yeild posted', function(done) {
	    	request.get('http://localhost:3000/resources/stream/' + id)
	      	.end(function(e, res) {
	        	expect(e).to.be(null);
	        	expect(typeof res.body).to.be('object')
	        	expect(res.body._id.length).to.be(24);
	        	expect(res.body._id).to.be(id)

	        	done();
	      	})
	  	});

	  	//testing the PUT function of the JSON API
	  	it('Update JSON yeild', function(done) {
	    	request.put('http://localhost:3000/resources/stream/' + id)
	      	.send({
	        	name: 'travis', occupation: 'computer engineer'
	      	})
	      	.end(function(e, res) {
	        	expect(e).to.equal(null);
	        	expect(typeof res.body).to.be.a('object');
	        	expect(res.body.msg).to.be.a('success');

	        	done();
	      	})
	  	});

	  	//testing the DELETE function of the JSON API
	  	it('Delete JSON yeild', function(done) {
	    	request.del('http://localhost:3000/resources/stream/' + id)
	      	.end(function(err, res) {
	        	expect(err).to.be(null);

	        	done();
	      	});
	  	});
	});

//}