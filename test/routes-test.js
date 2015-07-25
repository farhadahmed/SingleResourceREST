var chai = require('chai');
var expect = chai.expect;
var chaiHTTP = require('chai-http');

require('../server');

chai.use(chaiHTTP);

describe('route-test', function() {
  it('will post a new hero to superhero collection', function(done) {
    chai.request('http://localhost:3000')
        .post('/data')
        .send({"name": "heroTest", "alterEgo": "fake", "sex": "f"})
        .end(function(err, res) {
          expect(err).to.eql(null);
          done();
        });
  });
  it('will get hero test from superhero collection', function(done) {
    chai.request('localhost:3000')
        .get('/data')
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(typeof res.body).to.eql('object');
          done();
        });
  });
  it('will put a hero to superhero collection', function(done) {
    chai.request('localhost:3000')
        .put('/fake')
        .send({"name": "anotherHeroTest", "alterEgo": "fake", "sex": "m"})
        .end(function(err, res) {
          expect(err).to.eql(null);
          done();
        });
  });
  it('will delete heroTest from superhero collection', function(done) {
    chai.request('localhost:3000')
        .delete('/data/fake')
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect();
          done();
    });
  });
});
