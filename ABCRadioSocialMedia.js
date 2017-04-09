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
    return driver.init().url('http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406');
  });

    it('should open social media popup', function () {
       // load page, then call function()    
	   driver.
	   element('/html/body/div/div/div/div/a/div/button').click()
	   return driver.element('/html/body/div/div/div/div/a/div/button/div/span[1]/span[2]/svg')
	   getAttribute('href').then( function (hrefval){
       (hrefval).should.be.equal("https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fsdk%3Djoey%26u%3Dhttp%253A%252F%252Fwww.abc.net.au%252Fradionational%252Fprograms%252Fbigideas%252Fa-fortunate-universe%252F8076406%26display%3Dpopup%26ref%3Dplugin%26src%3Dshare_button&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Freturn%2Fclose%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=en_GB");
        // uncomment for console debug
		//console.log('News banner is existing: ' + hrefval);
         
      });
  });
  
  // a "hook" to run after all tests in this block
 after(function() {
    return driver.end();
  });
});