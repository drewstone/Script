var Contract = function (address, owner) {
  this.contract = Doctor.at(address);
};

Contract.prototype.getName = function (owner) {
  if (this.name.length != 0) return this.name;
  this.contract.name.call({ from: owner }).then(function (result) {
    this.name = result.toString();
    return this.name;
  });
};

Contract.prototype.getPatientCount = function (owner) {
  this.contract.patient_count.call({ from: owner }).then(function (result) {
    this.patient_count = result.toNumber();
    return this.patient_count;
  });
};

Contract.prototype.addPatient = function (owner, patient) {
  this.contract.add_patient.sendTransaction(patient._id, patient._name, patient._dob, patient._city, patient._state, patient._zip, { from: owner }).then(function (tx_id) {
    return tx_id;
  });
};