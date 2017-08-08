var expect = require('chai').expect;

describe('Testing suite capabilities', function () {
  it('confirms basic arithmetic', function () {
    expect(2+2).to.equal(4);
  });
});

it('confirms setTimeout\'s timer accuracy', function (done) {
  var start = new Date();
  setTimeout(function () {
    var duration = new Date() - start;
    expect(duration).to.be.closeTo(1000, 50);
    done();
  }, 1000);
});

describe('+', function () {
  var posNum, negNum;
  beforeEach(function () {
    posNum = 100;
    negNum = -50;
  });
  it('sums two positive numbers', function () {
    var result = posNum + posNum;
    expect(result).to.equal(200);
  });
  it('sums two negative number', function () {
    var result = negNum + negNum;
    expect(result).to.equal(-100);
  });
  it('sums a negative and a positive', function () {
    var result = negNum + posNum;
    expect(result).to.equal(50);
  });
  it('is commutative', function () {
    var resultA = negNum + posNum,
      resultB = posNum + negNum;
    expect(resultA).to.equal(resultB);
  });
});
