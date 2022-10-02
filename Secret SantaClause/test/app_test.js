var assignSantas  = require('../js/app').assignSantas;
var parseNames  = require('../js/app').parseNames;
var assert  = require('chai').assert;
var expect = require('chai').expect;

describe('secret santa app', function() {
  describe('assignSantas', function() {
    it('should return null for empty array', function () {
      var actual = assignSantas([]);

      assert.strictEqual(null, actual);
    });

    it('should return null for null', function () {
      var actual = assignSantas(null);

      assert.strictEqual(null, actual);
    });

    it('returns a list that equals the length of the original list', function () {
      var actual = assignSantas(['Cersei', 'Jamie', 'Tyrion']);
      var expected = 3;

      assert.lengthOf(actual, expected);
    });

    it('returns a list of pairs containing a santa and a recipient', function(){
      var actual = assignSantas(['Cersei', 'Jamie', 'Tyrion']);

      for (var i in actual) {
        expect(actual[i]).to.have.all.keys('santa', 'recipient');
      }
    });

    it('returns a list of pairs where a santa and her recipient are not the same person', function() {
      var actual = assignSantas(['Cersei', 'Jamie', 'Tyrion']);

      for (var i in actual) {
        var santa = actual[i].santa;
        var recipient = actual[i].recipient;

        expect(santa).not.equal(recipient);
      }
    });

    it('returns a list with no duplicate santas', function() {
      var actual = assignSantas(['Cersei', 'Jamie', 'Tyrion']);
      var santas = actual.map(function(item) { return item.santa} );

      var hasDuplicates = santas.some(function(item, index) {
        return santas.indexOf(item) != index;
      });
      
      assert.isNotTrue(hasDuplicates, 'hasDuplicates when santas = ' + santas);
    })

    it('returns a list with no duplicate recipients', function() {
      var actual = assignSantas(['Cersei', 'Jamie', 'Tyrion']);
      var recipients = actual.map(function(item) { return item.recipient} );

      var hasDuplicates = recipients.some(function(item, index) {
        return recipients.indexOf(item) != index;
      });
      
      assert.isNotTrue(hasDuplicates, 'hasDuplicates when recipients = ' + recipients);
    });
  });

  describe('parseNames', function() {
    it('should return an array', function() {
      var actual = parseNames('Cersei\nJamie\nTyrion');
      var expected = ['Cersei', 'Jamie', 'Tyrion'];

      assert.deepEqual(actual, expected);
    });

    it('should remove empty lines', function(){
      var actual = parseNames('Cersei\n\n\nJamie\nTyrion\n');
      var expected = ['Cersei', 'Jamie', 'Tyrion'];

      assert.deepEqual(actual, expected);
    });

    it('should trim each line', function(){
      var actual = parseNames('Cersei\n\n\nJamie\n\tTyrion\n');
      var expected = ['Cersei', 'Jamie', 'Tyrion'];

      assert.deepEqual(actual, expected);
    });
    
    it('should allow spaces in names', function() {
      var actual = parseNames('Cooper Von Snugglesworth\nStanley Teets');
      var expected = ['Cooper Von Snugglesworth', 'Stanley Teets'];

      assert.deepEqual(actual, expected);
    });

  });
});
