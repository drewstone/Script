contract("Doctors", function(accounts) {
  function toHex(str) {
  	var hex = '';
  	for(var i=0;i<str.length;i++) {
  		hex += ''+str.charCodeAt(i).toString(16);
  	}
  	return hex;
  }

  it("should allow a new doctor to register", function(done) {
    var docInterface = Doctors.deployed();
    docInterface.add_doctor.sendTransaction(
      "Drew Stone",
      "03/29/1996",
      "Highland Beach",
      "Florida",
      33487,
      {
        from: accounts[0],
        value: 10000
      }
    ).then(function(tx_id) {
      // txReceipt(tx_id);
      return docInterface.doctor_count.call();
    }).then(function(count) {
      assert.equal(1, count.toNumber(), "Error, no doctor entered into system");
      return docInterface.get_doctor_address.call({from: accounts[0]});
    }).then(function(address) {
      var doc = Doctor.at(address);
      return doc.name.call();
    }).then(function(name) {
      assert.equal("Drew Stone", name, "Error, doctor's name is not equal");
    }).then(done).catch(done);
  });

  it("should allow a doctor to add a new patient", function(done) {
    var docInterface = Doctors.deployed();
    var patient = {
      name: "Patient Zero",
      dob: "01/01/1980",
      city: "Weston",
      state: "FL",
      zip: 12345,
    }
  });
});
