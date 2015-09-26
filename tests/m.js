var screenshot = function(filename) {
  return 'screenshots/' + filename;
};

describe('home page', function() {
  before(function() {
    casper.start('http://localhost:3000');
  });

  it('should have title \'Fog\'', function() {
      casper.then(function() {
        'Fog'.should.matchTitle;
      });
  });

  it('should have a header', function() {
    casper.capture(screenshot('test.png'));
    casper.waitForSelector('#header', function() {
      '#headers'.should.be.inDom;
    });
  });

  it('should bring you to another page on click', function() {
    casper.thenClick('#login', function() {

    });

    casper.then(function() {
      casper.capture(screenshot('test2.png'));
    });
  })

})
