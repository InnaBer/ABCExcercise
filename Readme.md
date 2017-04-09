I'm using my personal laptop for this exercise, with Microsoft windows installed.
In order to run those tests you need to prepare your machine:
1. go to https://chocolatey.org/ and install chocolatey (verify all the conditions prior to installing chocolatey)
2. In the same command line run 'choco install nodejs.install' in order to install node.js
3. Verify you have the latest chrome driver and it's updated in your Path variable. (if not, download it)
4. install mocha
5. install chai
6. run selenium in command line: $ java -jar -Dwebdriver.gecko.driver=geckodriver.exe selenium-server-standalone-3.0.1.jar
7. run each test category by indicating the name after mocha prefix in comand line example: $ mocha ABCGalleryPageTests.js









