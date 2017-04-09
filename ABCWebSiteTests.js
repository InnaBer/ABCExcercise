var webdriverio = require('webdriverio'),
  should = require('should');
  chai = require('chai');
// a test script block or suite
describe('ABC NEWS - Test Website', function() {

  // set timeout to 10 seconds
 this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function () {
    // load the driver for browser
    driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
    return driver.init().url('http://www.abc.net.au/news/');
  });

  it('should load correct page title', function () {
    // load page, then call function()    
       return driver
      // get title, then pass title to function()
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("ABC News (Australian Broadcasting Corporation)");
        // uncomment for console debug
        //console.log('Current Page Title: ' + title);
      });
  });
  
    it('should load news banner', function () {
    // load page, then call function()    
       return driver
      // get title, then pass title to function()
      .isExisting('/html/body/div[2]/div/div/div[1]/a/img[2]').then( function (bannerExist) {
        // verify title
        (bannerExist).should.be.true;
        // uncomment for console debug
        //console.log('News banner is existing: ' + bannerExist);
      });
  });
  
     it('should navigate to just in page when clicked', function () {       
       return driver.click('#n-justin').waitForExist('/html/body/div[4]/div/div/p',5000)
	   .getUrl().then(function (newurl){
		  newurl.should.be.equal("http://www.abc.net.au/news/justin/")
		  // uncomment for console debug
		  //console.log('clicking on just in redirected to the following url: ' + newurl);
      });
  });	
  
  // a "hook" to run after all tests in this block
 after(function() {
    return driver.end();
  });
});