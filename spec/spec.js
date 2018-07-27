'use strict';

/**
 * @file spec.js
 */
var Photo = require('./photos/photo.js');

// Casos de Teste
describe('ContactUs Suite Scenarios', function(){
	beforeEach(function(){
		browser.ignoreSynchronization = true;
		browser.driver.manage().window().maximize();
		ContactPage.get();
	});	
	
	it('Verifica se o título da página', function(){
		browser.get('');
		expect(browser.getTitle()).toEqual('InstaRitter Upload/Download de Fotos');
	});
		
	it('Verifica se o Logo do website é apresentado na tela', function(){
		browser.get('');
		var mypic = element(by.css("upload-header h2[src*='/images/header.jpg']"));
		expect(mypic.isPresent()).toBe(true);
	});
	
	it('Verifica se a target Upload Foto é apresentado na tela', function(){
		browser.get('');
		expect(element(by.css('h3')).getText()).toEqual('Upload Foto:');
	});
	
	
	it('Verifica se há indicação de arquivo selecionado', function(){
		browser.get('');
		expect(element(by.css('file-input')).getText()).toEqual('Nenhum arquivo selecionado');		
	});
		
	it('Verifica se o botão Enviar é apresentado na tela', function(){
		browser.get('');
		expect(element(by.css('primary submit-btn')).getText()).toEqual('Enviar');
	});
	
	it('Exibir mensagem de sucesso, caso ocorra', function () {
		ContactPage.submit('teste.gif');
		expect(ContactPage.singleFileUploadSuccess.isDisplayed()).toBe(true);
	});
	
	it('Exibir mensagem de erro, caso ocorra', function () {
		ContactPage.submit('');
		expect(ContactPage.singleFileUploadSuccess.isPresent()).toBe(false);
		expect(element(by.id('singleFileUploadError', 'Ocorreu um erro inesperado!')));
	});
	
});
