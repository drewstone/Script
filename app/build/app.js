var accounts;
var docInterface;
var doctor;

window.onload = function () {
  web3.eth.getAccounts(function (err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    console.log(accs);
    main();
    test();
  });
};

function test() {
  docInterface = Doctors.deployed();
  docInterface.add_doctor.sendTransaction("Drew Stone", "03/29/1996", "Highland Beach", "Florida", 33487, {
    from: accounts[0],
    value: 10000
  }).then(function (tx_id) {
    console.log(tx_id);
  });

  docInterface.doctor_count.call({ from: accounts[0] }).then(function (count) {
    console.log(count.toNumber());
  });

  // docInterface.get_doctor_address.call({from: accounts[0]}).then(function(result) {
  //   console.log(result);
  //   doctor = Doctor.at(result);
  //   console.log(doctor);
  // });
}