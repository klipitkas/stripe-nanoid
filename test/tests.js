const assert = require('assert');
const stripenanoid = require('../index');

describe('Run a basic set of tests', function () {
  describe('Generate an ID of the default length', function () {
    it('should generate an id of length 21', function () {
      const id = stripenanoid();
      assert.equal(id.length, 21);
    });
  });
  describe('Generate an ID of a specific length', function () {
    it('should generate an id of length 4', function () {
      const options = { size: 4 };
      const id = stripenanoid('', options);
      assert.equal(id.length, 4);
    });
    it('should generate an id of length 100', function () {
      const options = { size: 100 };
      const id = stripenanoid('', options);
      assert.equal(id.length, 100);
    });
  });
  describe('Generate an ID with a specific prefix', function () {
    it('should generate an id with prefix cus', function () {
      const id = stripenanoid('cus');
      assert.equal(id.substr(0, 3), 'cus');
    });
    it('should generate an id with prefix tx', function () {
      const id = stripenanoid('tx');
      assert.equal(id.substr(0, 2), 'tx');
    });
  });
  describe('Handle prefix edge cases', function () {
    it('should generate an id without a prefix', function () {
      const id = stripenanoid();
      assert.equal(id.length, 21);
    });
    it('should generate an id with a prefix that is a number', function () {
      const id = stripenanoid(1);
      assert.equal(id.substr(0, 1), 1);
    });
    it('should generate an id with a null prefix', function () {
      const id = stripenanoid(null);
      assert.equal(id.length, 21);
    });
    it('should generate an id with an undefined prefix', function () {
      const id = stripenanoid(undefined);
      assert.equal(id.length, 21);
    });
    it('should generate an id with an _ (underscore) prefix', function () {
      const id = stripenanoid('_');
      assert.equal(id.substr(0, 2), '__');
    });
  });
});
