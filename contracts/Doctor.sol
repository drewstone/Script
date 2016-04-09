contract Doctor {
  address public db_contract
  address public owner;
  string public name;
  string public dob;
  string public city;
  string public state;
  uint public zip;
  uint public patient_count;
  bytes32 public DEA_NO_HASH;

  struct Patient {
    string name;
    string dob;
    string city;
    string state;
    uint zip;
    string insurance;
    mapping (uint => Perscription[]) perscriptions;
  }

  struct Perscription {
    uint amount;
    uint filled_count;
    uint fill_threshold;
  }

  mapping (uint => Patient) patients;

  event New_Script()

  function Doctor(address _doctor, string _name, string _dob, string _city, string _state, uint _zip) {
    db_contract = msg.sender;
    owner = _doctor;
    name = _name;
    dob = _dob;
    city = _city;
    state = _state;
    zip = _zip;
    patient_count = 0;
  }

  function add_patient(uint _id, string _name, string _dob, string _city, string _state, uint _zip) {
    if (msg.sender == owner) {
      patients[_id].name = _name;
      patients[_id].dob = _dob;
      patients[_id].city = _city;
      patients[_id].state = _state;
      patients[_id].zip = _zip;
    } else {
      return;
    }
  }

  function add_perscription(uint _id, uint _perscription_id, uint amount, uint threshold) {
    if (msg.sender == owner) {
      Perscription script = Perscription(amount, 0, threshold);
      patients[_id].perscriptions[_perscription_id].push(script);
    } else {
      return;
    }
  }

  function kill() { if (msg.sender == owner) suicide(owner); }
}
