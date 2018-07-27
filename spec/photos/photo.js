/**
* @file contactPage.js
*/

var ContactPage = function(){
	this.fileUpload = element(by.id('singleFileUploadInput'));
	this.message = element(by.css('upload-response'));
	this.submitButton = element(by.type('submit'));
	this.singleFileUploadSuccess = element(by.id('singleFileUploadSuccess', 'Foto carregada com sucesso!'));
	
	this.get = function() {
		browser.get('http://localhost:8080/');
	};
	
	this.fillForm = function (fileUpload, message) {
		this.fileUpload.sendKeys(fileUpload);
		browser.driver.sleep(100);
		this.message.sendKeys(message);
		browser.driver.sleep(100);
	};
	
	this.submit = function (fileUpload, message) {
		this.fillForm(fileUpload, message);
		browser.driver.sleep(100);
		this.submitButton.click();
	};
	
};

module.exports = new ContactPage();
