var Superhero = require('../lib/models/Superheroes')
var bodyParser = require('body-parser');

//This message will log for 500 errors
var message = 'Arrow: "You have failed this city!"';

module.exports = function(router) {
  router.use(bodyParser.json());
  //Posts a new superhero to the superhero collection
  router.post('/data', function(req, res) {
    var newSuperhero = new Superhero(req.body);
    newSuperhero.save(function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: message});
      }
      res.json(data);
    });
  });
  //Retrieves all superhero docs/fields from the superhero collection
  router.get('/data', function(req, res) {
    Superhero.find({}, function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: message});
      }
      res.json(data);
    });
  });
  //Replaces an existing superhero with a new identity
  router.put('/data/:alterEgo', function(req, res) {
    var updated = req.body;
    delete updated._id;

    Superhero.update({'_id': req.params.id}, updated, function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: message});
      }
      res.json({msg: 'successfully updated a superhero. A new person has taken on the role of the previous hero.'});
    });
  });
  //Deletes a superhero
  router.delete('/data/:alterEgo', function(req, res) {
    Superhero.remove({'alterEgo': req.params.alterEgo}, function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: message});
      }
      res.json({msg: 'successfully deleted a superhero'});
    });
  });

};//end router module
