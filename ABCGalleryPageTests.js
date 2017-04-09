var webdriverio = require('webdriverio'),
  should = require('should');
  chai = require('chai');
// a test script block or suite
describe('ABC NEWS - Gallery tests', function() {

  // set timeout to 10 seconds
 this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function () {
    // load the driver for browser
    driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
    return driver.init().url('http://www.abc.net.au/news/2017-02-10/abc-open-pic-of-the-week/8256256');
  });
  
  it('Should display galley title', function () {
    // load page, then call function()    
       return driver
      .getText('/html/body/div[4]/div[3]/div/div[1]/div/h1').then( function (galleryPageTitle) {
        galleryPageTitle.should.be.equal("Your best pictures from the week");
        // uncomment for console debug
        //console.log('gallery title is : ' + galleryPageTitle);
      });
  });
  
    it('Should display galley last update date', function () {
    // load page, then call function()    
       return driver
      .getText('/html/body/div[4]/div[3]/div/div[1]/div/p[1]/span/time/span[1]').then( function (galleryPageUpdateDate) {
        galleryPageUpdateDate.should.be.not.empty;
        // uncomment for console debug
        //console.log('gallery title is : ' + galleryPageUpdateDate);
      });
  });
  
    it('Should display a picture once it clicked in gallery', function () {
    // load page, then call function()   
	   driver.element('/html/body/div[4]/div[2]/div/div/div/ul/li[3]').click();
       return driver
      .element('/html/body/div[4]/div[2]/div/div/div/ul/li[3]').getAttribute('class').then( function (clickedImageClass) {
	   clickedImageClass.should.be.equal('active');
       // uncomment for console debug
       //console.log('loaded image class is : ' + clickedImageClass);
      });
  });
  
      it('Should not display prev picture once other was clicked in gallery', function () {
    // load page, then call function()   
	   driver.element('/html/body/div[4]/div[2]/div/div/div/ul/li[5]').click();
       return driver
       .element('/html/body/div[4]/div[2]/div/div/div/ul/li[1]').getAttribute('class').then( function (clickedImageClass) {
	   clickedImageClass.should.be.equal('');
       // uncomment for console debug
       //console.log('loaded image class is : ' + clickedImageClass);
      });
  });
  
  

  // a "hook" to run after all tests in this block
 after(function() {
    return driver.end();
  });
});