'use strict';

/**
 * @file spec.js
 */
/*var Photo = require('./photos/photo.js'); */

// Casos de Teste
/*describe('Cenários de Testes InstaRitter: ', function(){
	beforeEach(function(){
		browser.ignoreSynchronization = true;
		browser.driver.manage().window().maximize();
		Photo.get();
	});	
	
	it('Verifica se o título da página', function(){
		browser.get('http://localhost:8080/index.html');
		expect(browser.getTitle()).toEqual('InstaRitter');
	}); */
	
describe('Cenários de Testes InstaRitter: ', function() {
		it('should have a title', function() {
			browser.get('http://localhost:8080/');
			expect(browser.getTitle()).toEqual('InstaRitter');
		});
	});
	
		
	it('Verifica se o Logo do website é apresentado na tela', function(){
		browser.get('http://localhost:8080/index.html');
		var mypic = element(by.css(".upload-header h2[src*='/images/header.jpg']"));
		expect(mypic.isPresent()).toBe(true);
	});
	
	it('Verifica se a target Upload Foto é apresentado na tela', function(){
		browser.get('http://localhost:8080/index.html');
		expect(element(by.css('.single-upload')).getText()).toEqual('Upload Foto:');
	});
	
	
	it('Verifica se há indicação de arquivo selecionado', function(){
		browser.get('http://localhost:8080/index.html');
		expect(element(by.css('.singleUploadForm')).getText()).toEqual('Nenhum arquivo selecionado');		
	});
		
	it('Verifica se o botão Enviar é apresentado na tela', function(){
		browser.get('http://localhost:8080/index.html');
		expect(element(by.css('.single-upload')).getText()).toEqual('Enviar');
	});
	
	it('Exibir mensagem de sucesso, caso ocorra', function () {
		Photo.submit('teste.gif');
		expect(Photo.singleFileUploadSuccess.isDisplayed()).toBe(true);
	});
	
	it('Exibir mensagem de erro, caso ocorra', function () {
		Photo.submit('http://localhost:8080/index.html');
		expect(Photo.singleFileUploadSuccess.isPresent()).toBe(false);
		expect(element(by.id('singleFileUploadError', 'Ocorreu um erro inesperado!')));
	});
	
});
