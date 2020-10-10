var mongoose = require('mongoose'),
  Data = mongoose.model('datas');

exports.list_all_Patients = function(req, res) {
  Data.find({}, function(err, pdata) {
    if (err)
      res.send(err);
	console.log(pdata)
    res.json(pdata);
  });
};




exports.create_a_Patient = function(req, res) {
  var new_Data = new Data(req.body);
  new_Data.save(function(err, pdata) {
    if (err)
      res.send(err);
    res.json(pdata);
  });
};


exports.read_a_Patient = function(req, res) {
  Data.findById(req.params.patientId, function(err, pdata) {
    if (err)
      res.send(err);
    res.json(pdata);
  });
};


exports.update_a_Patient = function(req, res) {
  Data.findOneAndUpdate({_id: req.params.patientId}, req.body, {new: true}, function(err, pdata) {
    if (err)
      res.send(err);
    res.json(pdata);
  });
};


exports.delete_a_Patient = function(req, res) {


  Data.remove({
    _id: req.params.patientId
  }, function(err, pdata) {
    if (err)
      res.send(err);
    res.json({ message: 'Data successfully deleted' });
  });
};

