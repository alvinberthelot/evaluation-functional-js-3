const expect = require('chai').expect;
const program = require('../src/exercise2');

describe(`${program.title}`, function () {

  it('Function yolo with mysterious parameter should return a list of messages', function () {

    const whereIsMyMind = "???";

    const output = [
      "0 not known character(s) ",
      "3 male character(s) William, Gaius, Lee",
      "2 female character(s) Kara, Laura",
      "2 not applicable character(s) Number six, Number height"
    ];

    expect(program.run(whereIsMyMind)).to.be.eql(output);
  });

});