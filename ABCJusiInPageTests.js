var webdriverio = require('webdriverio'),
  should = require('should');
  chai = require('chai');
// a test script block or suite
describe('ABC NEWS - Just In page', function() {

  // set timeout to 10 seconds
 this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function () {
    // load the driver for browser
    driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
    return driver.init().url('http://www.abc.net.au/news/justin/');
  });
   
      it('should contain title per article in just in page', function () {
    // load page, then call function()    
       return driver
      // get title, then pass title to function()
      .getText('/html/body/div[5]/div[2]/div/div[1]/div/ul/li[2]/h3/a').then( function (articletitle) {
        articletitle.should.be.not.empty;
        // uncomment for console debug
        //console.log('article title is: ' + articletitle);
      });
  });
  
  it('should contain timestamp per article in just in page', function () {
    // load page, then call function()    
       return driver
      .getText('/html/body/div[5]/div[2]/div/div[1]/div/ul/li[1]/p[1]/span/time/span[1]').then( function (articletimestamp) {
        articletimestamp.should.be.not.empty;
        // uncomment for console debug
        //console.log('article timestamp is : ' + articletimestamp);
      });
  });
    
  // a "hook" to run after all tests in this block
 after(function() {
    return driver.end();
  });
});