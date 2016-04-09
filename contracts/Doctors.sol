import "Doctor.sol";

contract Doctors {
  uint public doctor_count;
  mapping (address => address) doctors;

  event NewDoc(string name, address doc, address ct, uint count);
  event NewPatient(uint patient, string name);
  event CallLog(address sender);

  function Doctors() {
    doctor_count = 0;
  }

  function add_doctor(string _name, string _dob, string _city, string _state, uint _zip) {
    Doctor newdoc = new Doctor(msg.sender, _name, _dob, _city, _state,_zip);
    doctors[msg.sender] = newdoc;
    NewDoc(_name, msg.sender, newdoc, doctor_count++);
  }

  function add_patient(uint _patientID, string _name, string _dob, string _city, string _state, uint _zip) {
    Doctor(doctors[msg.sender]).add_patient(msg.sender, _patientID, _name, _dob, _city, _state, _zip);
    NewPatient(_patientID, _name);
  }

  function get_doctor_address() constant returns (bytes20 result) {
    CallLog(msg.sender);
    result = bytes20(doctors[msg.sender]);
  }

  function() {
    throw;
  }
}
